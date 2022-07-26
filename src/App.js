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
      phone: '',
      'current position': ''
  })
  const [education, setEducation] = useState({ 
        submitted: false,
        school: '',
        major: '',
        dateStart: '',
        dateEnd: ''
  })
  const [experience, setExperience] = useState( 
      [{
        submitted: false,
        company: '',
        position: '',
        tasks: '',
        dateStart2: '',
        dateEnd2: '',
      },
      {
        submitted: false,
        company: '',
        position: '',
        tasks: '',
        dateStart2: '',
        dateEnd2: '',
      }]
  )

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

    setExperience(prevState => ({...prevState, submitted: display}))
    
    setFinal(!final)
  }

  function onSubmit (newData, page) {
    page === "general" &&
      setGeneral({...newData})

    page === "education" &&
      setEducation({...newData})

    page ==="experience" &&
      setExperience({...newData})
  }

  // function onSubmitExperience (newData, indexToUpdate) {
  //   setExperience(prevState => ({
  //     data: prevState.data.map((el, index) => {
  //       return (
  //         index === indexToUpdate ? newData : el
  //       )
  //     })
  //   }))
  // }


  return (
        <div className='cv-container'>
        <h1 className='title'>CV Maker App</h1>
        <NavButtons updateSection={updateSection} displayFinal={displayFinal} />
        {final === true ?
          <>
            <GeneralForm general={general} final={true} submit={onSubmit} />
            <EducationForm education={education} final={true} submit={onSubmit} />
            <ExperienceForm experience={experience} final={true} submit={onSubmit} />
          </>
          :
          <>
          {section === 1 && <GeneralForm general={general} submit={onSubmit} /> }
          {section === 2 && <EducationForm education={education} submit={onSubmit} /> }
          {section === 3 && <ExperienceForm experience={experience} submit={onSubmit} /> } 
          </>
        }
      </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//      state = {
//       section: 3,
//       displayFinal: false,
//       general: {
//         submitted: false,
//         name: '',
//         email: '', 
//         phone: '',
//         'current position': '',
//       },
//       education: {
//         submitted: false,
//         school: '',
//         major: '',
//         dateStart: '',
//         dateEnd: '',
//       },
//       experience: [{
//         submitted: false,
//         company: '',
//         position: '',
//         tasks: '',
//         dateStart: '',
//         dateEnd: '',
//       }]
//     };
//   }

//   updateSection = (direction) => {
//     let newSection = direction === 'down' ?  section - 1 :  section + 1
//     if (newSection === 0) {
//       newSection = 3
//     }
//     else if (newSection === 4) {
//       newSection = 1
//     }
//      setState({
//       general: {... general},
//       education: {... education},
//       experience: {... experience}, 
//       displayFinal:  displayFinal,
//       section: newSection
//     })
//   }

//   displayFinal = (display) => {
//      setState({
//       general: {... general, submitted: display},
//       education: {... education, submitted: display},
//       experience: {... experience, submitted: display}, 
//       section:  section,
//       displayFinal: ! displayFinal,
//     })
//   }

//   onSubmit = (newData, page) => {
//      setState({
//       section:  section,
//       displayFinal:  displayFinal,
//       general: {... general},
//       education: {... education},
//       experience: {... experience},
//       [page]: {...newData}
//     })
//   }

//   onSubmitExperience = (newData, indexToUpdate) => {
//      setState({
//       section:  section,
//       displayFinal:  displayFinal,
//       general: {... general},
//       education: {... education},
//       experience:  experience.map((el, index)=>{
//         return (
//           index === indexToUpdate ? newData : el
//         )
//       }),
//     })
//   }

//   addExperience = () => {
//      setState((prevState) => ({
//       section: prevState.section,
//       displayFinal: prevState.displayFinal,
//       general: {...prevState.general},
//       education: {...prevState.education},
//       experience: [...prevState.experience, {
//         submitted: false,
//         company: '',
//         position: '',
//         tasks: '',
//         dateStart: '',
//         dateEnd: '',
//         }]
//     }))
//   }

//   deleteExperience = (index) => {
//      setState((prevState) => ({
//       section: prevState.section,
//       displayFinal: prevState.displayFinal,
//       general: {...prevState.general},
//       education: {...prevState.education},
//       experience: [...prevState.experience.slice(0,index), ...prevState.experience.slice(index+1)]
//       }))
//   }

//   render() {
//     return(
//       <div className='cv-container'>
//         <h1 className='title'>CV Maker App</h1>
//         <NavButtons updateSection={ updateSection} displayFinal={ displayFinal} />
//         { displayFinal === true ?
//           <>
//             <GeneralForm general={ general} final={true} submit={ onSubmit} />
//             <EducationForm education={ education} final={true} submit={ onSubmit} />
//             <ExperienceForm experience={ experience} final={true} submit={ onSubmitExperience} />
//           </>
//           :
//           <>
//           { section === 1 && <GeneralForm general={ general} submit={ onSubmit} /> }
//           { section === 2 && <EducationForm education={ education} submit={ onSubmit} /> }
//           { section === 3 && <ExperienceForm experience={ experience} submit={ onSubmitExperience} addExperience={ addExperience} deleteExperience={ deleteExperience}/> }
//           </>
//         }
//       </div>
//     )
//   }
// }

export default App
