import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function TopMostNav() {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="static" style={{backgroundColor: "black"}}>
        {/* <Toolbar variant="dense"> */}
          <Typography variant="h8" color="inherit" style={{marginLeft: "auto", marginRight: "auto", paddingTop: "0.5em", paddingBottom: "0.5em"}}>
            any offer or coupon code
          </Typography>
        {/* </Toolbar> */}
      </AppBar>
    </div>
  );
}
