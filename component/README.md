# Calculator Component (v1.4.0)

A React calculator component using @rhushya math libraries with compute button functionality.

## Installation

```bash
npm install @rhushya/calculator-component
```

All required dependencies (@rhushya/add, @rhushya/subtract, @rhushya/multiply, @rhushya/divide) will be automatically installed.

## Usage

```tsx
import React from 'react';
import { Calculator } from '@rhushya/calculator-component';

function App() {
  return (
    <div>
      <h1>My Calculator App</h1>
      <Calculator 
        className="my-calculator"
        style={{ backgroundColor: '#f0f0f0' }}
      />
    </div>
  );
}

export default App;
```

## Props

- `className?: string` - CSS class name for styling
- `style?: React.CSSProperties` - Inline styles

## Features

- Enter two numbers and select an operation
- Click the "Compute" button to perform the calculation (New in v1.2.0!)
- Visual feedback for selected operations
- Add, subtract, multiply, and divide operations
- Uses @rhushya math libraries for calculations
- Clean, modern UI
- TypeScript support
- Responsive design

## How to Use

1. Enter the first number in the first input field
2. Enter the second number in the second input field
3. Select an operation (+, -, ×, ÷) by clicking on the respective button
4. Click the "Compute" button to perform the calculation
5. The result will be displayed below
6. Use "Clear All" to reset or "New Calculation" to start over

## Dependencies

This component uses the following @rhushya libraries:
- @rhushya/add
- @rhushya/subtract
- @rhushya/multiply
- @rhushya/divide

## Publishing

To build and publish the component:

```bash
# Build the component
npm run build

# Publish to npm registry
npm publish
```
