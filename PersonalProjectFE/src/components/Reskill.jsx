
import React from 'react';
import ReactFlow from 'reactflow';
 
import 'reactflow/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
 
export default function Reskill() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </div>
  );
}



// import React from 'react';
// import ReactFlow from 'react-flow-renderer';
// function Reskill() {
//   const nodes = [
//     { id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 50, y: 50 }, style: { background: 'blue', color: 'white' } },
//     { id: '2', type: 'output', data: { label: 'Node 2' }, position: { x: 400, y: 100 } },
//   ];
  
//   const edges = [
//     { id: 'e1', source: '1', target: '2', animated: true },
//   ];


//   return (
//     <div style={{ width:"1300px", height:"1000px"}}>
// <div style={{backgroundColor:"white", width:"100%", height:"80%"}}>
// <ReactFlow elements={{ nodes, edges }}  />
// </div>
    
//     <h1 style={{color:"white"}}>RESKILL PAGE</h1>
    
//       </div>
//   )
// }
// export default Reskill;


// https://www.dhiwise.com/post/react-flowchart-explained-how-it-works-and-why-it-matters

// import React, { useCallback } from 'react';
// import ReactFlow, {
//   addEdge,
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
// } from 'react-flow-renderer';

// import { nodes as initialNodes, edges as initialEdges } from './initial-elements';
// import CustomNode from './CustomNode';

// import 'reactflow/dist/style.css';
// import './overview.css';

// const nodeTypes = {
//   custom: CustomNode,
// };

// const minimapStyle = {
//   height: 120,
// };

// const onInit = (reactFlowInstance) => console.log('flow loaded:', reactFlowInstance);

// const OverviewFlow = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
//   const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

//   // we are using a bit of a shortcut here to adjust the edge type
//   // this could also be done with a custom edge for example
//   const edgesWithUpdatedTypes = edges.map((edge) => {
//     if (edge.sourceHandle) {
//       const edgeType = nodes.find((node) => node.type === 'custom').data.selects[edge.sourceHandle];
//       edge.type = edgeType;
//     }

//     return edge;
//   });

//   return (
//     <ReactFlow
//       nodes={nodes}
//       edges={edgesWithUpdatedTypes}
//       onNodesChange={onNodesChange}
//       onEdgesChange={onEdgesChange}
//       onConnect={onConnect}
//       onInit={onInit}
//       fitView
//       attributionPosition="top-right"
//       nodeTypes={nodeTypes}
//     >
//       <MiniMap style={minimapStyle} zoomable pannable />
//       <Controls />
//       <Background color="#aaa" gap={16} />
//     </ReactFlow>
//   );
// };

// export default OverviewFlow;