// import React, { useState } from 'react';
// import UMLCanvas from '../components/UMLCanvas';
// import CodeGenerator from '../components/CodeGenerator';

// const Editor = () => {
//   const [graph, setGraph] = useState(null);

//   const handleClassAdd = (newClass) => {
//     console.log('Class added:', newClass);
//   };

//   return (
//     <div>
//       <h2>UML Diagram Editor</h2>
//       <UMLCanvas onClassAdd={handleClassAdd} />
//       {graph && <CodeGenerator graph={graph} />}
//     </div>
//   );
// };

// export default Editor;

// src/pages/Editor.js
import React, { useState } from 'react';
import UMLCanvas from '../components/UMLCanvas';
import CodeGenerator from '../components/CodeGenerator';

const Editor = () => {
  const handleClassAdd = (newClass) => {
    console.log('Class added:', newClass);
  };

  return (
    <div>
      <h2>UML Diagram Editor</h2>
      <UMLCanvas onClassAdd={handleClassAdd} />
      {/* Add CodeGenerator here when you need it */}
    </div>
  );
};

export default Editor;
