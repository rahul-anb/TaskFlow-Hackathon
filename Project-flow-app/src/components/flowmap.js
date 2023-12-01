// import React, { useState, useEffect, useCallback } from 'react';

// import ReactFlow, {
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   addEdge,
// } from 'reactflow';

// import 'reactflow/dist/style.css';


// import CustomSelectorNode from './CustomSelectorNode';
// const prompt = "some text";

// const initBgColor = '#c8b6ff';
// const defaultViewport = { x: 0, y: 0, zoom: 1.5 };
// const connectionLineStyle = { stroke: '#fff' };
// const snapGrid = [20, 20];
// const nodeTypes = {
//   selectorNode: CustomSelectorNode,
// };


// const FlowMap = (nodesVal) => {
//     const [nodes, setNodes, onNodesChange] = useNodesState([]);
//     const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//     const [bgColor, setBgColor] = useState(initBgColor);

//  useEffect(() => {
//  // console.log("Got nodesas = ", nodesVal);
//     const onChange = (event) => {
//       setNodes((nds) =>
//         nds.map((node) => {
//           if (node.id !== '2') {
//             return node;
//           }

//           const color = '#c8b6ff';

//           setBgColor(color);

//           return {
//             ...node,
//             data: {
//               ...node.data,
//               color,
//             },
//           };
//         })
//       );
//     };

// setNodes([
//   {
//     id: '1',
//     type: 'input',
//     data: { label: 'An input node' },
//     position: { x: 0, y: 50 },
//     sourcePosition: 'right',
//   },
//   {
//     id: '2',
//     type: 'selectorNode',
//     data: { onChange: onChange, color: initBgColor, title: 'Main Task 1', deadline: '2022-05-15', options: ['Subtask 1', 'Subtask 2'], personAssigned: 'John Doe' },
//     style: { border: '1px solid #777', padding: 10 },
//     position: { x: 300, y: 50 },
//   },
//   {
//     id: '3',
//     type: 'selectorNode',
//     data: { onChange: onChange, color: initBgColor, title: 'Main Task 2', deadline: '2022-06-30', options: ['Subtask 1', 'Subtask 2', 'Subtask 3'], personAssigned: 'Jane Smith' },
//     style: { border: '1px solid #777', padding: 10 },
//     position: { x: 300, y: 200 },
//   },
//   {
//     id: '4',
//     type: 'selectorNode',
//     data: { onChange: onChange, color: initBgColor, title: 'Main Task 3', deadline: '2022-07-15', options: ['Subtask 1', 'Subtask 2', 'Subtask 3', 'Subtask 4'], personAssigned: 'Mike Johnson' },
//     style: { border: '1px solid #777', padding: 10 },
//     position: { x: 300, y: 350 },
//   },
//   {
//     id: '5',
//     type: 'selectorNode',
//     data: { onChange: onChange, color: initBgColor, title: 'Main Task 4', deadline: '2022-08-30', options: ['Subtask 1', 'Subtask 2'], personAssigned: 'Emily Davis' },
//     style: { border: '1px solid #777', padding: 10 },
//     position: { x: 600, y: 50 },
//   },
//   {
//     id: '6',
//     type: 'selectorNode',
//     data: { onChange: onChange, color: initBgColor, title: 'Main Task 5', deadline: '2022-09-15', options: ['Subtask 1', 'Subtask 2', 'Subtask 3'], personAssigned: 'Chris Wilson' },
//     style: { border: '1px solid #777', padding: 10 },
//     position: { x: 600, y: 200 },
//   },
//   {
//     id: '7',
//     type: 'selectorNode',
//     data: { onChange: onChange, color: initBgColor, title: 'Main Task 6', deadline: '2022-09-30', options: ['Subtask 1'], personAssigned: 'Sarah Thompson' },
//     style: { border: '1px solid #777', padding: 10 },
//     position: { x: 600, y: 350 },
//   },
//   {
//     id: '8',
//     type: 'output',
//     data: { label: 'An output node' },
//     position: { x: 900, y: 200 },
//     targetPosition: 'left',
//   },
// ]);

// setEdges([
//   {
//     id: '1-2',
//     source: '1',
//     target: '2',
//     animated: true,
//     style: { stroke: '#fff' },
//   },
//   {
//     id: '2-3',
//     source: '2',
//     target: '3',
//     sourceHandle: 'a',
//     animated: true,
//     style: { stroke: '#fff' },
//   },
//   {
//     id: '2-4',
//     source: '2',
//     target: '4',
//     sourceHandle: 'b',
//     animated: true,
//     style: { stroke: '#fff' },
//   },
//   {
//     id: '3-5',
//     source: '3',
//     target: '5',
//     sourceHandle: 'a',
//     animated: true,
//     style: { stroke: '#fff' },
//   },
//   {
//     id: '3-6',
//     source: '3',
//     target: '6',
//     sourceHandle: 'b',
//     animated: true,
//     style: { stroke: '#fff' },
//   },
//   {
//     id: '4-7',
//     source: '4',
//     target: '7',
//     sourceHandle: 'a',
//     animated: true,
//     style: { stroke: '#fff' },
//   },
//   {
//     id: '5-8',
//     source: '5',
//     target: '8',
//     sourceHandle: 'a',
//     animated: true,
//     style: { stroke: '#fff' },
//   },
//   {
//     id: '6-8',
//     source: '6',
//     target: '8',
//     sourceHandle: 'b',
//     animated: true,
//     style: { stroke: '#fff' },
//   },
//   {
//     id: '7-8',
//     source: '7',
//     target: '8',
//     sourceHandle: 'a',
//     animated: true,
//     style: { stroke: '#fff' },
//   },
// ]);
      
//   }, [nodesVal]);
//   const onConnect = useCallback(
//     (params) =>
//       setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
//     []
//   );
//   return (
//     <div style={{ width: '80vw', height: '80vh' }}>
//     <ReactFlow
//       nodes={nodes}
//       edges={edges}
//       onNodesChange={onNodesChange}
//       onEdgesChange={onEdgesChange}
//       onConnect={onConnect}
//       style={{ background: bgColor }}
//       nodeTypes={nodeTypes}
//       connectionLineStyle={connectionLineStyle}
//       snapToGrid={true}
//       snapGrid={snapGrid}
//       defaultViewport={defaultViewport}
//       fitView
//       attributionPosition="bottom-left"
//     >
//       <MiniMap
//         nodeStrokeColor={(n) => {
//           if (n.type === 'input') return '#0041d0';
//           if (n.type === 'selectorNode') return bgColor;
//           if (n.type === 'output') return '#ff0072';
//         }}
//         nodeColor={(n) => {
//           if (n.type === 'selectorNode') return bgColor;
//           return '#fff';
//         }}
//       />
//       <Controls />

//     <Background color="black" variant="dots" gap={12} size={1} />
//     </ReactFlow>

//     </div>
//   );
// };

// export default FlowMap;



//The bertter working implementation:


// import React, { useState, useEffect, useCallback } from 'react';
// import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
// import 'reactflow/dist/style.css';
// import {useNodes, useEdges} from 'react-flow-renderer'; // Import from react-flow-renderer
// import 'react-flow-renderer/dist/style.css'; 

// import CustomSelectorNode from './CustomSelectorNode';

// const initBgColor = '#c8b6ff';
// const defaultViewport = { x: 0, y: 0, zoom: 1.5 };
// const connectionLineStyle = { stroke: '#fff' };
// const snapGrid = [20, 20];
// const nodeTypes = {
//   selectorNode: CustomSelectorNode,
// };

// const FlowMap = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState([]);
//   const [edges, setEdges, onEdgesChange] = useEdgesState([]);
//   const [bgColor, setBgColor] = useState(initBgColor);

//   useEffect(() => {
//     const onChange = (event) => {
//       setNodes((nds) =>
//         nds.map((node) => {
//           if (node.id !== '2') {
//             return node;
//           }

//           const color = '#c8b6ff';

//           setBgColor(color);

//           return {
//             ...node,
//             data: {
//               ...node.data,
//               color,
//             },
//           };
//         })
//       );
//     };

//     setNodes([
//       {
//         id: '1',
//         type: 'input',
//         data: { label: 'An input node' },
//         position: { x: 0, y: 50 },
//         sourcePosition: 'right',
//       },
//       {
//         id: '2',
//         type: 'selectorNode',
//         data: { onChange: onChange, color: initBgColor, title: 'Main Task 1', deadline: '2022-05-15', options: ['Subtask 1', 'Subtask 2'], personAssigned: 'John Doe' },
//         style: { border: '1px solid #777', padding: 10 },
//         position: { x: 300, y: 50 },
//       },
    //   {
    //     id: '3',
    //     type: 'selectorNode',
    //     data: { onChange: onChange, color: initBgColor, title: 'Main Task 2', deadline: '2022-06-30', options: ['Subtask 1', 'Subtask 2', 'Subtask 3'], personAssigned: 'Jane Smith' },
    //     style: { border: '1px solid #777', padding: 10 },
    //     position: { x: 300, y: 200 },
    //   },
    //   {
    //     id: '4',
    //     type: 'selectorNode',
    //     data: { onChange: onChange, color: initBgColor, title: 'Main Task 3', deadline: '2022-07-15', options: ['Subtask 1', 'Subtask 2', 'Subtask 3', 'Subtask 4'], personAssigned: 'Mike Johnson' },
    //     style: { border: '1px solid #777', padding: 10 },
    //     position: { x: 300, y: 350 },
    //   },
    //   {
    //     id: '5',
    //     type: 'selectorNode',
    //     data: { onChange: onChange, color: initBgColor, title: 'Main Task 4', deadline: '2022-08-30', options: ['Subtask 1', 'Subtask 2'], personAssigned: 'Emily Davis' },
    //     style: { border: '1px solid #777', padding: 10 },
    //     position: { x: 600, y: 50 },
    //   },
    //   {
    //     id: '6',
    //     type: 'selectorNode',
    //     data: { onChange: onChange, color: initBgColor, title: 'Main Task 5', deadline: '2022-09-15', options: ['Subtask 1', 'Subtask 2', 'Subtask 3'], personAssigned: 'Chris Wilson' },
    //     style: { border: '1px solid #777', padding: 10 },
    //     position: { x: 600, y: 200 },
    //   },
    //   {
    //     id: '7',
    //     type: 'selectorNode',
    //     data: { onChange: onChange, color: initBgColor, title: 'Main Task 6', deadline: '2022-09-30', options: ['Subtask 1'], personAssigned: 'Sarah Thompson' },
    //     style: { border: '1px solid #777', padding: 10 },
    //     position: { x: 600, y: 350 },
    //   },
    //   {
    //     id: '8',
    //     type: 'output',
    //     data: { label: 'An output node' },
    //     position: { x: 900, y: 200 },
    //     targetPosition: 'left',
    //   },
    // ]);

    // setEdges([
    //   {
    //     id: '1-2',
    //     source: '1',
    //     target: '2',
    //     animated: true,
    //     style: { stroke: '#fff' },
    //   },
    //   {
    //     id: '2-3',
    //     source: '2',
    //     target: '3',
    //     sourceHandle: 'a',
    //     animated: true,
    //     style: { stroke: '#fff' },
    //   },
    //   {
    //     id: '2-4',
    //     source: '2',
    //     target: '4',
    //     sourceHandle: 'b',
    //     animated: true,
    //     style: { stroke: '#fff' },
    //   },
    //   {
    //     id: '3-5',
    //     source: '3',
    //     target: '5',
    //     sourceHandle: 'a',
    //     animated: true,
    //     style: { stroke: '#fff' },
    //   },
    //   {
    //     id: '3-6',
    //     source: '3',
    //     target: '6',
    //     sourceHandle: 'b',
    //     animated: true,
    //     style: { stroke: '#fff' },
    //   },
    //   {
    //     id: '4-7',
    //     source: '4',
    //     target: '7',
    //     sourceHandle: 'a',
    //     animated: true,
    //     style: { stroke: '#fff' },
    //   },
    //   {
    //     id: '5-8',
    //     source: '5',
    //     target: '8',
    //     sourceHandle: 'a',
    //     animated: true,
    //     style: { stroke: '#fff' },
    //   },
    //   {
    //     id: '6-8',
    //     source: '6',
    //     target: '8',
    //     sourceHandle: 'b',
    //     animated: true,
    //     style: { stroke: '#fff' },
    //   },
    //   {
    //     id: '7-8',
    //     source: '7',
    //     target: '8',
    //     sourceHandle: 'a',
    //     animated: true,
    //     style: { stroke: '#fff' },
    //   },
    // ]);
//   }, []);

//   const onConnect = useCallback(
//     (params) =>
//       setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
//     []
//   );

//   const handleAddNode = (nodeType) => {
//     // Logic to add a new node based on the selected nodeType
//     // For simplicity, we add a default node at a fixed position
//     const newNode = {
//       id: `${nodes.length + 1}`,
//       type: nodeType,
//       data: { label: `New ${nodeType} node` },
//       position: { x: 300, y: 200 },
//     };

//     setNodes((prevNodes) => [...prevNodes, newNode]);
//   };

//   return (
//     <div style={{ width: '80vw', height: '80vh' }}>
//       <button onClick={() => handleAddNode('input')}>Add Input Node</button>
//       <button onClick={() => handleAddNode('output')}>Add Output Node</button>
//       <button onClick={() => handleAddNode('selectorNode')}>Add Custom Node</button>

//       <ReactFlow
//         nodes={nodes}
//         edges={edges}
//         onNodesChange={onNodesChange}
//         onEdgesChange={onEdgesChange}
//         onConnect={onConnect}
//         style={{ background: bgColor }}
//         nodeTypes={nodeTypes}
//         connectionLineStyle={connectionLineStyle}
//         snapToGrid={true}
//         snapGrid={snapGrid}
//         defaultViewport={defaultViewport}
//         fitView
//         attributionPosition="bottom-left"
//       >
//         <MiniMap
//           nodeStrokeColor={(n) => {
//             if (n.type === 'input') return '#0041d0';
//             if (n.type === 'selectorNode') return bgColor;
//             if (n.type === 'output') return '#ff0072';
//           }}
//           nodeColor={(n) => {
//             if (n.type === 'selectorNode') return bgColor;
//             return '#fff';
//           }}
//         />
//         <Controls />

//         <Background color="black" variant="dots" gap={12} size={1} />
//       </ReactFlow>
//     </div>
//   );
// };

// export default FlowMap;


//new one with everything editable:



import React, { useState, useEffect, useCallback } from 'react';
import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import { collection, addDoc, getDocs } from "firebase/firestore";
import nodes from './nodes';
import edges from './edges';
import axios from 'axios';

import CustomSelectorNode from './CustomSelectorNode';

const initBgColor = '#c8b6ff';
const defaultViewport = { x: 0, y: 0, zoom: 1.5 };
const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [20, 20];
const nodeTypes = {
  selectorNode: CustomSelectorNode,
};

const FlowMap = ({nodes, edges, onNodesChange, onEdgesChange , setNewNodes,setNewEdges}) => {
  // const [nodes, setNewNodes, onNodesChange] = useNodesState([]);
  // const [edges, setNewEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);


  useEffect(() => {
    // const fetchDataFromServer = async () => {
      // try {
      //   const response = await axios.post('http://localhost:5000/convert-json');
      //   const { setNodes, setEdges } = response.data;
  
      //   // Iterate over fetched nodes and create ReactFlow nodes
      //   const mappedNodes = setNodes.map((node) => {
      //     return {
            
      //       id: node.id.toString(), 
      //       type: node.type,
      //       data: { label: node.data.label, title: node.data.title, deadline: node.data.deadline, options: node.data.options, personAssigned: node.data.personAssigned },
      //       position: { x: node.position.x, y: node.position.y },
      //     };
      //   });

      //   const mappedEdges = setEdges.map((node) => {
      //     return {
            
      //       id: node.id.toString(), 
      //       source: node.source.toString(),
      //       target: node.target.toString(),
      //       animated: true,
      //       sourceHandle: node.sourceHandle,
      //       style: { stroke: '#fff' },
      //     };
      //   });
  
      //   setNewNodes(mappedNodes);
      //   setNewEdges(mappedEdges);
      // } catch (error) {
      //   console.error('Error fetching data from server:', error);
      // }
    // };
  
    // fetchDataFromServer();

    setNewNodes(nodes);
    setNewEdges(edges);
  }, [nodes, edges]);
  

  useEffect(() => {
    const onChange = (event) => {
      setNewNodes((nds) =>
        nds.map((node) => {
          if (node.id !== '2') {
            return node;
          }

          const color = '#c8b6ff';

          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        })
      );
    };

    // Use a separate useEffect to handle editable text
    const onNodeTextChange = (event, nodeId) => {
      setNewNodes((prevNodes) =>
        prevNodes.map((node) => {
          if (node.id === nodeId) {
            return {
              ...node,
              data: {
                ...node.data,
                label: event.target.value,
              },
            };
          }
          return node;
        })
      );
    };

    setNewNodes(nodes);

    setNewEdges(edges);

  }, []);

  const onConnect = useCallback(
    (params) =>
      setNewEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: '#fff' } }, eds)),
    []
  );

  const handleAddNode = (nodeType) => {
    // Use window.prompt to get user input
    const userInput = window.prompt(`Enter text for the ${nodeType} node:`);
  
    if (userInput !== null) {
      const newNode = {
        id: `${nodes.length + 1}`,
        type: nodeType,
        data: { label: userInput },
        position: { x: 300, y: 200 },
      };
  
      setNewNodes((prevNodes) => [...prevNodes, newNode]);
    }
  };
  

  return (
    <div style={{ width: '80vw', height: '80vh' }}>
      <button onClick={() => handleAddNode('input')}>Add Input Node</button>
      <button onClick={() => handleAddNode('output')}>Add Output Node</button>
      <button onClick={() => handleAddNode('selectorNode')}>Add Custom Node</button>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        style={{ background: bgColor }}
        nodeTypes={nodeTypes}
        connectionLineStyle={connectionLineStyle}
        snapToGrid={true}
        snapGrid={snapGrid}
        defaultViewport={defaultViewport}
        fitView
        attributionPosition="bottom-left"
      >
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.type === 'input') return '#0041d0';
            if (n.type === 'selectorNode') return bgColor;
            if (n.type === 'output') return '#ff0072';
          }}
          nodeColor={(n) => {
            if (n.type === 'selectorNode') return bgColor;
            return '#fff';
          }}
        />
        <Controls />

        <Background color="black" variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>
  );
};

export default FlowMap;

