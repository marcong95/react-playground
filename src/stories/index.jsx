import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

import '../common/index.styl'
import styles from './stories.module.styl'
import pokeTypes from '../data/pokeTypes.yaml'

storiesOf('Basic demo', module)
  .add('Button with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('Button with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))
  .add('Modular stylus', () => (
    <p className={styles.colorfulText}>Lorem ipsum dolar sit amet.</p>
  ))
  .add('YAML Loader', () => (
    <p>{JSON.stringify(pokeTypes)}</p>
  ))
