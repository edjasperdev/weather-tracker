import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const WeatherRow = (props) => {
  const { name, temps } = this.props;

  return(
    <tr>
      <td>{ name }</td>
      <td>{cityData.city.name}</td>
      <td>
        <Sparklines height={120} width={180} data={temps}>
          <SparklinesLine color='red' />
        </Sparklines>
      </td>
    </tr>
  );
}

export default WeatherRow;