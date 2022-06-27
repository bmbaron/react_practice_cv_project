import '../App.css';
import { Component } from 'react'

class GeneralForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: this.props.general.name,
        email: this.props.general.email, 
        phone: this.props.general.phone,
        position: this.props.general.position,
		}
	}

	updateData = (event) => {
		event.preventDefault()
		this.setState({
			...this.state,[event.target.id]: event.target.value,
		})
	}

	submitData = (event) => {
		console.log(this.state.name)
		event.preventDefault()
		this.props.submit({
			submitted: !this.props.general.submitted,
			name: this.state.name,
			email: this.state.email, 
			phone: this.state.phone,
			position: this.state.position,
		}, event.target.className)
	}

	render() {
		let generalForm;
		if(!this.props.general.submitted) {
			generalForm = Object.keys(this.props.general).map((keyName, index) => {
				return (
					index > 0 &&
					<div className={`${keyName}-container`}>
						<label htmlFor={keyName}>Your {keyName}: </label>
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
			generalForm = Object.keys(this.props.general).map((keyName, index) => {
				return (
					index > 0 && 
						<h3 className='submitted-info'>{this.props.general[keyName]} </h3>
				)
			})
		}
		const buttonText = this.props.general.submitted ? "edit" : "submit"

		return(
			<form className='general' onSubmit={this.submitData}>
				<div className='general-container'>
					<h1 className='section-title'>General Information</h1>
					{generalForm}				
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

export default GeneralForm