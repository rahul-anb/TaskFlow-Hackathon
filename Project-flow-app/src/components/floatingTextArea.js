// src/components/FloatingTextArea.js
import React, { useState } from 'react';
import { Paper, InputBase, IconButton, Divider } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/system';
import axios from 'axios';
// import OpenAI  from "openai";
// import * as pOne from './prompts.json'; 
// import * as pTwo from './prompttwo.json';

const StyledPaper = styled(Paper)({
  position: 'fixed',
  bottom: 20,
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  alignItems: 'center',
  padding: (theme) => theme.spacing(1),
  borderRadius: 20,
  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
  backdropFilter: 'blur(10px)', // Blur effect for glassmorphism
});

const StyledInputBase = styled(InputBase)({
  flex: 1,
  color: '#fff',
});

const StyledIconButton = styled(IconButton)({
  padding: (theme) => theme.spacing(1),
  color: '#fff',
});
// const p1 = "Imagine you are a project architect and you have to design the project workflow and flowchart depicting the Main Tasks, Subtasks and project workflow, it should have at least 3-6 main tasks and each task can have 2-4 subtasks, each task major task  has a deadline and a person to which it must be assigned to. The project workflow is to be shown as graph structure with the nodes depicting the major task, each node with have checkboxes which depict the subtasks for that particular major task."
// const p2 = "Now analyse this blueprint and send in the content to be displayed along with deadlines, proper spaced and aligned coordinates and edges for rendering the graph in UI. in setNodes, the 'type' property must be set to 'input' if it is the starting node and does not have any subtasks and if it is the last node without any subtasks then the 'type' property must be set to 'output' else the 'type' property must be set to 'selectorNode'. DO NOT WRITE ANY ADDITIONAL EXPLANATIONS. SEND RESPONSE IN THE JSONIFIED STRING FORMAT IN ONE LINE. DO NOT include escape sequenses (WITHOUT TAB SPACE OR NEXT LINE) in the reponse BELOW:"
// const p3 = pOne.default;
// const p4 = pTwo.default;

// const API_KEY = "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"

// const openapi = new OpenAI({
//   apiKey: API_KEY,
//   dangerouslyAllowBrowser: true 
// });


//console.log(p3, p4);

const FloatingTextArea = ({ nodes ,edges,setNewNodes,setNewEdges,onTextSubmit }) => {
  const [inputText, setInputText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    
    try {
     const response = await axios.post('http://localhost:5000//convert-json', {
      prompt: inputText,
     },{
      headers: {
        'Content-Type': 'application/json',
      },
     }) 
      console.log("prompt sent : ",response);
      const { setNodes, setEdges } = response.data;
  
        // Iterate over fetched nodes and create ReactFlow nodes
        const mappedNodes = setNodes.map((node) => {
          return {
            id: node.id.toString(), 
            type: node.type,
            data: { label: node.data.label, title: node.data.title, deadline: node.data.deadline, options: node.data.options, personAssigned: node.data.personAssigned },
            position: { x: node.position.x, y: node.position.y },
          };
        });

        const mappedEdges = setEdges.map((node) => {
          return {
            id: node.id.toString(), 
            source: node.source.toString(),
            target: node.target.toString(),
            animated: true,
            sourceHandle: node.sourceHandle,
            style: { stroke: '#fff' },
          };
        });
  
        setNewNodes(mappedNodes);
        setNewEdges(mappedEdges);     
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setInputText('');
  };

  return (
    <StyledPaper component="form" sx={{ height: 30 }} onSubmit={handleSubmit}>
      <StyledInputBase
        id="outlined-multiline-static"
        placeholder="Type your message"
        inputProps={{ 'aria-label': 'Type your message' }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Divider orientation="vertical" sx={{ height: 28, margin: 0.5 }} />
      <StyledIconButton type="submit" aria-label="send">
        <SendIcon />
      </StyledIconButton>
    </StyledPaper>
  );
};

export default FloatingTextArea;
