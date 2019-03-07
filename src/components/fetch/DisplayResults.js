import React, { Component } from 'react';

class DisplayResults extends Component {
  constructor(props) {
    super(props);
    console.info(props);
    this.items = props.items;
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  render() {
    this.items = this.props.items;
    return (
      <div className="itemContainer">
        {this.items.map(item => {
          if (item.title) {
            return <div className="search-result new-job" key={item.objectID}>
              <div className="content">
                <h5><a href={item.url}>{item.title}</a></h5>
                <ul className="list-inline">
                  <li className="list-inline-item">{item.author}</li>
                  <li className="list-inline-item">{item.num_comments} comments</li>
                  <li className="list-inline-item">{item.points} points</li>
                </ul>
                <p dangerouslySetInnerHTML={{__html: item.comment_text}} />
                
              </div>
            </div>
          } else if (item.story_title) {
            return <div className="search-result" key={item.objectID}>
              <div className="content">
                <h5><a href={item.url}>{item.title}</a></h5>
                <ul className="list-inline">
                  <li className="list-inline-item">{item.author}</li>
                  <li className="list-inline-item">{item.num_comments} comments</li>
                  <li className="list-inline-item">{item.points} points</li>
                </ul>
                <p dangerouslySetInnerHTML={{__html: item.comment_text}} />
              </div>
            </div>
          }else{
            return "";
          }
        }
        )}

      </div>);


  }
}

export default DisplayResults;