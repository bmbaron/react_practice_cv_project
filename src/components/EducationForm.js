import '../App.css';
import { useState, useEffect } from 'react'

function EducationForm (props) {
  const [education, setEducation] = useState({ 
		submitted: false,
		school: '',
		major: '',
		dateStart: '',
		dateEnd: ''
})

	useEffect(()=> {
		setEducation({
				submitted: props.education.submitted,
				school: props.education.school,
				major: props.education.major, 
				dateStart: props.education.dateStart,
				dateEnd: props.education.dateEnd
		})
	}, [props.education])


	function updateData (event) {
		setEducation(prevState => ({
			...prevState, [event.target.name]: event.target.value
		}))
	}

	function submitData (event) {
		event.preventDefault()
		props.submit({...education, submitted: !education.submitted}, event.target.className)
	}

	function getEducationForm() {
		let form = []
		const keys = Object.keys(education)
		if (!education.submitted){
			form = keys.map((name, index) => {
				return index > 0 && (
					<div key={`${name}Container2`} className={`${name}-container2`}>
						<label key={`${name}Label2`}htmlFor={name}>Your {name}: </label>
						<input 
							key={name}
							className='input-field'
							onChange={updateData} 
							name={name}
							value={education[name]}
						/>
					</div>
				)
			})
		}
		else {
			form = keys.map((keyName, index) => {
				return index > 0 && 
						<h3 className='submitted-info' key={`${index}Submitted2`}>{education[keyName]} </h3>
			})
		}
		return form
	}

	return(
		<form className='education' onSubmit={submitData}>
			<div className='education-container'>
				<h1 className='section-title'>Education</h1>
				{education && getEducationForm()}				
			</div>
			{!props.final &&	
				<div className='button-container' key="buttonContainer">
						<button className='submit-button button' formAction='submit' value={education.submitted ? "edit" : "submit"} key="button">{education.submitted ? "edit" : "submit"}</button>
				</div>	
			}
		</form>
	)
}

export default EducationForm