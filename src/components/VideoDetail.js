import React from 'react'

const VideoDetail = ({ video }) => {
    if (!video) { return <div>Loading...</div> }

    return (
        <div>
            Title: {video.snippet.title}
            {/* Description: {video.snippet.description} */}
        </div>
    )
}

export default VideoDetail
