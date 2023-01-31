import { useState } from 'react'
import './App.css'

function App() {
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
					/>
					<input
						className='TextInput'
						type='text'
						name='email'
						placeholder='Email'
					/>
					<input
						className='TextInput'
						type='password'
						name='password'
						placeholder='Password'
					/>
					<input
						className='TextInput'
						type='password'
						name='passwordRepeat'
						placeholder='Password repeat'
					/>
					<label className='TouCheckboxLabel'>
						<input
							className='TouCheckbox'
							type='checkbox'
							name = 'termsAccepted' 
						/>
						Accept Terms of Use!
					</label>
					<button>
						Register
					</button>
				</form>
			</div>
		</div>
	)
}

export default App
