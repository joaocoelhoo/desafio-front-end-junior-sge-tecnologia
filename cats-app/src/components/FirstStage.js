import React,{ useContext, useState, useEffect } from "react";
import Context from "../context/Context";
import "../pages/Form.css";

function FirstStage () {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const { setFirstStageCompleted } = useContext(Context);

	const setStageCompleted = () => {
		const completed = email &&
			password &&
			confirmPassword &&
			isEmailValid(email) &&
			isPasswordValid(password, confirmPassword);
		setFirstStageCompleted(completed);
	}

	const isEmailValid = (emailInput) => {
		const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i;
		if (emailRegex.test(emailInput)) {
			return true;
		}
		return false;
	}

	const isPasswordValid = (password, confirmPassword) => {
		if (password === confirmPassword) {
			return true;
		}
		return false;
	}

	useEffect(() => {
		setStageCompleted();
	});

	return (
		<form id="forms" className="form-pages">
			<label>Email:
				<input 
					placeholder="seuemail@exemplo"
					type="email"
					value={email}
					onChange={(event) => {setEmail(event.target.value)}}
					required
				/>
				{ email && !isEmailValid(email) && <span>E-mail inválido</span> }
			</label>
			<label>Senha:
				<input 
					placeholder="*********"
					type="password"
					value={password}
					onChange={(event) => {setPassword(event.target.value)}}
					required
				/>
			</label>
			<label>Confirmação de senha:
				<input 
					placeholder="*********"
					type="password"
					value={confirmPassword}
					onChange={(event) => {setConfirmPassword(event.target.value)}}
					required
				/>
				{ email && !isPasswordValid(password, confirmPassword) 
					&& <span>Senha inválida</span> }
			</label>
		</form>
	)
}

export default FirstStage