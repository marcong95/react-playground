import React, { Component } from 'react'

import styles from './Home.module.styl'
import BlogSummary from '../blog/BlogSummary'

export default class Home extends Component {
  render () {
    const { theme } = this.context

    return (
      <div className={styles.content}>
        {new Array(5).fill(null).map((_v, idx) => (
          <BlogSummary
            key={idx}></BlogSummary>
        ))}
      </div>
    )
  }
}
