import '../App.css';
import { useState } from 'react'
import arrowPic from '../right arrow.png'



function NavButtons (props) {

	const [show, setShow] = useState(false)
	const [loadSample, setLoadSample] = useState(true)

	function displayFinal () {
		props.displayFinal(!show)
		setShow(!show)
	}

	function handleSample () {
		props.preload(loadSample)
		setLoadSample(!loadSample)
	}

	const displayFinalText = show ? 'Return' : 'Build CV'
	return(
		<div className='next-section-container'>
			{!show &&
				<img className='next-section-left' alt='arrow to continue to next section' src={arrowPic} onClick={() => props.updateSection('down')}></img>
			}
			<div className="nav-button-container">
				<button className='final-cv' onClick={displayFinal}>{displayFinalText}</button>
				{show && 
					<button className='preload-cv' onClick={handleSample}>{loadSample ? 'Sample' : 'Clear'}</button>
				}
			</div>
			{!show &&
				<img className='next-section-right' alt='arrow to continue to next section' src={arrowPic} onClick={() => props.updateSection('up')}></img>
			}
		</div>
	)

}

export default NavButtons