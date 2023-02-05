import React, { useContext, useEffect, useState } from "react";
import Context from "../context/Context";
import "../pages/Form.css";

function ThirdStage () {
	const [street, setStreet] = useState('');
	const [homeNumber, setHomeNumber] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');
	const [zip, setZip] = useState('');
	const { setThirdStageCompleted } = useContext(Context);

	const setStageCompleted = () => {
		const completed = street &&
			homeNumber &&
			city &&
			state &&
			country &&
			zip
		setThirdStageCompleted(completed);
	}

	useEffect(() => {
		setStageCompleted();
	});

  return (
		<form id="forms" className="form-pages">
			<label>Rua:
				<input
					placeholder="Nome da rua"
					type="text"
					value={street}
					onChange={(event) => {setStreet(event.target.value)}}
					autoComplete="street-address"
					required
				/>
			</label>
			<label>Número:
				<input
					placeholder="Número"
					type="number"
					value={homeNumber}
					onChange={(event) => {setHomeNumber(event.target.value)}}
					required
				/>
			</label>
			<label>Cidade:
				<input
					placeholder="Cidade"
					type="text"
					autoComplete="street-address"
					value={city}
					onChange={(event) => {setCity(event.target.value)}}
					required
				/>
			</label>
			<label>Estado:
				<input
					placeholder="Estado"
					type="text"
					autoComplete="street-address"
					value={state}
					onChange={(event) => {setState(event.target.value)}}
					required
				/>
			</label>
			<label>País:
				<input
					placeholder="País"
					type="text"
					autoComplete="country"
					value={country}
					onChange={(event) => {setCountry(event.target.value)}}
					required
				/>
			</label>
			<label>CEP:
				<input
					placeholder="CEP"
					type="text"
					autoComplete="postal-code"
					value={zip}
					onChange={(event) => {setZip(event.target.value)}}
					required
				/>
			</label>
		</form>
	)
}

export default ThirdStage