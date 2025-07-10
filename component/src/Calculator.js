import React, { useState } from 'react';
import add from '@rhushya/add';
import subtract from '@rhushya/subtract';
import multiply from '@rhushya/multiply';
import divide from '@rhushya/divide';

export const Calculator = ({ 
  initialValue = 0, 
  className = '',
  style = {}
}) => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [selectedOperation, setSelectedOperation] = useState('');

  const selectOperation = (op) => {
    setSelectedOperation(op);
    setOperation(
      op === 'add' ? '+' : 
      op === 'subtract' ? '-' : 
      op === 'multiply' ? '×' : 
      op === 'divide' ? '÷' : ''
    );
  };

  const handleCompute = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    
    if (isNaN(num1) || isNaN(num2)) {
      alert('Please enter valid numbers');
      return;
    }

    if (!selectedOperation) {
      alert('Please select an operation');
      return;
    }

    let calculatedResult;
    
    try {
      switch (selectedOperation) {
        case 'add':
          calculatedResult = add(num1, num2);
          break;
        case 'subtract':
          calculatedResult = subtract(num1, num2);
          break;
        case 'multiply':
          calculatedResult = multiply(num1, num2);
          break;
        case 'divide':
          if (num2 === 0) {
            alert('Cannot divide by zero!');
            return;
          }
          calculatedResult = divide(num1, num2);
          break;
        default:
          alert('Please select an operation');
          return;
      }
      
      setResult(calculatedResult);
      setShowResult(true);
    } catch (error) {
      alert('Error in calculation: ' + error.message);
    }
  };

  const handleClear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult(null);
    setOperation('');
    setSelectedOperation('');
    setShowResult(false);
  };

  const handleReset = () => {
    setShowResult(false);
    setResult(null);
    setOperation('');
    setSelectedOperation('');
  };

  const defaultStyle = {
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '350px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    ...style
  };

  const inputStyle = {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
    boxSizing: 'border-box'
  };

  const buttonStyle = {
    padding: '10px 15px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: 'bold',
    backgroundColor: '#007bff',
    color: 'white',
    transition: 'background-color 0.2s',
    boxSizing: 'border-box'
  };

  const selectedButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#0056b3',
    boxShadow: '0 0 0 2px rgba(0,123,255,0.5)'
  };

  const computeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#28a745',
    padding: '12px 20px',
    fontSize: '16px',
    width: '100%',
    marginTop: '15px',
    marginBottom: '15px'
  };

  const clearButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545'
  };

  return React.createElement('div', { 
    className: `rhushya-calculator ${className}`, 
    style: defaultStyle 
  }, 
    // Header
    React.createElement('div', { 
      style: { marginBottom: '20px', textAlign: 'center' } 
    }, 
      React.createElement('h3', { style: { margin: '0 0 10px 0', color: '#333' } }, 'Calculator'),
      React.createElement('div', { style: { fontSize: '12px', color: '#666' } }, 'Powered by @rhushya libraries')
    ),
    
    // Input section
    React.createElement('div', { style: { marginBottom: '15px' } },
      React.createElement('div', { style: { marginBottom: '10px' } },
        React.createElement('input', {
          type: 'number',
          value: firstNumber,
          onChange: (e) => setFirstNumber(e.target.value),
          placeholder: 'First number',
          style: { ...inputStyle, width: '100%' }
        })
      ),
      React.createElement('div', { style: { marginBottom: '10px' } },
        React.createElement('input', {
          type: 'number',
          value: secondNumber,
          onChange: (e) => setSecondNumber(e.target.value),
          placeholder: 'Second number',
          style: { ...inputStyle, width: '100%' }
        })
      )
    ),
    
    // Operation buttons
    React.createElement('div', { 
      style: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '15px' } 
    },
      React.createElement('button', { 
        onClick: () => selectOperation('add'), 
        style: selectedOperation === 'add' ? selectedButtonStyle : buttonStyle 
      }, '+ Add'),
      React.createElement('button', { 
        onClick: () => selectOperation('subtract'), 
        style: selectedOperation === 'subtract' ? selectedButtonStyle : buttonStyle 
      }, '- Subtract'),
      React.createElement('button', { 
        onClick: () => selectOperation('multiply'), 
        style: selectedOperation === 'multiply' ? selectedButtonStyle : buttonStyle 
      }, '× Multiply'),
      React.createElement('button', { 
        onClick: () => selectOperation('divide'), 
        style: selectedOperation === 'divide' ? selectedButtonStyle : buttonStyle 
      }, '÷ Divide')
    ),
    
    // Compute button
    React.createElement('button', {
      onClick: handleCompute,
      style: computeButtonStyle
    }, '= Compute'),
    
    // Result display
    showResult && React.createElement('div', { 
      style: { 
        marginBottom: '15px', 
        padding: '10px', 
        backgroundColor: '#e8f5e8', 
        border: '1px solid #4caf50', 
        borderRadius: '4px',
        textAlign: 'center'
      } 
    }, 
      React.createElement('div', { style: { fontSize: '14px', color: '#2e7d32', marginBottom: '5px' } }, 
        `${firstNumber} ${operation} ${secondNumber} =`
      ),
      React.createElement('div', { style: { fontSize: '20px', fontWeight: 'bold', color: '#1b5e20' } }, 
        result
      )
    ),
    
    // Control buttons
    React.createElement('div', { 
      style: { display: 'flex', gap: '8px', justifyContent: 'center' } 
    },
      React.createElement('button', { 
        onClick: handleClear, 
        style: clearButtonStyle 
      }, 'Clear All'),
      showResult && React.createElement('button', { 
        onClick: handleReset, 
        style: { ...buttonStyle, backgroundColor: '#6c757d' } 
      }, 'New Calculation')
    )
  );
};
