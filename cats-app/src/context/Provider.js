import { useEffect, useState } from 'react';
import Context from './Context';

function Provider({ children }) {
	const [catsData, setCatsData] = useState([]);
	const [firstStageCompleted, setFirstStageCompleted] = useState(false);
	const [secondStageCompleted, setSecondStageCompleted] = useState(false);
	const [thirdStageCompleted, setThirdStageCompleted] = useState(false); 

	const contextValues = {
		catsData,
		setCatsData,
		firstStageCompleted,
		setFirstStageCompleted,
		secondStageCompleted,
		setSecondStageCompleted,
		thirdStageCompleted,
		setThirdStageCompleted,
	}

	useEffect(() => {
		const catsDataResult = () => {
			fetch('https://cataas.com/api/tags')
				.then((response) => response.json())
				.then((responseJSON) => {
					setCatsData(responseJSON)
				})
				.catch((error) => console.log('An error occured', error));
		};

		catsDataResult();
	}, []);

	return (
			<Context.Provider value={ contextValues }>
				{ children }
			</Context.Provider>
		);
}

export default Provider;