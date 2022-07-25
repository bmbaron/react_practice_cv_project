import '../App.css';
import { Component } from 'react'

class ExperienceForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
			exper: this.props.experience
		}
	}

	getExperienceForm = () => {
		// let buttonText = [];

		// let form = this.state.exper.map((exp, index) => {
		// 	buttonText.push(exp.submitted ? "edit" : "submit")
		// 	if(!exp.submitted) {
		// 		return Object.keys(exp).map((keyName, index2) => {
		// 			let labelText = keyName + ':'
		// 			if (keyName === 'dateStart') {
		// 				labelText = 'start date:';
		// 			}
		// 			else if (keyName === 'dateEnd') {
		// 				labelText = 'end date:';
		// 			}
		// 			return (
		// 				index2 > 0 &&
		// 				<div className={`${keyName}-container`} key={Math.random()}>
		// 					<label htmlFor={keyName} key={keyName+index+"label"}>{labelText}</label>
		// 					<input 
		// 						className='input-field'
		// 						// key={keyName + index}
		// 						id={keyName}
		// 						onChange={e=>this.updateData(e,index)} 
		// 						value={this.state.exper[index][keyName]}
		// 					/>
		// 					{index2 === 5 && !this.props.final &&
		// 							<div className='button-container' key={Math.random()}>
		// 								{index === this.state.exper.length-1 &&
		// 									<button className='add-experience-button button' type='button' onClick={this.addExperience} value="add" key={Math.random()}>add</button>
		// 								}
		// 								<button className='delete-button button' type='button' onClick={this.deleteExperience} value={index} key={Math.random()}>delete</button>
		// 								<button className='submit-button button' formAction='submit' value={buttonText[0]} key={Math.random()}>{buttonText[0]} </button>
		// 							</div>
		// 					}
		// 				</div>
		// 			)
		// 		})
		// 	}
		// 	else {
		// 		return Object.keys(exp).map((keyName, index3) => {
		// 			return (
		// 				index3 > 0 && 
		// 					<div key={Math.random()}>
		// 						<h3 key={Math.random()} className='submitted-info'>{exp[keyName]} </h3>
		// 						{index3 === 5 && !this.props.final &&
		// 							<div className='button-container' key={Math.random()}>
		// 								{index === this.state.exper.length-1 &&
		// 									<button className='add-experience-button button' type='button' onClick={this.addExperience} value="add" key={Math.random()}>add</button>
		// 								}
		// 								<button className='delete-button button' type='button' onClick={this.deleteExperience} value={index} key={Math.random()}>delete</button>
		// 								<button className='submit-button button' formAction='submit' value={buttonText[0]} key={Math.random()}>{buttonText[0]}</button>
		// 							</div>
		// 						}
		// 					</div>
		// 			)
		// 		})
		// 	}
		// })
		return <div className='button-container' key={Math.random()} />
	}

	updateData = (event, index) => {
		event.preventDefault()
		this.setState((prevState) => ({
				exper: prevState.exper.map((exp, ind) => {
					return ind === index ? {...exp, [event.target.id]: event.target.value} : exp
				})
			}))
		}

				// 	, [event.target.id]: event.target.value]

				// ]
        // company: this.state.company,
        // position: this.state.position,
        // tasks: this.state.tasks,
        // dateStart: this.state.dateStart,
        // dateEnd: this.state.dateEnd,
			  // [event.target.id]: event.target.value,




	//need to update
	submitData = (event) => {
		event.preventDefault()
		this.props.submit(
			{
      submitted: !this.props.experience[0].submitted,
      company: this.state.company,
      position: this.state.position, 
			tasks: this.state.tasks, 
      dateStart: this.state.dateStart,
      dateEnd: this.state.dateEnd,
		}, 0
		)
	}

	addExperience = (e) => {
		e.preventDefault()
		this.setState((prevState) => ({
			exper: [...prevState.exper, {
				submitted: false,
				company: '',
				position: '',
				tasks: '',
				dateStart: '',
				dateEnd: '',
				}]
		}))
	}

	deleteExperience = (event) => {
		const index = event.target.value
    this.setState((prevState) => ({
      exper: [...prevState.exper.slice(0,index), ...prevState.exper.slice(index+1)]
    }))
	}

	render() {
		let experienceForm = [];		
		experienceForm = this.getExperienceForm()

		return(
			<form key="form" className='experience' onSubmit={this.submitData}>
				<div key="experience-container" className='experience-container'>
					<h1 key="section-title" className='section-title'>Experience</h1>
					{experienceForm}				
				</div>
				{/* {!this.props.final &&
					<div className='button-container'>
						<button className='add-experience-button' type='button' onClick={this.addExperience} value="add">add</button>
						<button className='submit-button' formAction='submit' value={buttonText[0]}>{buttonText[0]}</button>
					</div>		
				} */}
			</form>
		)
  }
}

export default ExperienceForm