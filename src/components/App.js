import React, { Component } from 'react'
import { Searchbar } from "./Searchbar";
import PropTypes from 'prop-types'

export class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div className="ui container">
                <Searchbar />
            </div>
        )
    }
}

export default App
