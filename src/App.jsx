import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

import { Theme as UWPThemeProvider, getTheme } from 'react-uwp/Theme'
import NavigationView from 'react-uwp/NavigationView'
import SplitViewCommand from 'react-uwp/SplitViewCommand'

import styles from './common/layout.module.styl'

export default class App extends Component {
  static contextTypes = { theme: PropTypes.object };

  render () {
    const theme = getTheme({
      themeName: 'dark',
      accent: '#0078d7',
      useFluentDesign: true,
      desktopBackgroundImage: 'https://www.react-uwp.com/HEAD/static/images/jennifer-bailey-10753.1DE91.jpg'
    })

    const navigationTopNodes = [
      <SplitViewCommand key="Home" label="Home" icon="Home" />,
      <SplitViewCommand key="Blog" label="Blog" icon="ReadingList" />,
      <SplitViewCommand key="Utilities" label="Utilities" icon="DeveloperTools" />
    ]

    const navigationBottomNodes = [
      <SplitViewCommand key="Console" label="Console" icon="CommandPrompt" />,
      <SplitViewCommand key="Profile" label="Profile" icon="Contact" />
    ]

    return (
      <UWPThemeProvider
        theme={theme}>
        <div className={styles.body}>
          {/* TODO: find out how to stop collapsing when clicking outside */}
          <NavigationView className={styles.sidenav}
            pageTitle="Marco's Frontier of Self-Struggling"
            displayMode="compact"
            background={theme.listLow}
            autoResize={false}
            initWidth={48}
            defaultExpanded={true}
            navigationTopNodes={navigationTopNodes}
            navigationBottomNodes={navigationBottomNodes}
            focusNavigationNodeIndex={0}></NavigationView>
          <div className={styles.content}>
            {new Array(5).fill(null).map((_v, idx) => (
              <div className={styles.article}
                key={idx}>
                <h2 className={styles.title}
                  style={theme.typographyStyles.title}>An article</h2>
                <hr className={styles.seperator} />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe inventore exercitationem molestias ipsa optio voluptas facilis nisi. Praesentium, quaerat quisquam fugit sunt velit, fugiat a doloribus repudiandae iste reprehenderit minus.</p>
                <p>At rem maiores quisquam incidunt ea consequuntur reprehenderit perferendis dolore quas sint blanditiis tempore, sunt assumenda deleniti dolorem aut culpa quae deserunt, eum vel nostrum neque natus iure qui? Vero.</p>
                <p>Et ullam aliquid, obcaecati porro molestiae magnam impedit enim voluptatibus voluptatum veniam accusamus repellendus reprehenderit ea soluta ex earum suscipit necessitatibus animi quibusdam amet. Eveniet officiis aperiam aliquam veniam dignissimos?</p>
                <p>Corrupti dolorem excepturi inventore quisquam, a, quod minima magni vel commodi itaque, animi ad odit eius porro aperiam sapiente? Enim ut eius quia natus ab tenetur maiores cupiditate minus itaque!</p>
                <p>Illum, unde labore doloribus obcaecati, ad asperiores earum, cumque ratione dolorum esse architecto numquam. Doloremque accusamus molestias fugiat. Blanditiis quisquam voluptatem ad rerum deleniti quod excepturi deserunt explicabo, sapiente molestiae.</p>
              </div>
            ))}
          </div>
        </div>
      </UWPThemeProvider>
    )
  }
}
