import React from 'react';
import {
  useSelector
} from 'react-redux';

const StepHandler = ({ homepage, step, children }) => {
  const {
    started,
    activeStep
  } = useSelector(state => state.app);

  return (
    <>
      {homepage && !started && children}
      {step == activeStep && started && children}
    </>
  )
}

export default StepHandler
