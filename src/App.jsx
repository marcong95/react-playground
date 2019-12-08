import React, { Component } from 'react'
import * as PropTypes from 'prop-types'

import { Theme as UWPThemeProvider, getTheme } from 'react-uwp/Theme'
import NavigationView from 'react-uwp/NavigationView'
import SplitViewCommand from 'react-uwp/SplitViewCommand'

import styles from './common/layout.module.styl'
import Home from './components/home/Home'

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
          <Home></Home>
        </div>
      </UWPThemeProvider>
    )
  }
}
