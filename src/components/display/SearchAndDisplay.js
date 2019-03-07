import React, { Component } from 'react';
import DisplayResults from '../fetch/DisplayResults';

class SearchAndDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queryStrings: '',
            error: null,
            isLoaded: false,
            items: [],
            page: 0,
            nbPages: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePages = this.handlePages.bind(this);

    }

    componentDidMount() {
        this.fetchAndUpdate(this.state.queryStrings);
    }

    handleChange(event) {
        //this.setState({ queryStrings: "query=" + event.target.value });
        this.fetchAndUpdate("query=" + event.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.info(event.type)
        if (event.keyCode === 13) {
            this.fetchAndUpdate("query=" + event.target.value + "&page=0");
        }
        //
    }

    handlePages(event) {
        console.info(this.state);
        let page = this.state.page;
        if (event.target.text === "Previous") {
            page = page - 1 <= 0 ? 0 : page - 1;
            this.fetchAndUpdate("query=" + this.state.queryStrings + "&page=" + page);
        } else if (event.target.text === "Next") {
            console.info(this.state.nbPages, page);
            page = page + 1 >= this.state.nbPages ? this.state.nbPages : page + 1;
            this.fetchAndUpdate("query=" + this.state.queryStrings + "&page=" + page);
        }
    }

    fetchAndUpdate(queryStrings) {
        fetch("http://hn.algolia.com/api/v1/search?" + queryStrings)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        queryStrings: result.query,
                        isLoaded: true,
                        items: result.hits,
                        page: result.page,
                        nbPages: result.nbPages
                    });
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }



    render() {
        let href = "#";
        return (
            <div>
                <div className="active-cyan-3 active-cyan-4 mb-4">
                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" onKeyUp={this.handleSubmit} />
                </div>
                <DisplayResults items={this.state.items} />

                {/* <Button value="previous" onClick={this.handlePages}>previous</Button>
                    <Button value="next" onClick={this.handlePages}>next</Button> */}
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link" href={href} onClick={this.handlePages}>Previous</a></li>
                        <li className="page-item"><a className="page-link" href={href} onClick={this.handlePages}>Next</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default SearchAndDisplay;