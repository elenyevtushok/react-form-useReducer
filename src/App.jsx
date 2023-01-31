import { useReducer } from 'react'
import './App.css'

const initialState = {
	name: '',
	email: '',
	password: '',
	passwordRepeat: '',
	termsAccepted: false
};

function reducer(state, action) {
	return { ...state, [action.input]: action.value }
}

function validateState(state) {
	return state.password === state.passwordRepeat
		&& state.termsAccepted
		&& state.password.length > 3;
}

function App() {

	const [state, dispatch] = useReducer(reducer, initialState);

	console.log(state)

	function handleClick(e) {
		e.preventDefault();
		alert(`Hello ${state.name} you were registered successfully!`)
	}

	function handleChange(e) {
		const { name, value, checked } = e.target; //destructuring of e.target object
		const action = {
			input: name,
			value: name === 'termsAccepted' ? checked : value,
		}
		dispatch(action);
	}
	return (
		<div className='App'>
			<div className='RegisterFormContainer'>
				<h2 className='RegisterContainerHeadline'>Register</h2>
				<form className='RegisterForm'>
					<input
						className='TextInput'
						type='text'
						name='name'
						placeholder='Name'
						onChange={handleChange}
					/>
					<input
						className='TextInput'
						type='text'
						name='email'
						placeholder='Email'
						onChange={handleChange}
					/>
					<input
						className='TextInput'
						type='password'
						name='password'
						placeholder='Password'
						onChange={handleChange}
					/>
					<input
						className='TextInput'
						type='password'
						name='passwordRepeat'
						placeholder='Password repeat'
						onChange={handleChange}
					/>
					<label className='TouCheckboxLabel'>
						<input
							className='TouCheckbox'
							type='checkbox'
							name='termsAccepted'
							onChange={handleChange}
						/>
						Accept Terms of Use!
					</label>
					<button
						disabled = {!validateState(state)}
						onClick={handleClick}
						className={!validateState(state) ? 'Disabled' : null}>
						Register
					</button>
				</form>
			</div>
		</div>
	)
}

export default App
