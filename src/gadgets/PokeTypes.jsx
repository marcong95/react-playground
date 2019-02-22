import React, { Component } from 'react'
import classnames from 'classnames'
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
  atk: undefined,
  def: undefined,
  setHighlight: () => {}
})

const getTypeName = side =>
  ({type}) => (
    <HighlightContext.Consumer>
      {highlight => (
        <th className={classnames(styles[`${side}Type`],
          { [styles.highlighted]: type === highlight[side] })}
          style={{ color: pokeTypeColors[type] }}
          >{formatTypeName(type)}</th>
      )}
    </HighlightContext.Consumer>
  )

class EffectDisplay extends Component {
  render = () => {
    const {atk, def} = this.props
    return (
      <HighlightContext.Consumer>
        {({atk: hlAtk, def: hlDef, setHighlight}) => (
          <td className={classnames(styles.effect, {
            [styles.highlighted]: atk === hlAtk || def === hlDef })}
            onMouseEnter={event => this.handleHover(setHighlight, event)}
            >{effect(atk, def)}</td>
        )}
      </HighlightContext.Consumer>
    )
  }

  handleHover = (setHighlight, event) => {
    setHighlight(this.props.atk, this.props.def)
  }
}

const AtkTypeName = getTypeName('atk');
const DefTypeName = getTypeName('def');
const AtkType = ({type: atk}) => (<tr>
  <AtkTypeName type={atk}></AtkTypeName>
  {types.map(def => (<EffectDisplay key={def}
    {...{atk, def}}></EffectDisplay>))}
</tr>)

export default class PokeTypes extends Component {
  static contextType = HighlightContext

  state = {
    highlight: {
      atk: undefined,
      def: undefined,
      setHighlight: (atk, def) => {
        this.setState({
          highlight: { ...this.state.highlight, atk, def }
        })
      }
    }
  }

  render = () => (
    <div onMouseLeave={this.downplay}>
      <HighlightContext.Provider value={this.state.highlight}>
        <table className={styles.pokeTypeTable}>
          <tbody>
            <tr>
              <th></th>
              {types.map(t => (<DefTypeName key={t}
                type={t}></DefTypeName>))}
            </tr>
            {types.map(t => (<AtkType key={t}
              type={t}></AtkType>))}
          </tbody>
        </table>
      </HighlightContext.Provider>
    </div>
  )

  downplay = () => {
    this.state.highlight.setHighlight(undefined, undefined)
  }
}
