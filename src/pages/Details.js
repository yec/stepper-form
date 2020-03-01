import React from 'react';

import { useStart } from '../state/appState';

import StepWrapper from '../components/StepWrapper';

import {
  Container,
  Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  makeStyles
} from '@material-ui/core'

import { useNext, useCancel } from '../state/appState';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Details = () => {

  const start = useStart();
  const classes = useStyles();
  const next = useNext();
  const cancel = useCancel();

  return (
    <StepWrapper>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Details
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              I agree to the terms and conditions
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={cancel}>
            Cancel
        </Button>
          <Button size="small" color="primary" onClick={next}>
            Continue
        </Button>
        </CardActions>
      </Card>
    </StepWrapper>
  )
}

export default Details
