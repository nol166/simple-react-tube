import React, { Component } from 'react'
import { Searchbar } from "./Searchbar";
import youtube from '../apis/youtube'
import PropTypes from 'prop-types'

export class App extends Component {
    static propTypes = {

    }
    onTermSubmit = term => {
        // console.log(term)
        youtube.get("/search", { params: { q: term } })
    }

    render() {
        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default App
