import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function FindFoodButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="contained" style={{backgroundColor: "##5673cc", color: "white", fontSize: "1.5em", width: "8em"}}>FIND FOOD</Button>
    </div>
  );
}
