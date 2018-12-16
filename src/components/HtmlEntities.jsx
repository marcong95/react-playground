import React, { Component } from 'react'
import styles from '../styles/HtmlEntities.module.styl'

export default class HtmlEntities extends Component {
  constructor (props) {
    super(props)
    this.state = {
      html: '',
      text: ''
    }

    this.midTextarea = document.createElement('textarea')
  }

  render = () => (
    <div
      className="html-entities">
      <div
        className="text-input-wrap">
        <textarea
          id="html-input"
          className={styles.textarea}
          rows="10"
          value={this.state.html}
          onChange={this.htmlInput}></textarea>
      </div>
      <div
        className={styles.labelGroup}>
        <label htmlFor="html-input">HTML &uarr;</label>
        <label htmlFor="text-input">Text &darr;</label>
      </div>
      <div
        className="text-input-wrap">
        <textarea
          id="text-input"
          className={styles.textarea}
          rows="10"
          value={this.state.text}
          onChange={this.textInput}></textarea>
      </div>
    </div>
  )

  htmlInput = e => {
    const html = e.target.value
    this.midTextarea.innerHTML = html
    const text = this.midTextarea.innerText
    this.setState({
      html,
      text
    })
  }

  textInput = e => {
    const text = e.target.value
    this.midTextarea.innerText = text
    const html = this.midTextarea.innerHTML
    this.setState({
      html,
      text
    })
  }
}
