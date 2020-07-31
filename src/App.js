import React, { useState, useEffect } from 'react'
import db from './firebase'
import Video from './Video'
import './App.css'

const App = () => {
	const [ videos, setVideos ] = useState([])
	useEffect(
		() => {
			db
				.collection('videos')
				.onSnapshot((snapshot) =>
					setVideos(snapshot.docs.map((doc) => doc.data()))
				)
		},
		[ setVideos ]
	)
	return (
		<div className="app">
			<div className="app__videos">
				{videos.map(
					({
						url,
						channel,
						description,
						song,
						likes,
						messages,
						shares
					}) => (
						<Video
							key={Math.random() * Math.random()}
							url={url}
							channel={channel}
							description={description}
							song={song}
							likes={likes}
							messages={messages}
							shares={shares}
						/>
					)
				)}
			</div>
		</div>
	)
}

export default App
