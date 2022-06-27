import '../App.css';
import { Component } from 'react'

class ExperienceForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      company: this.props.experience.company,
      position: this.props.experience.position,
      tasks: this.props.experience.tasks,
      dateStart: this.props.experience.dateStart,
      dateEnd: this.props.experience.dateEnd,
		}
	}

	updateData = (event) => {
		event.preventDefault()
		this.setState({
        company: this.state.company,
        position: this.state.position,
        tasks: this.state.tasks,
        dateStart: this.state.dateStart,
        dateEnd: this.state.dateEnd,
			  [event.target.id]: event.target.value,
		})
	}

	submitData = (event) => {
		event.preventDefault()
		this.props.submit({
      submitted: !this.props.experience.submitted,
      company: this.state.company,
      position: this.state.position, 
			tasks: this.state.tasks, 
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd,
		}, event.target.className)
	}

	render() {
		let experienceForm;
		if(!this.props.experience.submitted) {
			experienceForm = Object.keys(this.props.experience).map((keyName, index) => {
				let labelText = 'Your ' + keyName + ':'
				if (keyName === 'dateStart') {
					labelText = 'Start date:';
				}
				else if (keyName === 'dateEnd') {
					labelText = 'End date:';
				}
				return (
					index > 0 &&
					<div className={`${keyName}-container`}>
						<label htmlFor={keyName}>{labelText}</label>
						<input 
							className='input-field'
							id={keyName}
							onChange={this.updateData} 
							value={this.state[keyName]}
						/>
					</div>
				)
			})
		}
		else {
			experienceForm = Object.keys(this.props.experience).map((keyName, index) => {
				return (
					index > 0 && 
						<h3 className='submitted-info'>{this.props.experience[keyName]} </h3>
				)
			})
		}
		const buttonText = this.props.experience.submitted ? "edit" : "submit"

		return(
			<form className='experience' onSubmit={this.submitData}>
				<div className='experience-container'>
					<h1 className='section-title'>Experience</h1>
					{experienceForm}				
				</div>
				{!this.props.final &&
					<div className='button-container'>
						<button className='submit-button' formAction='submit' value={buttonText}>{buttonText}</button>
					</div>		
				}
			</form>
		)
  }
}

export default ExperienceForm