import '../App.css';
import { useState, useEffect } from 'react'

function GeneralForm (props) {
  const [general, setGeneral] = useState({})

	useEffect(()=> {
		setGeneral({
				submitted: props.general.submitted,
				name: props.general.name,
				email: props.general.email, 
				'phone number': props.general['phone number'],
				'current position': props.general['current position']
		})
	}, [props.general])


	function updateData (event) {
		setGeneral(prevState => ({
			...prevState, [event.target.name]: event.target.value
		}))
	}

	function submitData (event) {
		event.preventDefault()
		props.submit({...general, submitted: !general.submitted}, event.target.className)
	}

	function getGeneralForm() {
		let form = []
		const keys = Object.keys(general)
		if (!general.submitted){
			form = keys.map((name, index) => {
				let type 
				if (name === 'email') type = 'email'
				else if (name === 'phone') type = 'tel'
				else type = 'text'

				return index > 0 && (
					<div key={`${name}Container`} className={`${name}-container input-container`}>
						<input 
							key={name}
							type={type}
							placeholder={`${name}`}
							className='input-field'
							onChange={updateData} 
							name={name}
							value={general[name]}
						/>
					</div>
				)
			})
		}
		else {
			form = keys.map((keyName, index) => {
				return index > 0 && 
						<h3 className='submitted-info' key={`${index}Submitted`}>{general[keyName]} </h3>
			})
		}
		return form
	}

	return(
		<form className='general' onSubmit={submitData}>
			<div className='general-container'>
				<h1 className='section-title'>General Information (1/3)</h1>
				{general && getGeneralForm()}				
			</div>
			{!props.final &&	
				<div className='button-container' key="buttonContainer">
						<button className='submit-button button' formAction='submit' value={general.submitted ? "edit" : "submit"} key="button">{general.submitted ? "edit" : "submit"}</button>
				</div>	
			}
		</form>
	)
}

export default GeneralForm