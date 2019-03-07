import React, { Component } from 'react';

import SearchAndDisplay from '../display/SearchAndDisplay';

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
          queryStrings: '',
          page: 0,
          items: []
        };
      }
    
      componentDidMount() {}
    
      render() {
        return (
        <div className = 'container'>
            <SearchAndDisplay/>
        </div>
        );

        
      }
  }
  
  export default Container;