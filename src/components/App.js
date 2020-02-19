import React, { Component } from 'react'
import { Searchbar } from "./Searchbar";
import youtube from '../apis/youtube'
import VideoList from "./VideoList"
import VideoDetail from './VideoDetail';

export class App extends Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    onTermSubmit = async term => {
        // console.log(term)
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        })
        this.setState({ videos: response.data.items })
    }

    onVideoSelect = (video) => {
        console.log(video)
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <Searchbar onFormSubmit={this.onTermSubmit} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}

export default App
