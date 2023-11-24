import React, { useEffect, useState } from 'react';
import styles from './scale.module.css';
import Typography from '../Typography/Typography';
import Slider from '@mui/material/Slider';
import Helppop from '../Helppop/Helppop';

const Scale = (props) => {
  const { step, marks, min, max, onChange, slidervalue } = props

  return (  
        <Slider
            aria-label="academic"
            value={slidervalue}
            getAriaValueText={(value) => `${value}`} // Function to convert value to text
            valueLabelDisplay="on"
            step={step}
            style={{color: '#0054b4'}}
            marks={marks}
            min={min}
            max={max}
            onChange={(_, value) => onChange(value)} 
            />
  );
};

export default Scale;