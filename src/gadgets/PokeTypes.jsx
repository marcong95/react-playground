import React, { Component } from 'react'
import styles from './PokeTypes.module.styl'

import pokeTypes from '../data/pokeTypes.yaml'

const types = Object.keys(pokeTypes)

function effect(atkType, defType) {
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

export default class PokeTypes extends Component {
  render = () => (
    <div>
      <table>
        <tbody>
          <tr>
            <th></th>
            {types.map(defType =>
              <th className={styles.defType}
                key={defType}>{defType}</th>)}
          </tr>
          {types.map(atkType =>
            <tr>
              <td className={styles.atkType}>{atkType}</td>
              {types.map(defType =>
                <td className={styles.effect}
                  key={defType}>{effect(atkType, defType)}</td>)}
            </tr>)
          }
        </tbody>
      </table>
    </div>
  )
}
