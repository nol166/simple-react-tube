import React from 'react';
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        // good practice to give the root element the same classname as the component itself, "VideoItem" => video-item
        <div onClick={() => onVideoSelect(video)} className="item video-item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    )
}

export default VideoItem
