// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  buttonClicked = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  render() {
    const {faqsList} = this.props
    const {questionText, answerText} = faqsList
    const {isActive} = this.state
    const img = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const altText = isActive ? 'minus' : 'plus'
    return (
      <li className="list-container">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.buttonClicked}>
            <img src={img} alt={altText} />
          </button>
        </div>
        {isActive && (
          <div>
            <hr className="line" />
            <p className="answer">{answerText}</p>
          </div>
        )}
      </li>
    )
  }
}

export default FaqItem
