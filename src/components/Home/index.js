import {Component} from 'react'

import Verify from '../Verify'
import './index.css'

class Home extends Component {
  state = {
    userInput: '+',
    showOtp: false,
  }

  onChangeUserInput = e => {
    const {userInput} = this.state

    if (userInput === '') {
      this.setState({showOtp: false})
    }
    this.setState({userInput: e.target.value})
  }

  showOtp = event => {
    event.preventDefault()
    this.setState(prev => ({showOtp: !prev.showOtp}))
  }

  render() {
    const {userInput, showOtp} = this.state
    return (
      <div className="container">
        <div className="">
          <img
            src="https://static.startuptalky.com/2021/08/Admitkard-success-story---StartupTalky.jpg"
            alt="logo"
            className="logo"
          />
        </div>
        <form>
          <h4 className="heading ">Welcome Back</h4>
          <p className="para">Please sign in to your account</p>
          <div className="phone-no d-flex flex-column">
            <label htmlFor="input">Enter Contact Number</label>
            <input
              id="input"
              type="text"
              className="input"
              value={userInput}
              onChange={this.onChangeUserInput}
            />
          </div>
          <p className="para1">
            We Will send you a one time SMS message.
            <br />
            Charges may apply.
          </p>
          <div className="button">
            <button className="si" type="button" onClick={this.showOtp}>
              Sign In with OTP
            </button>
            {showOtp ? <Verify /> : ''}
          </div>
        </form>
      </div>
    )
  }
}
export default Home
