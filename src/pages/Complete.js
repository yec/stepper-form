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

import { useNext, useDone } from '../state/appState';

const useStyles = makeStyles({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Complete = () => {

  const start = useStart();
  const classes = useStyles();
  const next = useNext();
  const done = useDone();

  return (
    <StepWrapper>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Complete
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Congratulation sign up is complete!
          </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" onClick={done}>
            Ok
          </Button>
        </CardActions>
      </Card>
    </StepWrapper>
  )
}

export default Complete
