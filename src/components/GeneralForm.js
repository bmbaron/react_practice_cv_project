import '../App.css';
import { Component } from 'react'

class GeneralForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: this.props.general.data.name,
        email: this.props.general.data.email, 
        phone: this.props.general.data.phone,
        'current position': this.props.general.data['current position'],
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
			submitted: !this.props.general.data.submitted,
			name: this.state.name,
			email: this.state.email, 
			phone: this.state.phone,
			'current position': this.state['current position'],
		}, event.target.className)
	}

	render() {
		let generalForm;
		if(!this.props.general.data.submitted) {
			generalForm = Object.keys(this.props.general.data).map((keyName, index) => {
				return (
					index > 0 &&
					<div className={`${keyName}-container`} key={index}>
						<label htmlFor={keyName} key={index+"label"}>Your {keyName}: </label>
						<input 
							className='input-field'
							key={index+"input"}
							id={keyName}
							onChange={this.updateData} 
							value={this.state[keyName]}
						/>
					</div>
				)
			})
		}
		else {
			generalForm = Object.keys(this.props.general.data).map((keyName, index) => {
				return (
					index > 0 && 
						<h3 className='submitted-info' key={index+"submitted"}>{this.props.general.data[keyName]} </h3>
				)
			})
		}
		const buttonText = this.props.general.data.submitted ? "edit" : "submit"

		return(
			<form className='general' onSubmit={this.submitData}>
				<div className='general-container'>
					<h1 className='section-title'>General Information</h1>
					{generalForm}				
				</div>
				{!this.props.final &&
					<div className='button-container' key={"buttonContainer"}>
						<button className='submit-button' formAction='submit' value={buttonText} key={"button"}>{buttonText}</button>
					</div>		
				}
			</form>
		)
  }
}

export default GeneralForm