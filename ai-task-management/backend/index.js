const express = require('express');
const parseTaskFile = require('./ParseTaskFile');
const fs = require('fs');
const app = express();
const port = 5000;
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(express.json());

// Use cors middleware to handle CORS headers
app.use(cors());
app.use(bodyParser.json());

app.get('/get-task', (req, res) => {
    try {
        // Read tasks from the existing JSON file
        const fileContent = fs.readFileSync('tasks.json', 'utf-8');
        const tasks = JSON.parse(fileContent);

        res.json({ success: true, tasks });
    } catch (error) {
        console.error('Error reading tasks:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.get('/new-task', (req, res) => {
    try {
        // Read tasks from the file
        // const fileContent = fs.readFileSync('tasks.txt', 'utf-8');
        const fileContent = `
    Task List for Inventory Management System

    1. System Requirements:
        a. Identify system requirements
        b. Create system architecture
        c. Design system components
        d. Test system for accuracy

    2. Data Storage:
        a. Set up data storage infrastructure
        b. Design database tables
        c. Implement data security
        d. Test data storage for accuracy

    3. User Interface:
        a. Design user interface
        b. Develop user interface components
        c. Test user interface for accuracy

    4. Reports and Analytics:
        a. Design reports
        b. Develop analytics
        c. Test reports and analytics for accuracy

    5. Testing and Deployment:
        a. Test system for accuracy
        b. Debug system
        c. Deploy system

    6. Maintenance and Support:
        a. Monitor system performance
        b. Troubleshoot system issues
        c. Provide technical support
  `;
        const tasks = parseTaskFile(fileContent);

        // Save tasks to a JSON file
        fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2), 'utf-8');

        res.json(tasks);
    } catch (error) {
        console.error('Error reading tasks:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/update-task', (req, res) => {
    try {
        const updatedTasks = req.body.tasks;

        // Save updated tasks to a JSON file
        fs.writeFileSync('tasks.json', JSON.stringify(updatedTasks, null, 2), 'utf-8');

        res.json({ success: true, message: 'Tasks updated successfully on the backend' });
    } catch (error) {
        console.error('Error updating tasks on the backend:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Backend server listening at http://localhost:${port}`);
});