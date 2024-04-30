
import React from 'react';
import ReactFlow from 'reactflow';

 
import 'reactflow/dist/style.css';
import agile from '../pictures/agile.png'
// https://reactflow.dev/learn
 
const initialNodes = [
  { id: '1', position: { x: 100, y: 100 }, data: { label:<a href='/'>Agile<img src={agile} style={{width:"100%", height:"100%"}} ></img></a> } },
  { id: '2', position: { x: 400, y: 100 }, data: { label: 'HTML/CSS' } },
  { id: '3', position: { x: 700, y: 100 }, data: { label: 'JavaScript' } },
  { id: '4', position: { x: 1000, y: 100 }, data: { label: 'React JS' } },
  { id: '5', position: { x: 1300, y: 100 }, data: { label: 'Project 1' } },
  { id: '6', position: { x: 1700, y: 300 }, data: { label: 'CI/CD Jenkins' } },
  { id: '7', position: { x: 1300, y: 300 }, data: { label: 'SQL Database' } },
  { id: '8', position: { x: 1100, y: 300 }, data: { label: 'Java' } },
  { id: '9', position: { x: 800, y: 300 }, data: { label: 'Spring Boot' } },
  { id: '10', position: { x: 500, y: 300 }, data: { label: 'Project 2' } },
  { id: '11', position: { x: 250, y: 300 }, data: { label: 'Sellenium' } },
  { id: '12', position: { x: 50, y: 300 }, data: { label: 'Project 3' } },
  { id: '13', position: { x: 850, y: 500 }, data: { label: 'Incubation Lab' } },
  { id: '14', position: { x: 300, y: 700 }, data: { label: 'Legacy Project' } },
  { id: '15', position: { x: 850, y: 700 }, data: { label: 'Open Source Project' } },
  { id: '16', position: { x: 1400, y: 700 }, data: { label: 'CI/CD Jenkins Project' } },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-4', source: '2', target: '3' },
  { id: 'e1-5', source: '3', target: '4' },
  { id: 'e1-6', source: '4', target: '5' },
  { id: 'e1-7', source: '5', target: '6' },
  { id: 'e1-8', source: '6', target: '7' },
  { id: 'e1-9', source: '7', target: '8' },
  { id: 'e1-10', source: '8', target: '9' },
  { id: 'e1-11', source: '9', target: '10' },
  { id: 'e1-12', source: '10', target: '11' },
  { id: 'e1-13', source: '11', target: '12' },
  { id: 'e1-13', source: '13', target: '14' },
  { id: 'e1-13', source: '13', target: '15' },
  { id: 'e1-13', source: '13', target: '16' },

];
 
export default function Reskill() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}

