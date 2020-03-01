import React from 'react';
import { useSelector } from 'react-redux';
import { fade, AppBar, Toolbar, InputBase, useScrollTrigger, makeStyles, IconButton } from '@material-ui/core';
import App from '../App';
import Progress from './Progress';
import SearchIcon from '@material-ui/icons/Search';
import Slide from '@material-ui/core/Slide';
import { Close, ArrowBack } from '@material-ui/icons';
import { useCancel, usePrevious } from '../state/appState';

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
}))

function HideOnScroll(props) {
  const { visible, children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={visible}>
      {children}
    </Slide>
  );
}


const Layout = ({ showProgress, children }) => {
  const classes = useStyles();
  const cancel = useCancel();
  const previous = usePrevious();
  const showBack = useSelector(state => state.app.activeStep > 0)
  const activeStep = useSelector(state => state.app.activeStep)

  return (
    <>
      <HideOnScroll visible={showProgress}>
        <AppBar elevation={0}>
          <Progress activeStep={activeStep} />
          <Toolbar>
            <div className={classes.grow} />
            <Slide appear={false} direction="down" in={showBack}>
              <IconButton
                onClick={previous}
                color="inherit"
              >
                <ArrowBack />
              </IconButton>
            </Slide>
            <IconButton
              onClick={cancel}
              color="inherit"
            >
              <Close />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <div style={{ opacity: 0, display: showProgress ? 'block' : 'none' }}>
        <Toolbar>
          <div className={classes.grow} />
          <Progress activeStep={activeStep} />
          <div className={classes.grow} />
          <Slide appear={false} direction="down" in={showBack}>
            <IconButton
              onClick={previous}
              color="inherit"
            >
              <ArrowBack />
            </IconButton>
          </Slide>
          <IconButton
            onClick={cancel}
            color="inherit"
          >
            <Close />
          </IconButton>
        </Toolbar>
      </div>
      {children}
    </>
  )
}

export default Layout
