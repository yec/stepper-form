import React from 'react';
import { useSelector } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import ProTip from './ProTip';
import GoogleMapReact from 'google-map-react';

import Debug from './components/Debug';

import Layout from './components/Layout';
import StepHandler from './components/StepHandler';
import Homepage from './pages/Homepage';
import Introduction from './pages/Introduction';
import Details from './pages/Details';
import Complete from './pages/Complete';

export default function App() {
  const started = useSelector(state => state.app.started)
  return (
    <>
      <Layout showProgress={started}>
        <StepHandler homepage><Homepage /></StepHandler>
        <StepHandler step={0}><Introduction /></StepHandler>
        <StepHandler step={1}><Details /></StepHandler>
        <StepHandler step={2}><Complete /></StepHandler>
      </Layout>
      <div
        style={{
          position: 'fixed',
          left: 0,
          bottom: 0,
          right: 0,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant='body1' gutterBottom>
          <a target="_blank" href="https://github.com/yec/stepper-form">Github</a>
          {' '}
          <a target="_blank" href="mailto:yechuah@gmail.com">yechuah@gmail.com</a>
        </Typography>
      </div>
    </>
  );
}
