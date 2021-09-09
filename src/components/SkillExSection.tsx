// import { useCallback, useState } from "react";
// import ReactFlow, {
//   removeElements,
//   addEdge,
//   Elements,
//   isNode,
//   ReactFlowProvider,
// } from "react-flow-renderer";
// import dagre from "dagre";

// const dagreGraph = new dagre.graphlib.Graph();
// dagreGraph.setDefaultEdgeLabel(() => ({}));

// const nodeWidth = 126;
// const nodeHeight = 36;

// const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
// const position = { x: 0, y: 0 };
// const edgeType = "smoothstep";

// const initialElements: Elements<any> = [
//   {
//     id: "dev",
//     type: "default",
//     data: { label: "Dev" },
//     position,
//   },
//   // {
//   //   id: "app",
//   //   data: { label: "App" },
//   //   position,
//   // },
//   {
//     id: "RN",
//     data: { label: "React Native" },
//     position,
//   },
//   {
//     id: "frontend",
//     data: { label: "Frontend" },
//     position,
//   },
//   {
//     id: "backend",
//     data: { label: "Backend" },
//     position,
//   },
//   {
//     id: "HTML",
//     data: { label: "HTML" },
//     position,
//   },
//   {
//     id: "CSS",
//     data: { label: "CSS" },
//     position,
//   },
//   {
//     id: "js",
//     data: { label: "Java Script" },
//     position,
//   },
//   {
//     id: "ts",
//     data: { label: "TypeScript" },
//     position,
//   },
//   {
//     id: "react",
//     data: { label: "React" },
//     position,
//   },
//   {
//     id: "next",
//     data: { label: "Next" },
//     position,
//   },
//   {
//     id: "devops",
//     data: { label: "DevOps" },
//     position,
//   },
//   {
//     id: "docker",
//     data: { label: "Docker" },
//     position,
//   },
//   {
//     id: "scss",
//     data: { label: "SCSS" },
//     position,
//   },
//   {
//     id: "tailwind",
//     data: { label: "Tailwind" },
//     position,
//   },
//   {
//     id: "server",
//     data: { label: "Server" },
//     position,
//   },
//   {
//     id: "express",
//     data: { label: "Express" },
//     position,
//   },
//   {
//     id: "database",
//     data: { label: "DataBase" },
//     position,
//   },
//   {
//     id: "mongo",
//     data: { label: "Mongo" },
//     position,
//   },
//   { id: "devApp", source: "dev", target: "app", type: edgeType, animated: true },
//   { id: "devFrontend", source: "dev", target: "frontend", type: edgeType, animated: true },
//   { id: "devBackend", source: "dev", target: "backend", type: edgeType, animated: true },
//   { id: "devDocker", source: "dev", target: "devops", type: edgeType, animated: true },
//   { id: "reactRN", source: "react", target: "RN", type: edgeType, animated: true },
//   { id: "frontendHTML", source: "frontend", target: "HTML", type: edgeType, animated: true },
//   { id: "frontendCSS", source: "frontend", target: "CSS", type: edgeType, animated: true },
//   { id: "frontendJs", source: "frontend", target: "js", type: edgeType, animated: true },
//   { id: "jsTs", source: "js", target: "ts", type: edgeType, animated: true },
//   { id: "devopsDocker", source: "devops", target: "docker", type: edgeType, animated: true },
//   { id: "tsReact", source: "ts", target: "react", type: edgeType, animated: true },
//   { id: "reactNext", source: "react", target: "next", type: edgeType, animated: true },
//   { id: "cssTailwind", source: "CSS", target: "tailwind", type: edgeType, animated: true },
//   { id: "cssScss", source: "CSS", target: "scss", type: edgeType, animated: true },
//   { id: "backendServer", source: "server", target: "backend", type: edgeType, animated: true },
//   { id: "expressServer", source: "server", target: "express", type: edgeType, animated: true },
//   { id: "backendDatabase", source: "database", target: "backend", type: edgeType, animated: true },
//   { id: "mongoDatabase", source: "database", target: "mongo", type: edgeType, animated: true },
//   // { id: 'e22c', source: '2', target: '2c', type: edgeType, animated: true },
// ];

// const getLayoutedElements = (elements, direction = "TB") => {
//   dagreGraph.setGraph({ rankdir: direction });

//   elements.forEach((el) => {
//     if (isNode(el)) {
//       dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
//     } else {
//       dagreGraph.setEdge(el.source, el.target);
//     }
//   });

//   dagre.layout(dagreGraph);

//   return elements.map((el) => {
//     if (isNode(el)) {
//       const nodeWithPosition = dagreGraph.node(el.id);
//       el.targetPosition = "left";
//       el.sourcePosition = "right";

//       // unfortunately we need this little hack to pass a slightly different position
//       // to notify react flow about the change. Moreover we are shifting the dagre node position
//       // (anchor=center center) to the top left so it matches the react flow node anchor point (top left).
//       el.position = {
//         x: nodeWithPosition.x - nodeWidth / 2 + Math.random() / 1000,
//         y: nodeWithPosition.y - nodeHeight / 2,
//       };
//     }

//     return el;
//   });
// };

// const layoutedElements = getLayoutedElements(initialElements);

// const SkillExSection = () => {
//   const [elements, setElements] = useState(layoutedElements);
//   const onLayout = useCallback(
//     (direction) => {
//       const layoutedElements = getLayoutedElements(elements, direction);
//       setElements(layoutedElements);
//     },
//     [elements]
//   );

//   return (
//     <div className="grid h-screen grid-cols-2 gap-4 p-12">
//       {/* <div className="col-span-full md:col-span-1">Experience</div> */}
//       <div className="border col-span-full md:col-span-2">
//         <ReactFlowProvider>
//           <ReactFlow
//             elements={elements}

//             // connectionLineType="smoothstep"
//           />
//         </ReactFlowProvider>
//       </div>
//     </div>
//   );
// };

// export default SkillExSection;

const SkillExSection = () => {
  return <div></div>;
};

export default SkillExSection;
