import React, { Component } from 'react';

class ButtonAction extends Component {
    constructor(props) {
        super(props);
        this.buttonAction = props.buttonAction;
        this.state = {
          page: 0
        };
      }
    
      componentDidMount() {
      }
      render() {
        return (
            <button type="button" className = "ais-SearchBox-submit">{this.props.buttonAction}</button>
          );
      }
  }
  
  export default ButtonAction;