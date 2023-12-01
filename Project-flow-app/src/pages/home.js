import React, {useState} from 'react';
import { Container, Grid, Paper } from '@mui/material';
import '../App.css';
import FlowMap from '../components/flowmap';
import FloatingTextArea from '../components/floatingTextArea';
import {useNodesState, useEdgesState, addEdge } from 'reactflow';

// import { saveAs } from 'file-saver';

const Home = () => {
  const [nodesVal, setNodes] = useState([]);
  const [nodes, setNewNodes, onNodesChange] = useNodesState([]);
  const [edges, setNewEdges, onEdgesChange] = useEdgesState([]);
  const onTextSubmit = (text) => {
    console.log('text submitted:', text);
  const jsonString = JSON.stringify(text, null, 2);
  console.log("this is json: " ,jsonString);
  setNodes(jsonString);
  };
  return (
    <Container className="app-container" maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <FlowMap nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} setNewNodes={setNewNodes} setNewEdges={setNewEdges}/>
          <FloatingTextArea nodes={nodes} edges={edges} setNewNodes={setNewNodes} setNewEdges={setNewEdges} onTextSubmit={onTextSubmit} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
