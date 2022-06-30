import '../App.css';
import { Component } from 'react'
import arrowPic from '../right arrow.png'

class NavButtons extends Component {
	constructor(props) {
    super(props)
    this.state = {
        show: false,
		}
	}

	displayFinal = () => {
		this.props.displayFinal(!this.state.show)
		this.setState({
			show: !this.state.show
		})
	}

	render() {
		const displayFinalText = this.state.show ? 'Return to editor' : 'See full CV'
		return(
			<div className='next-section-container'>
				<img className='next-section-left' alt='arrow to continue to next section' src={arrowPic} onClick={() => this.props.updateSection('down')}></img>
				<h2 className='final-cv' onClick={this.displayFinal}>{displayFinalText}</h2>
				<img className='next-section-right' alt='arrow to continue to next section' src={arrowPic} onClick={() => this.props.updateSection('up')}></img>
			</div>
		)
  }
}

export default NavButtons