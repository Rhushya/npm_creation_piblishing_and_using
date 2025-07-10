import React from 'react';
import { Calculator } from '../src/Calculator.js';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>@rhushya/calculator-component Demo</h1>
      <p>This demonstrates the calculator component using your @rhushya libraries for proper two-number calculations.</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h2>Default Calculator</h2>
          <Calculator />
        </div>
        
        <div>
          <h2>Custom Styled Calculator</h2>
          <Calculator 
            className="custom-calc"
            style={{ 
              backgroundColor: '#e8f4fd', 
              border: '2px solid #007bff',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}
          />
        </div>
      </div>
      
      <div style={{ marginTop: '30px', padding: '15px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>How to use:</h3>
        <ol>
          <li>Enter the first number</li>
          <li>Enter the second number</li>
          <li>Select an operation (+, -, ×, ÷)</li>
          <li>Click the "Compute" button to perform the calculation</li>
          <li>See the result with the calculation shown</li>
          <li>Use "Clear All" to reset or "New Calculation" to start over</li>
        </ol>
        <p><strong>Features:</strong> Uses @rhushya/add, @rhushya/subtract, @rhushya/multiply, and @rhushya/divide libraries for accurate calculations!</p>
      </div>
    </div>
  );
}

export default App;
