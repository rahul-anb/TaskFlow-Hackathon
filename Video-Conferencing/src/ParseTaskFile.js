const parseTaskFile = (fileContent) => {
    const lines = fileContent.split('\n');

    const tasks = [];
    let currentTask = null;

    lines.forEach((line) => {
        if (line.trim() === "") {
            return;
        }

        const matchMainTask = line.match(/^\s*(\d+)\.\s(.+):$/);
        const matchSubtask = line.match(/^\s*([a-z]\.\s.+)$/);

        if (matchMainTask) {
            const mainTaskId = matchMainTask[1];
            currentTask = {
                id: mainTaskId,
                text: matchMainTask[2].trim(),
                done: false,
                assignee: '',
                dueDate: '',
                comment: '',
                subtasks: [],
            };
            tasks.push(currentTask);
        } else if (matchSubtask && currentTask) {
            const subtaskId = `${currentTask.id}.${matchSubtask[1].charAt(0)}`;
            const subtask = {
                id: subtaskId,
                text: matchSubtask[1].trim().substring(3), // Skip the subtask identifier (e.g., 'a. ')
                done: false,
                assignee: '',
                dueDate: '',
                comment: '',
            };
            currentTask.subtasks.push(subtask);
        }
    });

    return tasks;
};


export default parseTaskFile;
