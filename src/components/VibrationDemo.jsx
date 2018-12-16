import React, { Component } from 'react'

export default class VibrationDemo extends Component {
  constructor () {
    super()

    this.state = {
      pattern: [1000, 1000],
      vibrationTimer: undefined,
      apiSupported: !!navigator.vibrate,
      success: false
    }
  }

  render () {
    return (
      <div
        className="vibration-demo">
        { !this.state.apiSupported && <p>Vibration API not supported!</p> }
        <label htmlFor="vibrate-pattern">
          <span>Vibration Pattern: </span>
          <input
            type="text"
            id="vibrate-pattern"
            name="pattern"
            placeholder="splited by space or comma"
            defaultValue={this.state.pattern.join(',')}
            onChange={this.handleInput}/>
        </label>
        <button
          onClick={this.vibrate}>Go!</button>
        <button
          onClick={this.toggleVibration}>{this.state.vibrationTimer ? 'On' : 'Off'}</button>
      </div>
    )
  }

  handleInput = (e) => {
    const pattern = e.target.value.split(/[ ,]+/).map(t => parseInt(t))
    this.setState({
      pattern
    })
  }

  vibrate = () => {
    if (!this.state.apiSupported) {
      return
    }

    let success = false
    success = navigator.vibrate(this.state.pattern)
    this.setState({ success })
  }

  toggleVibration = () => {
    if (!this.state.apiSupported) {
      return
    }

    if (this.state.vibrationTimer) {
      clearInterval(this.state.vibrationTimer)
      this.setState({
        vibrationTimer: undefined
      })
    } else {
      const duration = this.state.pattern.reduce((time, acc) => acc + time, 0)
      this.setState({
        vibrationTimer: setInterval(this.vibrate, duration)
      })
    }
  }
}
