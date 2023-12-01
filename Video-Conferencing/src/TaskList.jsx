import React, { useState, useEffect } from 'react';
import './TaskList.css';
import parseTaskFile from './ParseTaskFile';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const TaskList = () => {
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

  const [tasks, setTasks] = useState([]);

  const assigneeOptions = [
    { value: 'no_one', label: 'No one' },
    { value: 'john_doe', label: 'John Doe' },
    { value: 'jane_smith', label: 'Jane Smith' },
  ];

  useEffect(() => {
    // Update the document title using the browser API
    const initialTasks = parseTaskFile(fileContent);
    console.log(initialTasks);
    setTasks(initialTasks)
  }, []);


  const handleCheckboxChange = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === taskId) {
          // Main task
          return {
            ...task,
            done: !task.done,
            subtasks: task.subtasks.map((subtask) => ({ ...subtask, done: !task.done })),
          };
        } else if (task.subtasks && task.subtasks.length > 0) {
          const subtaskIndex = task.subtasks.findIndex((subtask) => subtask.id === taskId);
          if (subtaskIndex !== -1) {
            const subtask = task.subtasks[subtaskIndex];
            const updatedSubtask = { ...subtask, done: !subtask.done };
            const updatedTask = {
              ...task,
              done: updatedSubtask.done ? task.done : false,
              subtasks: task.subtasks.map((subtask, index) =>
                index === subtaskIndex ? updatedSubtask : subtask
              ),
            };
            return updatedTask;
          } else {
            return task;
          }
        } else {
          return task;
        }
      })
    );
  };


  const handleInputChange = (taskId, field, value) => {
    const assigneeValue = value === 'no_one' ? '' : value;

    setTasks((prevTasks) =>
      prevTasks.map((task) => updateTaskAndSubtasks(task, taskId, field, assigneeValue))
    );
  };


  const updateTaskAndSubtasks = (task, taskId, field, value) => {
    if (task.id === taskId) {
      // Main task
      return { ...task, [field]: value };
    } else if (task.subtasks && task.subtasks.length > 0) {
      // Subtask
      return {
        ...task,
        subtasks: task.subtasks.map((subtask) => {
          if (subtask.id === taskId) {
            return { ...subtask, [field]: value };
          } else {
            return subtask;
          }
        }),
      };
    } else {
      return task;
    }
  };

  const renderTasks = (tasks, level = 0) => (
    <>
      {tasks.map((task) => (
        <React.Fragment key={task.id}>
          <tr className={`level-${level}`}>
            <td>
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => handleCheckboxChange(task.id)}
              />
              {task.text}
            </td>
            <td>
              <div className="centered-input">
                <Select
                  options={assigneeOptions}
                  value={
                    task.assignee
                      ? assigneeOptions.find((option) => option.value === task.assignee)
                      : null
                  }
                  onChange={(selectedOption) =>
                    handleInputChange(task.id, 'assignee', selectedOption ? selectedOption.value : '')
                  }
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: 'black',
                      color: 'red',
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: 'white',
                    }),
                  }}
                />

              </div>
            </td>
            <td>
              <div className="centered-input">
                <DatePicker
                  selected={task.dueDate ? new Date(task.dueDate) : null}
                  onChange={(date) =>
                    handleInputChange(task.id, 'dueDate', date.toISOString())
                  }
                  dateFormat="yyyy-MM-dd"
                  className={`datepicker-level-${level}`}
                />
              </div>
            </td>
            <td>
              <div className="centered-input">
                <input
                  type="text"
                  value={task.comment}
                  onChange={(e) =>
                    handleInputChange(task.id, 'comment', e.target.value)
                  }
                  className={`text-input-level-${level}`}
                />
              </div>
            </td>
          </tr>
          {task.subtasks &&
            task.subtasks.length > 0 &&
            renderTasks(task.subtasks, level + 1)}
        </React.Fragment>
      ))}
    </>
  );



  return (
    <div>
      <h1>Task List for Inventory Management System</h1>
      <table className="task-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Assignee</th>
            <th>Due Date</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>{renderTasks(tasks)}</tbody>
      </table>
    </div>
  );
};

export default TaskList;
