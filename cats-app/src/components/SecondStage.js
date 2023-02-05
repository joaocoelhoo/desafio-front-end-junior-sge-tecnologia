import React, { useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import "../pages/Form.css";

function SecondStage () {
	const [username, setUsername] = useState('');
	const [lastname, setLastname] = useState('');
	const [birth, setBirth] = useState('');
	const { setSecondStageCompleted } = useContext(Context);

	const setStageCompleted = () => {
		const completed = username &&
			lastname
		setSecondStageCompleted(completed);
	}

	useEffect(() => {
		setStageCompleted();
	});

  return (
		<form id="forms" className="form-pages">
			<label>Nome:
				<input
					placeholder="Ex: João"
					type="text"
					autoComplete="name"
					value={username}
					onChange={(event) => {setUsername(event.target.value)}}
					required
				/>
			</label>
			<label>Sobrenome:
				<input
						placeholder="Ex: Coelho"
						type="text"
						autoComplete="name"
						value={lastname}
						onChange={(event) => {setLastname(event.target.value)}}
						required
					/>
			</label>
			<label>Data de nascimento:
				<input
						placeholder="Ex: 19/03/1994"
						dateformat="d M y"
						type="date"
						value={birth}
						min="1997-01-01" max="2030-12-31"
						onChange={(event) => {setBirth(event.target.value)}}
					/>
			</label>
		</form>
	)
}	

export default SecondStage