import { useState, useEffect } from 'react';

const useInitialState = (API) => {
	const [videos, setVideos] = useState([]);
	useEffect(() => {
		try {
			setTimeout(() => {
				fetch(API)
					.then((response) => response.json())
					.then((data) => setVideos(data));
			}, 5000);
		} catch (error) {
			console.log(`ERROR:: ${error}`);
		}
	}, []);
	return videos;
};

export default useInitialState;
