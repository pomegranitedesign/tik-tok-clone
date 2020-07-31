import React, { useState, useRef } from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import './Video.css'

const Video = ({
	url,
	channel,
	description,
	song,
	likes,
	messages,
	shares
}) => {
	const [ play, setPlay ] = useState(false)
	const videoRef = useRef(null)
	const onVideoPress = () => {
		if (play) {
			videoRef.current.pause()
			setPlay(false)
		} else {
			videoRef.current.play()
			setPlay(true)
		}
	}
	return (
		<div className="video">
			<video
				autoPlay
				loop
				onClick={onVideoPress}
				ref={videoRef}
				src={url}
				className="video__player"
			/>
			<VideoFooter
				channel={channel}
				description={description}
				song={song}
			/>
			<VideoSidebar likes={likes} messages={messages} shares={shares} />
		</div>
	)
}

export default Video
