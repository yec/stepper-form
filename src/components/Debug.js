import React from 'react';
import { useSelector } from 'react-redux';

const JsonState = () => {
  const state = useSelector(s => s);

  return (
    <pre>
      {JSON.stringify(state, null, 2)}
    </pre>
  )
}

const Debug = () => {
  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      width: 500,
      height: 500
    }}>
      <JsonState />
    </div>
  )
}

export { JsonState }
export default Debug;
