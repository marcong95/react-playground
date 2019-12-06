import React, { Component } from 'react'
import styles from './HtmlEntities.module.styl'

const decode = (input, seperator = ';') => {
  const chars = input.split('')
  const list = []
  let itemChars = []
  let curr
  while ((curr = chars.shift()) !== undefined) {
    if (curr === seperator) {
      const next = chars[0]
      if (next === seperator) {
        itemChars.push(curr)
        chars.shift()
      } else {
        list.push(itemChars.join(''))
        itemChars = []
      }
    } else {
      itemChars.push(curr)
    }
    console.log(chars, list, itemChars, curr)
  }
  return list.concat(itemChars.join(''))
}

const encode = (input, seperator = ';') => {
  const replaceRegex = new RegExp(seperator, 'g')
  const replacement = new Array(2).fill(seperator).join('')
  return input.map(s => s.replace(replaceRegex, replacement)).join(';')
}

export default class HtmlEntities extends Component {
  constructor (props) {
    super(props)
    this.state = {
      encoded: '',
      decoded: ''
    }
  }

  render = () => (
    <div>
      <div>
        <textarea
          id="encoded-input"
          className={styles.textarea}
          rows="10"
          value={this.state.encoded}
          onChange={this.encodedInput}></textarea>
      </div>
      <div
        className={styles.labelGroup}>
        <label htmlFor="encoded-input">;SV &uarr;</label>
        <label htmlFor="decoded-input">\nSV &darr;</label>
      </div>
      <div>
        <textarea
          id="decoded-input"
          className={styles.textarea}
          rows="10"
          value={this.state.decoded}
          onChange={this.decodedInput}></textarea>
      </div>
    </div>
  )

  encodedInput = e => {
    const encoded = e.target.value
    const decoded = decode(encoded).join('\n')
    this.setState({
      encoded,
      decoded
    })
  }

  decodedInput = e => {
    const decoded = e.target.value
    const encoded = encode(decoded.split('\n'))
    this.setState({
      encoded,
      decoded
    })
  }
}
