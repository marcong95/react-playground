import React, { Component } from 'react'
import styles from './PokeTypes.module.styl'

import pokeTypes from '../data/pokeTypes.yaml'
import pokeTypeColors from '../data/pokeTypeColors.yaml'

const types = Object.keys(pokeTypes)

const effect = (atkType, defType) => {
  return Object.entries({
    super: '✓',
    notVery: '✗',
    not: '—'
  }).reduce((acc, [eff, text]) => {
    if ((pokeTypes[atkType][eff] || []).includes(defType)) {
      return text
    } else {
      return acc
    }
  }, undefined)
}

const formatTypeName = type => type.replace(/(ing|ic)$/, '');

const HighlightContext = React.createContext({
  atk: 'fighting',
  def: 'dragon',
  setHighlight: () => {}
})

const AtkTypeName = ({type: atk}) => (<td className={styles.atkType}
    style={{ color: pokeTypeColors[atk] }}
    >{formatTypeName(atk)}</td>)

const DefTypeName = ({type: def}) => (<th className={styles.defType}
  style={{ color: pokeTypeColors[def] }}
  >{formatTypeName(def)}</th>)

class EffectDisplay extends Component {
  render = () => {
    const {atk, def} = this.props
    return (<td className={styles.effect}
      onMouseEnter={this.handleHover}>{effect(atk, def)}</td>)
  }

  handleHover = event => {}
}

const AtkType = ({type: atk}) => (<tr key={atk}>
  <AtkTypeName type={atk}></AtkTypeName>
  {types.map(def => (<EffectDisplay key={def}
    {...{atk, def}}></EffectDisplay>))}
</tr>)

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
