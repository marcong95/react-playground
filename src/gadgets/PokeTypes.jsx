import React, { Component } from 'react'
import styles from './PokeTypes.module.styl'

import pokeTypes from '../data/pokeTypes.yaml'
import pokeTypeColors from '../data/pokeTypeColors.yaml'

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

const formatTypeName = type => type.replace(/(ing|ic)$/, '');

export default class PokeTypes extends Component {
  render = () => (
    <div>
      <table>
        <tbody>
          <tr>
            <th></th>
            {types.map(defType =>
              <th className={styles.defType}
                style={{ color: pokeTypeColors[defType] }}
                key={defType}
                >{formatTypeName(defType)}</th>)}
          </tr>
          {types.map(atkType =>
            <tr key={atkType}>
              <td className={styles.atkType}
                style={{ color: pokeTypeColors[atkType] }}
                >{formatTypeName(atkType)}</td>
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
