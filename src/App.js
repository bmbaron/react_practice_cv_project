import './App.css';
import React, { Component } from 'react'
import GeneralForm from './components/GeneralForm'


class App extends Component {
  constructor() {
    super();
    this.state = {
      general: {
        name: '',
        email: '', 
        phone: '',
        position: '',
      },
      education: {
        school: '',
        major: '',
        dateStart: '',
        dateEnd: '',
      },
      experience: {
        company: '',
        position: '',
        tasks: '',
        dateStart: '',
        dateEnd: '',
      }
    };
  }

  updateGeneral = (newData) => {
    this.setState({
      general: newData,
      education: {
        school: this.state.education.school,
        major: this.state.education.major,
        dateStart: this.state.education.dateStart,
        dateEnd: this.state.education.dateEnd,
      },
      experience: {
        company: this.state.experience.company,
        position: this.state.experience.position,
        tasks: this.state.experience.tasks,
        dateStart: this.state.experience.dateStart,
        dateEnd: this.state.experience.dateEnd,
      }
    })
  }

  render() {
    console.log(this.state.general.name)
    return(
      <div className='cv-container'>
        <GeneralForm className='general-container' general={this.state.general} update={this.updateGeneral}/>
      </div>
    )
  }
}

export default App
