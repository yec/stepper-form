import React from 'react';
import { Container } from '@material-ui/core';

const StepWrapper = ({ children }) => {

  return <Container maxWidth='sm'>
    <div
      style={{
        paddingTop: 60,
        paddingBottom: 60,
        minHeight: 'calc(100vh - 128px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {children}
    </div>
  </Container>
}

export default StepWrapper;
