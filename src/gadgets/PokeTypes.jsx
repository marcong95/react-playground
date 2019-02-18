import React, { Component } from 'react'
import styles from './PokeTypes.module.styl'

import pokeTypes from '../data/pokeTypes.yaml'
import pokeTypeColors from '../data/pokeTypeColors.yaml'

const types = Object.keys(pokeTypes)

const effect = (atkType, defType) => {
  return Object.entries({
    super: '+',
    notVery: '-',
    not: '0'
  }).reduce((acc, [eff, text]) => {
    if ((pokeTypes[atkType][eff] || []).includes(defType)) {
      return text
    } else {
      return acc
    }
  }, undefined)
}

const formatTypeName = type => type.replace(/(ing|ic)$/, '');

const AtkType = ({type: atk}) => (<tr key={atk}>
  <td className={styles.atkType}
    style={{ color: pokeTypeColors[atk] }}
    >{formatTypeName(atk)}</td>
  {types.map(def =>
    <td className={styles.effect}
      key={def}>{effect(atk, def)}</td>)}
</tr>)

const DefTypeName = ({type: def}) => (<th className={styles.defType}
  style={{ color: pokeTypeColors[def] }}
  >{formatTypeName(def)}</th>)

export default class PokeTypes extends Component {
  render = () => (
    <div>
      <table>
        <tbody>
          <tr>
            <th></th>
            {types.map(t => (<DefTypeName type={t}></DefTypeName>))}
          </tr>
          {types.map(t => (<AtkType type={t}></AtkType>))}
        </tbody>
      </table>
    </div>
  )
}
