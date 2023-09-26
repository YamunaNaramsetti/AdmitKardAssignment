import {Component} from 'react'

class Success extends Component {
  render() {
    return (
      <div className="cont">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/31/12/00/question-1015308_640.jpg"
          alt="logo"
        />
        <h1 className="heading">Welcome to AdmitKard</h1>
        <p className="para">
          In order to provide you with <br /> a custom experience,
          <br />
          we need to ask you a few questions.
        </p>
        <div className="button">
          <button type="button" className="si">
            Get Started
          </button>

          <p className="para">*This will only take 5 min.</p>
        </div>
      </div>
    )
  }
}
export default Success