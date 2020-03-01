import React from 'react';

import { useStart } from '../state/appState';

import {
  Container,
  Typography,
  Button,
  makeStyles,
  Grid
} from '@material-ui/core'

import { JsonState } from '../components/Debug';

const useStyles = makeStyles(theme => ({
  buttonRoot: {
    marginTop: theme.spacing(4)
  },
  code: {
    color: '#cccccc',
    backgroundColor: '#333',
    borderRadius: 20,
    padding: theme.spacing(1, 3),
    fontSize: 16,
    boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.15)'
  }
}));

const Homepage = () => {

  const start = useStart();
  const classes = useStyles();

  return (
    <div style={{
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Container style={{}} maxWidth='md'>
        <Grid container>
          <Grid item md={8}>
            <Typography variant='h3' gutterBottom>
              👋 Hi,
            </Typography>
            <Typography variant='h3' gutterBottom>
              A simple stepper form to kickstart your project
            </Typography>
            <div style={{
              display: 'flex',
              alignItems: 'center'
            }}>
              <img style={{
                height: 80
              }} src="/react.svg" alt="react" />
              <img style={{
                height: 80,
              }} src="/redux.svg" alt="redux" />
              <img style={{
                height: 60,
                marginLeft: 20,
              }} src="/material-ui.svg" alt="material-ui" />
            </div>
          </Grid>
          <Grid item md={4} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            flex: 1
          }}>
            <Button classes={{ root: classes.buttonRoot }} size="large" variant="contained" onClick={start}>Start</Button>
          </Grid>
        </Grid>
      </Container>
    </div >
  )
}

export default Homepage
