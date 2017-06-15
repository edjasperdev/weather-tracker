import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

const Chart = (props) => {

  function average(data){
    return Math.floor(data.reduce((a,b) => a + b, 0)/data.length) 
  }

  return(
      <div>
        <Sparklines height={120} width={180} data={props.data}>
          <SparklinesLine color={props.color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{average(props.data)} {props.units}</div>
      </div>
    
  );
}

export default Chart;