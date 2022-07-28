import '../App.css';
import { useState } from 'react'
import arrowPic from '../right arrow.png'



function NavButtons (props) {

	const [show, setShow] = useState(false)

	function displayFinal () {
		props.displayFinal(!show)
		setShow(!show)
	}

	const displayFinalText = show ? 'Return to editor' : 'See full CV'
	return(
		<div className='next-section-container'>
			{!show &&
				<img className='next-section-left' alt='arrow to continue to next section' src={arrowPic} onClick={() => props.updateSection('down')}></img>
			}
			<h2 className='final-cv' onClick={displayFinal}>{displayFinalText}</h2>
			{!show &&
				<img className='next-section-right' alt='arrow to continue to next section' src={arrowPic} onClick={() => props.updateSection('up')}></img>
			}
		</div>
	)

}

export default NavButtons