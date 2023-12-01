import React, { useState, useEffect } from 'react';
import './TaskList.css';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

const TaskList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [showSave, setShowSave] = useState(false)

  const assigneeOptions = [
    { value: 'no_one', label: 'No one' },
    { value: 'john_doe', label: 'John Doe' },
    { value: 'jane_smith', label: 'Jane Smith' },
  ];

  const fetchTasksFromBackend = async (generateNewTask = false) => {

    if (generateNewTask && newTask != "") {
      const backendUrl = 'http://localhost:5000/new-task';

      try {
        const response = await axios.get(backendUrl);
        const data = response.data;
        console.log("DATA", data)
        setTasks(data);
        setNewTask("")
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    } else {
      const backendUrl = 'http://localhost:5000/get-task';

      try {
        const response = await axios.get(backendUrl);
        const data = response.data;

        if (data.success) {
          console.log("TASKAS", tasks)
          setTasks(data.tasks);
        } else {
          console.error('Error fetching tasks:', data.error);
        }
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }

    }

  };

  const updateTasksOnBackend = async () => {
    const backendUrl = 'http://localhost:5000/update-task';

    try {
      // Use Axios to make a POST request to the backend
      const response = await axios.post(backendUrl, { tasks });

      if (response.status === 200) {
        console.log('Tasks updated successfully on the backend');
        setShowSave(false);
      } else {
        console.error('Failed to update tasks on the backend');
      }
    } catch (error) {
      console.error('Error updating tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasksFromBackend();
  }, []);

  useEffect(() => {
    if (showSave === true) {
      updateTasksOnBackend();
    }
  }, [showSave])


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
    const bool = true;
    setShowSave(bool);
  };


  const handleInputChange = (taskId, field, value) => {
    const assigneeValue = value === 'no_one' ? '' : value;

    setTasks((prevTasks) =>
      prevTasks.map((task) => updateTaskAndSubtasks(task, taskId, field, assigneeValue))
    );
    const bool = true;
    setShowSave(bool);
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
      <input
        type="text"
        placeholder="Generate New Task..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={() => { fetchTasksFromBackend(true) }}>New Task</button>
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
