import React from 'react';

class Home extends React.Component{

  render(){

    return(
      <div className='home'>
        Let's Get Everything
        <img src={ require('./../../../images/react-logo.png') } alt='lets go' />
      </div>
    )
  }
} 

module.exports = Home