import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

import styles from './BlogSummary.module.styl'

export default class BlogSummary extends Component {
  render () {
    const { theme } = this.context

    return (
      <div className={styles.article}>
        <h2 className={styles.title}
          style={theme.typographyStyles.title}>An article</h2>
        <hr className={styles.seperator} />
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe inventore exercitationem molestias ipsa optio voluptas facilis nisi. Praesentium, quaerat quisquam fugit sunt velit, fugiat a doloribus repudiandae iste reprehenderit minus.</p>
        <p>At rem maiores quisquam incidunt ea consequuntur reprehenderit perferendis dolore quas sint blanditiis tempore, sunt assumenda deleniti dolorem aut culpa quae deserunt, eum vel nostrum neque natus iure qui? Vero.</p>
        <p>Et ullam aliquid, obcaecati porro molestiae magnam impedit enim voluptatibus voluptatum veniam accusamus repellendus reprehenderit ea soluta ex earum suscipit necessitatibus animi quibusdam amet. Eveniet officiis aperiam aliquam veniam dignissimos?</p>
        <p>Corrupti dolorem excepturi inventore quisquam, a, quod minima magni vel commodi itaque, animi ad odit eius porro aperiam sapiente? Enim ut eius quia natus ab tenetur maiores cupiditate minus itaque!</p>
        <p>Illum, unde labore doloribus obcaecati, ad asperiores earum, cumque ratione dolorum esse architecto numquam. Doloremque accusamus molestias fugiat. Blanditiis quisquam voluptatem ad rerum deleniti quod excepturi deserunt explicabo, sapiente molestiae.</p>
      </div>
    )
  }
}
