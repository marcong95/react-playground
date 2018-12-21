import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Button } from '@storybook/react/demo'

import styles from './stories.module.styl'
import pokeTypes from '../data/poke-types.yaml'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello Button</Button>
  ))
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ))

storiesOf('Stylus', module)
  .add('modular stylus', () => (
    <p className={styles.colorfulText}>Lorem ipsum dolar sit amet.</p>
  ))

storiesOf('YAML Loader', module)
  .add('load yaml', () => (
    <p>{JSON.stringify(pokeTypes)}</p>
  ))
