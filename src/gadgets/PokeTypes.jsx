import React, { Component } from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

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

const getTypeName = side => ({type}) => (
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
        {({atk: hlAtk, def: hlDef, setHighlight, pick}) => (
          <td className={classnames(styles.effect, {
            [styles.highlighted]: atk === hlAtk || def === hlDef })}
            onMouseEnter={e => this.handleHover(setHighlight, e)}
            onClick={e => this.handleClick(pick, e)}
            >{effect(atk, def)}</td>
        )}
      </HighlightContext.Consumer>
    )
  }

  handleHover = (setHighlight, e) => {
    setHighlight(this.props.atk, this.props.def)
  }

  handleClick = (pick, e) => {
    pick(this.props.def)
  }
}

const AtkTypeName = getTypeName('atk');
const DefTypeName = getTypeName('def');
const AtkType = ({type: atk, toTypes}) => (<tr>
  <AtkTypeName type={atk}></AtkTypeName>
  {toTypes.map(def => (<EffectDisplay key={def}
    {...{atk, def}}></EffectDisplay>))}
</tr>)

export default class PokeTypes extends Component {
  static contextType = HighlightContext
  static propTypes = {
    atkTypes: PropTypes.arrayOf(PropTypes.string),
    defTypes: PropTypes.arrayOf(PropTypes.string)
  }
  static defaultProps = {
    atkTypes: types,
    defTypes: types
  }

  state = {
    highlight: {
      atk: undefined,
      def: undefined,
      picked: [],
      setHighlight: (atk, def) => {
        this.setState(state => ({
          highlight: { ...state.highlight, atk, def }
        }))
      },
      pick: def => {
        this.setState(state => ({
          highlight: {
            ...state.highlight,
            picked: this.state.highlight.picked.concat(def).slice(-2)
          }
        }))
      }
    }
  }

  render = () => (
    <div onMouseLeave={this.downplay}>
      <HighlightContext.Provider value={this.state.highlight}>
        <table className={styles.pokeTypeTable}>
          <tbody>
            <tr>
              <th className={styles.slashedHeader}>
                <svg xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="100%"
                  height="100%"
                  viewBox="0 0 460 140"
                  preserveAspectRatio="none">
                  <line x1="0"
                    y1="0"
                    x2="460"
                    y2="140"
                    stroke="currentColor"
                    strokeWidth="5"/>
                </svg>
              </th>
              {this.props.defTypes.map(t => (<DefTypeName key={t}
                type={t}></DefTypeName>))}
            </tr>
            {this.props.atkTypes.map(t => (<AtkType key={t}
              toTypes={this.props.defTypes}
              type={t}></AtkType>))}
          </tbody>
        </table>
        <p>
          <span>Picked: {this.state.highlight.picked.length > 0
            ? this.state.highlight.picked.join(', ')
            : (<span className={styles.placeholder}>NOTHING PICKED</span>)}</span>
          <a href="javascript:;"
            className={styles.clearBtn}
            onClick={this.clearPicked}>CLEAR</a>
        </p>
      </HighlightContext.Provider>
    </div>
  )

  downplay = () => {
    this.state.highlight.setHighlight(undefined, undefined)
  }

  clearPicked = () => {
    this.setState(state => ({
      highlight: {
        ...state.highlight,
        picked: []
      }
    }))
  }
}
