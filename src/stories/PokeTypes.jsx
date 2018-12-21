import React from 'react'
import { storiesOf } from '@storybook/react'

import PokeTypes from '../gadgets/PokeTypes'

storiesOf('PokeTypes', module)
  .add('PokeTypes itself', () => (
    <PokeTypes></PokeTypes>
  ))
