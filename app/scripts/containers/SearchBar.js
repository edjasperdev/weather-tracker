import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onFormSubmit(e) {
    e.preventDefault();
    //grab weather data
    this.props.fetchWeather(this.state.term);
    
    this.setState({ 
      term: ' ' 
    });
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    });
  }

  render() {
    return (
      <form className='input-group' onSubmit={e => this.onFormSubmit(e)}>
        <input 
          placeholder='Get five-day forcast'
          className="form-control"
          onChange={ e => this.onInputChange(e)} 
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Search </button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
