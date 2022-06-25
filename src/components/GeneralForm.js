import '../App.css';
import { Component } from 'react'

class GeneralForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
        name: '',
        email: '', 
        phone: '',
        position: '',
		}
  }

	updateData = (event) => {
		this.setState({
        name: this.state.name,
        email: this.state.email, 
        phone: this.state.phone,
        position: this.state.position,
			  [event.target.id]: event.target.value,
		})
	}

	submitData = (event) => {
		event.preventDefault()
		this.props.update({
			name: this.state.name,
			email: this.state.email, 
			phone: this.state.phone,
			position: this.state.position,
		})
	}

	render() {
    return(
      <form className='general-form' onSubmit={this.submitData}>
				<div className='input-container'>
					<label htmlFor='name'>Your name: </label>
					<input 
						className='input-field'
						id='name'
						onChange={this.updateData}
						value={this.state.name}
					/>
					<button className='input-button' formAction='submit'>submit</button>
				</div>
			</form>
    )
  }
}

export default GeneralForm