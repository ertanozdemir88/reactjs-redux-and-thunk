import React, { Component } from 'react';
import "./App.css";

import { connect } from "react-redux";
import { updateUser, getUsers } from "./actions/userActions";

class App extends Component {
  constructor(props){
    super(props);
  }

  onUpdateUser = () => {
    this.props.onUpdateUser("Erhan");
  }

  componentDidMount() {
    this.props.onGetUsers();
  }
  

  render() {

    //console.log(this.props.myCount);

    return (
      <div>

        <h2>{this.props.user}</h2>

        <button onClick={this.onUpdateUser}>Change the name</button>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  
  return {
    ...state,
    myCount: props.count + 2
  }
}

const mapDispatchToProps = {
  onUpdateUser: updateUser,
  onGetUsers: getUsers
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
