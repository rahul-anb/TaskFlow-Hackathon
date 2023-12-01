// import React, { memo } from 'react';
// import { Handle, Position } from 'reactflow';

// export default memo(({ data, isConnectable }) => {
//   const { title, deadline, options, personAssigned } = data;
//   console.log("data in custom selector node:", title, deadline, options, personAssigned);
//   return (
//     <>      
//       <Handle
//         type="target"
//         id="c"
//         position={Position.Left}
//         style={{ top: 10, background: '#003049' }}
//         onConnect={(params) => console.log('handle onConnect', params)}
//         isConnectable={isConnectable}
//       />
      // <Handle
      //   type="target"
      //   id="d"
      //   position={Position.Left}
      //   style={{ bottom: 10, top: 'auto',  background: '#003049' }}
      //   onConnect={(params) => console.log('handle onConnect', params)}
      //   isConnectable={isConnectable}
      // />
      // <Handle
      //   type="target"
      //   id="e"
      //   position={Position.Top}
      //   style={{ background: '#555' }}
      //   isConnectable={isConnectable}
      // />
//       <div className="custom-node">
//         <div className="node-header">
//           <span className="task-name">{title}</span>
//           <span className="deadline">Deadline: {deadline || 'N/A'}</span>
//         </div>
//         <div className="node-content">
//            <h4> Assigned to: {personAssigned}</h4>
//           <div className="options-container">
//             {options.map((option, index) => (
//               <div key={index} className="option">
//                 <input type="checkbox" id={`checkbox-${index}`} />
//                 <label htmlFor={`checkbox-${index}`}>{option}</label>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

      // <Handle
      //   type="source"
      //   position={Position.Right}
      //   id="a"
      //   style={{ top: 10, background: '#555' }}
      //   isConnectable={isConnectable}
      // />
      // <Handle
      //   type="source"
      //   position={Position.Right}
      //   id="b"
      //   style={{ bottom: 10, top: 'auto', background: '#555' }}
      //   isConnectable={isConnectable}
      // />
      // <Handle
      //   type="source"
      //   id="h"
      //   position={Position.Bottom}
      //   style={{ background: '#555' }}
      //   isConnectable={isConnectable}
      // />
//     </>
//   );
// });


// import React, { memo, useState } from 'react';
// import { Handle, Position } from 'reactflow';

// export default memo(({ data, isConnectable }) => {
//   const { title, deadline, personAssigned } = data;
//   const [editableTitle, setEditableTitle] = useState(title);
//   const [editableOptions, setEditableOptions] = useState([...(data.options || [])]);

//   const handleTitleChange = (e) => {
//     setEditableTitle(e.target.value);
//   };

//   const handleOptionChange = (index, e) => {
//     const updatedOptions = [...editableOptions];
//     updatedOptions[index] = e.target.value;
//     setEditableOptions(updatedOptions);
//   };

//   return (
//     <>      
      // <Handle
      //   type="target"
      //   id="c"
      //   position={Position.Left}
      //   style={{ top: 10, background: '#003049' }}
      //   onConnect={(params) => console.log('handle onConnect', params)}
      //   isConnectable={isConnectable}
      // />
      //       <Handle
      //   type="target"
      //   id="d"
      //   position={Position.Left}
      //   style={{ bottom: 10, top: 'auto',  background: '#003049' }}
      //   onConnect={(params) => console.log('handle onConnect', params)}
      //   isConnectable={isConnectable}
      // />
      // <Handle
      //   type="target"
      //   id="e"
      //   position={Position.Top}
      //   style={{ background: '#555' }}
      //   isConnectable={isConnectable}
      // />

//       <div className="custom-node">
//         <div className="node-header">
//           <input
//             type="text"
//             value={editableTitle}
//             onChange={handleTitleChange}
//             placeholder="Task Name"
//             className="task-name"
//           />
//           <span className="deadline">Deadline: {deadline || 'N/A'}</span>
//         </div>
//         <div className="node-content">
//           <h4> Assigned to: {personAssigned}</h4>
//           <div className="options-container">
//             {editableOptions.map((option, index) => (
//               <div key={index} className="option">
//                 <input
//                   type="text"
//                   value={option}
//                   onChange={(e) => handleOptionChange(index, e)}
//                   placeholder={`Option ${index + 1}`}
//                 />
//               </div>
//             ))}
//             <button onClick={() => setEditableOptions([...editableOptions, 'New Option'])}>
//               Add Option
//             </button>
//           </div>
//         </div>
//       </div>

      // <Handle
      //   type="source"
      //   position={Position.Right}
      //   id="a"
      //   style={{ top: 10, background: '#555' }}
      //   isConnectable={isConnectable}
      // />
      // <Handle
      //   type="source"
      //   position={Position.Right}
      //   id="b"
      //   style={{ bottom: 10, top: 'auto', background: '#555' }}
      //   isConnectable={isConnectable}
      // />
      // <Handle
      //   type="source"
      //   id="h"
      //   position={Position.Bottom}
      //   style={{ background: '#555' }}
      //   isConnectable={isConnectable}
      // />
//     </>
//   );
// });

import React, { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import DatePicker from 'react-datepicker'; // You may need to install this library

import 'react-datepicker/dist/react-datepicker.css';

export default memo(({ data, isConnectable }) => {
  const { title, personAssigned } = data;
  const [editableTitle, setEditableTitle] = useState(title);
  const [editableOptions, setEditableOptions] = useState([...(data.options || [])]);
  const [editablePersonAssigned, setEditablePersonAssigned] = useState(personAssigned);
  const [editableDeadline, setEditableDeadline] = useState(data.deadline ? new Date(data.deadline) : null);

  const handleTitleChange = (e) => {
    setEditableTitle(e.target.value);
  };

  const handleOptionChange = (index, e) => {
    const updatedOptions = [...editableOptions];
    updatedOptions[index] = e.target.value;
    setEditableOptions(updatedOptions);
  };

  const handlePersonAssignedChange = (e) => {
    setEditablePersonAssigned(e.target.value);
  };

  const handleDeadlineChange = (date) => {
    setEditableDeadline(date);
  };

  return (
    <>
            <Handle
        type="target"
        id="c"
        position={Position.Left}
        style={{ top: 10, background: '#003049' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
            <Handle
        type="target"
        id="d"
        position={Position.Left}
        style={{ bottom: 10, top: 'auto',  background: '#003049' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Handle
        type="target"
        id="e"
        position={Position.Top}
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />

      <div className="custom-node">
        <div className="node-header">
          <input
            type="text"
            value={editableTitle}
            onChange={handleTitleChange}
            placeholder="Task Name"
            className="task-name"
          />
          <span className="deadline">
            Deadline:{' '}
            <DatePicker
              selected={editableDeadline}
              onChange={handleDeadlineChange}
              placeholderText="Select Deadline"
            />
          </span>
        </div>
        <div className="node-content">
          <h4>
            Assigned to:{' '}
            <input
              type="text"
              value={editablePersonAssigned}
              onChange={handlePersonAssignedChange}
              placeholder="Person Assigned"
            />
          </h4>
          <div className="options-container">
            {editableOptions.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="text"
                  value={option}
                  onChange={(e) => handleOptionChange(index, e)}
                  placeholder={`Option ${index + 1}`}
                />
              </div>
            ))}
            <button onClick={() => setEditableOptions([...editableOptions, 'New Option'])}>
              Add Option
            </button>
          </div>
        </div>
      </div>

      <Handle
        type="source"
        position={Position.Right}
        id="a"
        style={{ top: 10, background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ bottom: 10, top: 'auto', background: '#555' }}
        isConnectable={isConnectable}
      />
      <Handle
        type="source"
        id="h"
        position={Position.Bottom}
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
    </>
  );
});

