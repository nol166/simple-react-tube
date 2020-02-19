import React from 'react';
import "./VideoItem.css";

const VideoItem = ({ video }) => {
    return (
        // good practice to give the root element the same classname as the component itself, "VideoItem" => video-item
        <div className="item video-item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="#" />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem
