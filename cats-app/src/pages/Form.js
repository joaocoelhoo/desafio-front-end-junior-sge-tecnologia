import { useContext, useState } from 'react';
import FirstStage from '../components/FirstStage';
import SecondStage from '../components/SecondStage';
import ThirdStage from '../components/ThirdStage'
import Context from '../context/Context';
import Header from '../components/Header';
import './Form.css';
import checkmark from '../icons/checkmark.png';

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
			<Header />
			<div className="form-content">
				<div className="form-stages">
					<button
							onClick={(_event) => {setStages({
							firstStage: true,
							secondStage: false,
							thirdStage: false,
						})}}
						style={{backgroundColor: stages.firstStage ? "#f1f38b" : "#c2c38e"}}
						type="button"
					>
						Etapa 1 { firstStageCompleted && <img src={checkmark} /> }
					</button>
					<button
							onClick={(_event) => {setStages({ 
							firstStage: false,
							secondStage: true,
							thirdStage: false
						})}}
						style={{backgroundColor: stages.secondStage ? "#f1f38b" : "#c2c38e"}}
						type="button"
					>
						Etapa 2 { secondStageCompleted && <img src={checkmark} /> }
					</button>
					<button
							onClick={(_event) => {setStages({
							firstStage: false,
							secondStage: false,
							thirdStage: true
						})}}
						style={{backgroundColor: stages.thirdStage ? "#f1f38b" : "#c2c38e"}}
						type="button"
					>
						Etapa 3 { thirdStageCompleted && <img src={checkmark} /> }
					</button>
				</div>
				{ stages.firstStage && <FirstStage /> }
				{ stages.secondStage && <SecondStage /> }
				{ stages.thirdStage && <ThirdStage /> }
				<div className="bottom-buttons">
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
			</div>
		</div>
	);
}
  
export default Form;