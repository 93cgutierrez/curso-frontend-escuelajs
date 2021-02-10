import { useState, useEffect } from 'react';

const useInitialState = (API) => {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		try {
			fetch(API)
				.then((response) => response.json())
				.then((data) => setVideos(data));
		} catch (error) {
			console.log(`ERROR:: ${error}`);
		}
	}, []);
	return videos;
};

export default useInitialState;
