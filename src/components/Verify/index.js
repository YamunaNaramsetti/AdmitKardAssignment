import {Component} from 'react'
import './index.css'

import Success from '../Success'

class Verify extends Component {
  state = {
    otp: '',
    verification: false,
  }

  handleChange = e => {
    this.setState({otp: e.target.value})
  }

  verification = () => {
    const {otp} = this.state
    if (otp.length === 4) {
      this.setState({verification: true})
    }
  }

  render() {
    const {otp, verification} = this.state

    return (
      <div className="verify-cont">
        <img
          src="https://play-lh.googleusercontent.com/3SvQTpiSOrZG27_ioZt7fdxigmlFutHe9JCU7b3p6oMrhF8NjWCWyjZIksF2ZDT4i0A"
          alt="logo"
        />
        <p className="para">Please verify Mobile number</p>
        <div className="cont">
          <p className="para">An OTP is sent to +917896781234</p>
        </div>
        <div className="phone-no">
          <input
            id="partitioned"
            onChange={this.handleChange}
            type="tel"
            value={otp}
            maxLength="4"
          />
        </div>

        <p className="para">Didnt receive the code Resend</p>
        <div className="button">
          <button className="si" type="button" onClick={this.verification}>
            Verify
          </button>
        </div>
        {verification ? <Success /> : ''}
      </div>
    )
  }
}

export default Verify