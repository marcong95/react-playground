import React from 'react'
import { storiesOf } from '@storybook/react'
// import { withKnobs, optionsKnob } from '@storybook/addon-knobs';

import typeYaml from '../data/pokeTypes.yaml'
import PokeTypes from '../gadgets/PokeTypes'

const types = Object.keys(typeYaml)
const typesObj = {};
types.forEach(type => {
  typesObj[type] = type
})

storiesOf('PokeTypes', module)
  // .addDecorator(withKnobs)
  // .add('PokeTypes itself', () => {
  //   const atkTypes = optionsKnob('Atk Types', typesObj, types, {
  //     display: 'multi-select'
  //   })
  //   const defTypes = optionsKnob('Def Types', typesObj, types, {
  //     display: 'multi-select'
  //   })
  //   return <PokeTypes atkTypes={atkTypes}
  //     defTypes={defTypes}></PokeTypes>
  // })
  .add('PokeTypes itself', () => (<PokeTypes />))
