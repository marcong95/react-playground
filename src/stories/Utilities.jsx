import React from 'react'
import { storiesOf } from '@storybook/react'

import HtmlEntities from '../gadgets/HtmlEntities'
import ListNotation from '../gadgets/ListNotation'

storiesOf('Utilities', module)
  .add('HtmlEntities', () => (
    <HtmlEntities></HtmlEntities>
  ))
  .add('ListNotation', () => (
    <ListNotation></ListNotation>
  ))
