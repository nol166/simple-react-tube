import React, { Component } from 'react'
import { Searchbar } from "./Searchbar";
import youtube from '../apis/youtube'
import VideoList from "./VideoList"

export class App extends Component {
    state = { videos: [] };

    onTermSubmit = async term => {
        // console.log(term)
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        })
        this.setState({ videos: response.data.items })
    }

    render() {
        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onTermSubmit} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}

export default App
