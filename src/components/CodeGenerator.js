// src/components/CodeGenerator.js
import React from 'react';
import { shapes } from 'jointjs';

const CodeGenerator = ({ graph }) => {
  const generateCode = () => {
    const code = graph.getCells().map((cell) => {
      if (cell instanceof shapes.uml.Class) {
        const className = cell.get('name');
        const attributes = cell.get('attributes').map(attr => attr.replace(/:/, ': ')).join('\n  ');
        const methods = cell.get('methods').join('\n  ');

        return `class ${className} {\n  ${attributes}\n\n  ${methods}\n}`;
      }
      return '';
    }).join('\n\n');
    return code;
  };

  return (
    <div>
      <h3>Generated Code</h3>
      <pre>{generateCode()}</pre>
    </div>
  );
};

export default CodeGenerator;
