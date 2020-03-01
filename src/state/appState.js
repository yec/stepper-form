import {
  createSlice
} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    started: false,
    activeStep: 0,
    completed: false,
  },
  reducers: {
    start: state => { state.started = true },
    next: state => { state.activeStep++ },
    previous: state => { state.activeStep-- },
    cancel: state => { state.activeStep = 0; state.started = false },
    done: state => { state.completed = true; state.activeStep = 0; state.started = false },
  }
})

const useNext = () => {
  const dispatch = useDispatch()
  return () => dispatch(appSlice.actions.next())
}

const usePrevious = () => {
  const dispatch = useDispatch()
  return () => dispatch(appSlice.actions.previous())
}

const useCancel = () => {
  const dispatch = useDispatch()
  return () => dispatch(appSlice.actions.cancel())
}

const useStart = () => {
  const dispatch = useDispatch()
  return () => dispatch(appSlice.actions.start())
}

const useDone = () => {
  const dispatch = useDispatch()
  return () => dispatch(appSlice.actions.done())
}

export { useNext, usePrevious, useStart, useCancel, useDone }

export const { next, previous } = appSlice.actions
export default appSlice.reducer
