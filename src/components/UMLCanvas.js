import React, { useEffect, useRef } from 'react';
import { dia, shapes } from 'jointjs';

const UMLCanvas = ({ onClassAdd }) => {
  const canvasRef = useRef(null);
  const graph = useRef(null);

  useEffect(() => {
    graph.current = new dia.Graph();

    const paper = new dia.Paper({
      el: canvasRef.current,
      model: graph.current,
      width: 800,
      height: 600,
      gridSize: 10,
      drawGrid: true,
    });

    const createClass = (name, attributes, methods) => {
      const classShape = new shapes.uml.Class({
        position: { x: 100, y: 100 },
        size: { width: 150, height: 100 },
        name,
        attributes,
        methods,
        attrs: {
          '.uml-class-name-rect': { fill: '#4A90E2' },
          '.uml-class-attrs-rect, .uml-class-methods-rect': { fill: '#D9EAD3' },
        },
      });
      onClassAdd(classShape);
      return classShape;
    };

    const classA = createClass('ClassA', ['+ attribute1: Type'], ['+ method1()']);
    const classB = createClass('ClassB', [], []);
    graph.current.addCells([classA, classB]);

    return () => graph.current.clear();
  }, [onClassAdd]);

  return <div ref={canvasRef} style={{ border: '1px solid black' }} />;
};

export default UMLCanvas;
