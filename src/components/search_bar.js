import React, { Component } from "react";
// import { BrowserRouter as history } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchuserdata } from '../actions/index';

import { bindActionCreators } from 'redux';

class SearchBar extends Component{

  constructor(props){
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  };

  onInputChange(event){
    // console.log(event.target.value)
    //set value of input box
    this.setState({term: event.target.value })
  }

  onFormSubmit(e){
    // debugger
    e.preventDefault()
    // console.log(event.target.value)
    //we need to fetch data from here
    // history.push(`/user/${this.refs.userInput.value}`)
    this.props.fetchuserdata(this.state.term)
  }

  render(){
    return(
      <form onSubmit={ this.onFormSubmit }>
        <input refs="userInput" className="input-group" value = { this.state.term }
        onChange={this.onInputChange}/>
        <span>
          <button type="submit" className="btn btn-secondary">submit</button>
        </span>
      </form>
    )
  }
}

function mapDispachToProps(dispatch){
  return bindActionCreators({ fetchuserdata: fetchuserdata }, dispatch)
}

// function mapStateToProps(state){
//   return {
//     books: state.books
//   }
// }

export default connect(null, mapDispachToProps)(SearchBar);
