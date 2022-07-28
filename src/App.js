import './App.css';
import React, { useState } from 'react'
import GeneralForm from './components/GeneralForm'
import EducationForm from './components/EducationForm'
import ExperienceForm from './components/ExperienceForm'
import NavButtons from './components/NavButtons'

function App() {

  const [section, setSection] = useState(1)
  const [final, setFinal] = useState(false)

  const [general, setGeneral] = useState({ 
      submitted: false,
      name: '',
      email: '', 
      'phone number': '',
      'current position': ''
  })
  const [education, setEducation] = useState({ 
        submitted: false,
        school: '',
        major: '',
        'start date': '',
        'end date': ''
  })
  const [experience, setExperience] = useState( 
      [{
        submitted: false,
        company: '',
        position: '',
        tasks: '',
        'start date': '',
        'end date': ''
      }]
  )

function preloadData (load) {
  if (load) {
    setGeneral({ 
      submitted: true,
      name: 'Ben Baron',
      email: 'benjamin.m.baron@gmail.com', 
      'phone number': '0192345332',
      'current position': 'web developer'
    })
    setEducation({ 
          submitted: true,
          school: 'The University of Iowa',
          major: 'biomedical engineering',
          'start date': '10-2-2012',
          'end date': '12-04-2017'
    })
    setExperience(
        [{
          submitted: true,
          company: 'Vida Diagnostics',
          position: 'Quality Engineer',
          tasks: 'analyzing 3d pulmonary data',
          'start date': '2-07-2017',
          'end date': '05-29-2018'
        }]
    )
  }
  else {
    setGeneral({ 
      submitted: true,
      name: '',
      email: '', 
      'phone number': '',
      'current position': ''
    })
    setEducation({ 
          submitted: true,
          school: '',
          major: '',
          'start date': '',
          'end date': ''
    })
    setExperience( 
        [{
          submitted: true,
          company: '',
          position: '',
          tasks: '',
          'start date': '',
          'end date': ''
        }]
    )
  }
}

  function updateSection (direction) {
    let newSection = direction === 'down' ?  section - 1 :  section + 1
    if (newSection === 0) {
      newSection = 3
    }
    else if (newSection === 4) {
      newSection = 1
    }
     setSection(newSection)
  }

  function displayFinal (display) {
    setGeneral(prevState => ({...prevState, submitted: display}))
    setEducation(prevState => ({...prevState, submitted: display}))
    setExperience(prevState => (
      prevState.map(el => {
        return {...el, submitted: display}
      }))
    )
    setFinal(!final)
  }

  function onSubmit (newData, page, index) {
    page === "general" &&
      setGeneral({...newData})

    page === "education" &&
      setEducation({...newData})

    if (page ==="experience") {
      setExperience(experience.map((obj, objIndex) => {
        if(obj === newData[objIndex]) {
          if (objIndex === index) {
            return {...obj, submitted: !newData[index].submitted}
          }
          else {
            return obj
          }
        }
        else {
          if (objIndex === index) {
            return {...newData[objIndex], submitted: !newData[index].submitted}
          }
          else {
            return newData[objIndex]
          }
        }
      }))
    }
  }

  function addExperience () {
    setExperience([...experience, 
      {
        submitted: false,
        company: '',
        position: '',
        tasks: '',
        'start date': '',
        'end date': ''
      }]
    )
  }

  function removeExperience (index) {
    if(index !== 0) {
      setExperience(prevState => (
        prevState.map((obj, objIndex) => {
          return !(objIndex === index) && obj
        })
      ))
    }
  }

  return (
        <div className='cv-container'>
        <h1 className='title'>CV Maker App</h1>
        <NavButtons updateSection={updateSection} displayFinal={displayFinal} preload={preloadData} />
        {final === true ?
          <>
            <GeneralForm general={general} final={true} submit={onSubmit} />
            <EducationForm education={education} final={true} submit={onSubmit} />
            <ExperienceForm experience={experience} final={true} submit={onSubmit} add={addExperience} remove={removeExperience} />
          </>
          :
          <>
          {section === 1 && <GeneralForm general={general} submit={onSubmit} /> }
          {section === 2 && <EducationForm education={education} submit={onSubmit} /> }
          {section === 3 && <ExperienceForm experience={experience} submit={onSubmit} add={addExperience} remove={removeExperience} /> } 
          </>
        }
      </div>
  )
}

export default App
