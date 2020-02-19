import React from 'react'
import VideoItem from './VideoItem'

/*  was const VideoList = props ... but we used destructing to only reference videos to avoid repitition
    Look for "Unpacking fields from objects passed as function parameter" on
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/
const VideoList = ({ videos }) => {
    const renderedList = videos.map(video => {
        return <VideoItem video={video} />
    })

    return (<div className="ui relaxed divided list">{renderedList}</div>)
}

export default VideoList

