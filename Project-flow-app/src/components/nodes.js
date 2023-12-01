const old_nodes = [
    {
      id: '1',
      type: 'input',
      data: { label: 'An input node' },
      position: { x: 0, y: 50 },
      sourcePosition: 'right',
    },
    {
      id: '2',
      type: 'selectorNode',
      data: {
       
        title: 'Main Task 1',
        deadline: '2022-05-15',
        options: ['Subtask 1', 'Subtask 2'],
        personAssigned: 'John Doe',
      },
     
      position: { x: 300, y: 50 },
    },
    {
      id: '3',
      type: 'selectorNode',
      data: { title: 'Main Task 2', deadline: '2022-06-30', options: ['Subtask 1', 'Subtask 2', 'Subtask 3'], personAssigned: 'Jane Smith' },
      
      position: { x: 300, y: 200 },
    },
    {
      id: '4',
      type: 'selectorNode',
      data: {title: 'Main Task 3', deadline: '2022-07-15', options: ['Subtask 1', 'Subtask 2', 'Subtask 3', 'Subtask 4'], personAssigned: 'Mike Johnson' },
      
      position: { x: 300, y: 350 },
    },
    {
      id: '5',
      type: 'selectorNode',
      data: {  title: 'Main Task 4', deadline: '2022-08-30', options: ['Subtask 1', 'Subtask 2'], personAssigned: 'Emily Davis' },
      
      position: { x: 600, y: 50 },
    },
    {
      id: '6',
      type: 'selectorNode',
      data: {  title: 'Main Task 5', deadline: '2022-09-15', options: ['Subtask 1', 'Subtask 2', 'Subtask 3'], personAssigned: 'Chris Wilson' },
      
      position: { x: 600, y: 200 },
    },
    {
      id: '7',
      type: 'selectorNode',
      data: { title: 'Main Task 6', deadline: '2022-09-30', options: ['Subtask 1'], personAssigned: 'Sarah Thompson' },
      
      position: { x: 600, y: 350 },
    },
    {
      id: '8',
      type: 'output',
      data: { label: 'An output node' },
      position: { x: 900, y: 200 },
      targetPosition: 'left',
    },
  ]