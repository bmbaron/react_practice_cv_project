import './App.css';
import React, { Component } from 'react'
import GeneralForm from './components/GeneralForm'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import NavButtons from './components/NavButtons'

class App extends Component {
  constructor() {
    super();
    this.state = {
      section: 1,
      displayFinal: false,
      general: {
        submitted: false,
        name: '',
        email: '', 
        phone: '',
        position: '',
      },
      education: {
        submitted: false,
        school: '',
        major: '',
        dateStart: '',
        dateEnd: '',
      },
      experience: {
        submitted: false,
        company: '',
        position: '',
        tasks: '',
        dateStart: '',
        dateEnd: '',
      }
    };
  }

  updateSection = (direction) => {
    let newSection = direction === 'down' ? this.state.section - 1 : this.state.section + 1
    if (newSection === 0) {
      newSection = 3
    }
    else if (newSection === 4) {
      newSection = 1
    }
    this.setState({
      general: {...this.state.general},
      education: {...this.state.education},
      experience: {...this.state.experience}, 
      displayFinal: this.state.displayFinal,
      section: newSection
    })
  }

  displayFinal = (display) => {
    this.setState({
      general: {...this.state.general, submitted: display},
      education: {...this.state.education, submitted: display},
      experience: {...this.state.experience, submitted: display}, 
      section: this.state.section,
      displayFinal: !this.state.displayFinal,
    })
  }

  onSubmit = (newData, page) => {
    this.setState({
      section: this.state.section,
      displayFinal: this.state.displayFinal,
      general: {...this.state.general},
      education: {...this.state.education},
      experience: {...this.state.experience},
      [page]: {...newData}
    })
  }

  render() {
    return(
      <div className='cv-container'>
        <h1 className='title'>CV Maker App</h1>
        <NavButtons updateSection={this.updateSection} displayFinal={this.displayFinal} />
        {this.state.displayFinal === true ?
          <>
            <GeneralForm general={this.state.general} final={true} submit={this.onSubmit} />
            <EducationForm education={this.state.education} final={true} submit={this.onSubmit} />
            <ExperienceForm experience={this.state.experience} final={true} submit={this.onSubmit} />
          </>
          :
          <>
          {this.state.section === 1 && <GeneralForm general={this.state.general} submit={this.onSubmit} /> }
          {this.state.section === 2 && <EducationForm education={this.state.education} submit={this.onSubmit} /> }
          {this.state.section === 3 && <ExperienceForm experience={this.state.experience} submit={this.onSubmit} /> }
          </>
        }
      </div>
    )
  }
}

export default App
