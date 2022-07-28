import '../App.css';
import { useState, useEffect } from 'react'


function ExperienceForm (props) {
  const [experience, setExperience] = useState([])

	useEffect(()=> {
		setExperience([...props.experience])
	}, [props.experience])

	function updateData (event, index) {
		setExperience(prevState => (
			prevState.map((obj, objIndex) => {
				return objIndex === index ?
					{...obj, [event.target.name]: event.target.value} : obj
			})
		))
	}

	function submitData (event, index) {
		event.preventDefault()
		props.submit([...experience], 'experience', index)
	}

	function getExperienceForm() {
		let form = experience.map((exp, arrIndex) => {
			const keys = Object.keys(experience[arrIndex])
			if (!experience[arrIndex].submitted){
				return keys.map((name, index) => {
					let isDate = false
					if (name === 'start date' || name === 'end date') isDate = true
					return index > 0 && (
						<div key={`${name}Container`} className={`${name}-container`}>
							<input 
								key={name}
								type="text"
								className='input-field'
								placeholder={`${name}`}
								onFocus={(e)=> {
									if(isDate) {
										e.currentTarget.type = "date";
										e.currentTarget.focus();
									}
								}}							
								onBlur={(e)=> {
										if(isDate) {
											e.currentTarget.type = "text";
											e.currentTarget.blur();
										}
								}}											
								onChange={(event)=>updateData(event,arrIndex)} 
								name={name}
								value={experience[arrIndex][name]}
							/>
							{index === 5 && !props.final &&	
								<div className='button-container experience-buttons' key="buttonContainer">
										<button className='submit-button button' key={`${name + arrIndex}submitButton`} type='button' onClick={(event)=>submitData(event, arrIndex)} name='experience' value={experience[arrIndex].submitted ? "edit" : "submit"}>{experience[arrIndex].submitted ? "edit" : "submit"}</button>
										{arrIndex !== 0 &&
											<button className='delete-button button' key={`${name + arrIndex}deleteButton`} type='button' onClick={()=>props.remove(arrIndex)} value={index}>delete</button>
										}
								</div>
							}	
						</div>
					)
				})
			}
			else {
				return keys.map((keyName, index) => {
					return index > 0 &&
						<div key={`${keyName + arrIndex}containerDiv`}>
							<h3 className='submitted-info' key={`${keyName + arrIndex}submitted`}>{experience[arrIndex][keyName]} </h3>
							{index === 5 && !props.final &&	
								<div className='button-container experience-buttons' key={`${keyName + arrIndex}buttons`}>
										<button className='submit-button button' key={`${keyName + arrIndex}submitButton2`} type='button' onClick={(event)=>submitData(event, arrIndex)} value={experience[arrIndex].submitted ? "edit" : "submit"}>{experience[arrIndex].submitted ? "edit" : "submit"}</button>
								</div>}
						</div>
				})
			}
		})
		return form
	}

	return(
		<form className='experience'>
			<div className='experience-container'>
				<h1 className='section-title'>Experience (3/3)</h1>
				{experience && getExperienceForm()}
				{!props.final && 
					<button className='add-button button' key="addButton" type='button' onClick={props.add} value="hello">add</button>
				}
			</div>
		</form>
	)
}

export default ExperienceForm