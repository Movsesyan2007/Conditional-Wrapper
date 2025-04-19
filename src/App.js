import React, { useState } from 'react';
import ConditionalWrapper from './components/ConditionalWrapper';

function App() {
  const [highlight, setHighlight] = useState(true);

  return (
    <div style={{ padding: '2rem' }}>
      <button onClick={() => setHighlight(!highlight)}>
        Toggle Highlight
      </button>

      <ConditionalWrapper
        condition={highlight}
        wrapper={children => (
          <div style={{ border: '2px solid red', padding: '1rem' }}>
            {children}
          </div>
        )}
      >
        <p>This is some content that may or may not be highlighted.</p>
      </ConditionalWrapper>
    </div>
  );
}

export default App;