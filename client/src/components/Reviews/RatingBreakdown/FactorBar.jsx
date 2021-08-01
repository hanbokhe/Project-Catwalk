import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300
  }
}));

const StyleSlider = withStyles({
  root: {
    color: 'transparent'
  },
  track: {
    height: 10,
    backgroundColor: '#BBBBBB'
  },
  rail: {
    height: 10,
    backgroundColor: '#BBBBBB'
  },
  mark: {
    height: 10,
    width: 3
  },
  thumb: {
    backgroundColor: 'transparent',
    width: 0,
    height: '20px',
    borderLeft: '8px solid transparent',
    borderRight: '8px solid transparent',
    borderRadius: '0px',
    borderTop: '16px solid #111111',
    marginTop: '0px',
    marginBottom: '0px'
  }
})(Slider);

export default function FactorBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <StyleSlider
        defaultValue={30}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={25}
        marks
        min={0}
        max={100}
        disabled
      />
    </div>
  );
}