import { useEffect, useState } from 'react';
import Context from './Context';
import { tags } from '../api-offline/tagsOffline';
import { cats } from '../api-offline/catsOffline';

function Provider({ children }) {
	const [tagsData, setTagsData] = useState([]);
	const [catsData, setCatsData] = useState([]);
	const [firstStageCompleted, setFirstStageCompleted] = useState(false);
	const [secondStageCompleted, setSecondStageCompleted] = useState(false);
	const [thirdStageCompleted, setThirdStageCompleted] = useState(false); 

	const contextValues = {
		catsData,
		setCatsData,
		tagsData,
		setTagsData,
		firstStageCompleted,
		setFirstStageCompleted,
		secondStageCompleted,
		setSecondStageCompleted,
		thirdStageCompleted,
		setThirdStageCompleted,
	}

	const tagsDataResult = async () => {
		await fetch('https://cataas.com/api/tags')
			.then((response) => response.json())
			.then((responseJSON) => {
				setTagsData(responseJSON);
			})
			.catch((error) => { 
				console.log('An error occured', error)
				setTagsData(tags);
			});
	};

	const catsDataResult = async () => {
		await fetch('https://cataas.com/api/cats')
			.then((response) => response.json())
			.then((responseJSON) => {
				setCatsData(responseJSON);
			})
			.catch((error) => { 
				console.log('An error occured', error)
				setCatsData(cats);
			});
	};

	useEffect(() => {
		catsDataResult();
		tagsDataResult();
	}, []);

	return (
			<Context.Provider value={ contextValues }>
				{ children }
			</Context.Provider>
		);
}

export default Provider;