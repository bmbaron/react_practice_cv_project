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

  loadSample = (display) => {
    alert(display)

    display === true ?
    this.setState({
      general: {
        submitted: !this.state.general.submitted,
        name: 'Sally Sanderson',
        email: 'silly-sally@gmail.com', 
        phone: '319-540-9110',
        position: 'Head of Marketing',
      },
      education: {
        submitted: !this.state.education.submitted,
        school: 'The University of Chesterton',
        major: 'Informatics and System Design',
        dateStart: '10-02-2007',
        dateEnd: '05-14-2011',
      },
      experience: {
        submitted: !this.state.experience.submitted,
        company: 'Big Markets LLC',
        position: 'Marketing Specialist',
        tasks: 'developed promotional materials',
        dateStart: '11-07-2012',
        dateEnd: '03-06-2015',
      }
    })
    :this.setState({
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
        <NavButtons updateSection={this.updateSection} displayFinal={this.displayFinal} loadSample={this.loadSample} />
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
