import React from 'react';

import { useStart } from '../state/appState';

import {
  Container,
  Typography,
  Button
} from '@material-ui/core'

const Homepage = () => {

  const start = useStart();

  return (
    <div style={{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Container maxWidth='md'>
        <Typography variant='h3'>
          Stepper Form
        </Typography>
        <Typography variant='h4'>
          Get started
        </Typography>
        <Button size="large" variant="contained" onClick={start}>Start</Button>
      </Container>
    </div>
  )
}

export default Homepage
