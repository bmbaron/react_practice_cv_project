import '../App.css';
import { Component } from 'react'

class EducationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        school: this.props.education.school,
        major: this.props.education.major, 
        dateStart: this.props.education.dateStart,
        dateEnd: this.props.education.dateEnd,
		}
	}

	updateData = (event) => {
		event.preventDefault()
		this.setState({
        school: this.state.school,
        major: this.state.major, 
        dateStart: this.state.dateStart,
        dateEnd: this.state.dateEnd,
			  [event.target.id]: event.target.value,
		})
	}

	submitData = (event) => {
		event.preventDefault()
		this.props.submit({
      submitted: !this.props.education.submitted,
      school: this.state.school,
      major: this.state.major, 
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd,
		}, event.target.className)
	}

	render() {
		let educationForm;
		if(!this.props.education.submitted) {
			educationForm = Object.keys(this.props.education).map((keyName, index) => {
				let labelText = 'Your ' + keyName + ':'
				if (keyName === 'dateStart') {
					labelText = 'Start date:';
				}
				else if (keyName === 'dateEnd') {
					labelText = 'End date:';
				}
				return (
					index > 0 && index < Object.keys(this.props.education).length &&
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
			educationForm = Object.keys(this.props.education).map((keyName, index) => {
				return (
					index > 0 && 
						<h3 className='submitted-info'>{this.props.education[keyName]} </h3>
				)
			})
		}
		const buttonText = this.props.education.submitted ? "edit" : "submit"

		return(
			<form className='education' onSubmit={this.submitData}>
				<div className='education-container'>
					<h1 className='section-title'>Education</h1>
					{educationForm}				
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

export default EducationForm