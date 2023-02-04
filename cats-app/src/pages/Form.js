import { useContext, useState } from 'react';
import FirstStage from '../components/FirstStage';
import SecondStage from '../components/SecondStage';
import ThirdStage from '../components/ThirdStage'
import Context from '../context/Context';

function Form() {
	const [stages, setStages] = useState({
		firstStage: true,
		secondStage: false,
		thirdStage: false
	})
	const { 
		firstStageCompleted,
		secondStageCompleted,
		thirdStageCompleted 
	} = useContext(Context);

	const onNextClick = () => {
		if (stages.firstStage && firstStageCompleted) {
			setStages({...stages, firstStage: false, secondStage: true})
		}	
		if (stages.secondStage && secondStageCompleted) {
			setStages({...stages, secondStage: false, thirdStage: true})
		}	
	}

	const alertSucess = () => {
		alert("Enviado com sucesso!")
	}

	return (
		<div>
			<button
				onClick={(_event) => {setStages({
					firstStage: true,
					secondStage: false,
					thirdStage: false
				})}}
				type="button"
			>
				Etapa 1
			</button>
			<button
				onClick={(_event) => {setStages({
					firstStage: false,
					secondStage: true,
					thirdStage: false
				})}}
				type="button"
			>
				Etapa 2
			</button>
			<button
				onClick={(_event) => {setStages({
					firstStage: false,
					secondStage: false,
					thirdStage: true
				})}}
				type="button"
			>
				Etapa 3
			</button>
			{ stages.firstStage && <FirstStage /> }
			{ stages.secondStage && <SecondStage /> }
			{ stages.thirdStage && <ThirdStage /> }

			{ !stages.thirdStage && 
				<button onClick={ (_event) => onNextClick() }
				type="submit"
				form='forms'>
					Avançar
				</button> }
			<button 
				type="submit" 
				form="forms"
				disabled={ !firstStageCompleted || !secondStageCompleted || !thirdStageCompleted }
				onClick={ alertSucess } 
			>
				Enviar
			</button>
		</div>
	);
}
  
export default Form;