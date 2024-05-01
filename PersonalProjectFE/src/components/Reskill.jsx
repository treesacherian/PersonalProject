
import React from 'react';
import ReactFlow from 'reactflow';

 
import 'reactflow/dist/style.css';
import agile from '../pictures/agile.png'
import HTML from '../pictures/HTML.jpg'
import react from '../pictures/React.png'
import jenkz from '../pictures/Jenkins.png'
import mysql from '../pictures/mysql.png'
import java from '../pictures/Javac.png'
import sb from '../pictures/spring boot.png'
import se from '../pictures/selenium.jpg'
import git from '../pictures/git.png'
import lab from '../pictures/lab.jpg'
import legacy from '../pictures/legacy.png'
import os from '../pictures/os.png'
import cicdp from '../pictures/cicdp.png'
import jira from '../pictures/jira.jpg'
import pro1 from '../pictures/pro1.png'
import pro2 from '../pictures/pro2.png'
import pro3 from '../pictures/pro3.png'


// https://reactflow.dev/learn
 
const initialNodes = [
  { id: '1', position: { x: 100, y: 100 }, data: { label:<a href='/'>Agile<img src={agile} style={{width:"100%", height:"100%"}} ></img></a> } },
  { id: '2', position: { x: 700, y: 100 }, data: { label: <img src={git} alt="HTML" style={{width:"100%", height:"100%"}} ></img> } },
  { id: '3', position: { x: 1000, y: 100 }, data: { label: <img src={HTML} alt="HTML" style={{width:"100%", height:"100%"}} ></img> } },
  { id: '4', position: { x: 1300, y: 100 }, data: { label: <img src={react} alt="React JS" style={{width:"100%", height:"100%"}} ></img> } },
  { id: '5', position: { x: 1700, y: 100 }, data: { label: <a href='/project1'><img src={pro1} alt="Project 1" style={{width:"100%", height:"100%"}} ></img></a> } },
  { id: '6', position: { x: 1600, y: 300 }, data: { label: <img src={jenkz} alt="React JS" style={{width:"100%", height:"100%"}} ></img>} },
  { id: '7', position: { x: 1300, y: 300 }, data: { label: <img src={mysql} alt="React JS" style={{width:"100%", height:"100%"}} ></img> } },
  { id: '8', position: { x: 1000, y: 300 }, data: { label: <img src={java} alt="React JS" style={{width:"100%", height:"100%"}} ></img>} },
  { id: '9', position: { x: 750, y: 300 }, data: { label: <img src={sb} alt="React JS" style={{width:"100%", height:"100%"}} ></img> } },
  { id: '10', position: { x: 500, y: 300 }, data: { label: <img src={pro2} alt="React JS" style={{width:"100%", height:"100%"}} ></img> } },
  { id: '11', position: { x: 250, y: 300 }, data: { label: <img src={se} alt="React JS" style={{width:"100%", height:"100%"}} ></img> } },
  { id: '12', position: { x: 50, y: 300 }, data: { label: <img src={pro3} alt="React JS" style={{width:"100%", height:"100%"}} ></img> } },
  { id: '13', position: { x: 850, y: 450 }, data: { label:  <img src={lab} alt="React JS" style={{width:"100%", height:"100%"}} ></img>  } },
  { id: '14', position: { x: 300, y: 650 }, data: { label: <img src={legacy} alt="React JS" style={{width:"100%", height:"100%"}} ></img> } },
  { id: '15', position: { x: 850, y: 650 }, data: { label: <a href='/incproj2'><img src={os} alt="React JS" style={{width:"100%", height:"100%"}} ></img></a> } },
  { id: '16', position: { x: 1400, y: 650 }, data: { label: <img src={cicdp} alt="React JS" style={{width:"100%", height:"100%"}} ></img> } },
  { id: '17', position: { x: 400, y: 100 }, data: { label: <img src={jira} alt="React JS" style={{width:"100%", height:"100%"}} ></img> } },
];
const initialEdges = [
  {id:'e1-1', source: '2', target: '3' },
  { id: 'e1-2', source: '1', target: '17' },
  { id: 'e1-4', source: '17', target: '2' },
  { id: 'e1-5', source: '3', target: '4' },
  // { id: 'e1-6', source: '17', target: '5' },
  { id: 'e1-7', source: '5', target: '6' },
  { id: 'e1-8', source: '6', target: '7' },
  { id: 'e1-9', source: '7', target: '8' },
  { id: 'e1-10', source: '8', target: '9' },
  { id: 'e1-11', source: '9', target: '10' },
  { id: 'e1-12', source: '10', target: '11' },
  { id: 'e1-13', source: '11', target: '12' },
  { id: 'e1-14', source: '13', target: '14' },
  { id: 'e1-15', source: '13', target: '15' },
  { id: 'e1-16', source: '13', target: '16' },
  { id: 'e1-17', source: '4', target: '5' },


];
 
export default function Reskill() {
  return (<>
    <h2 style={{color:"white", textAlign:"center"}}>Reskilling Journey</h2>
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
    </>
  );
}

