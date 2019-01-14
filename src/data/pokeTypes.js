// types = Array.from($0.querySelectorAll('th a')).map(a => a.title.toLowerCase())
// effectiveness = {'2×': 'super', '1×': 'normal', '½×': 'notVery', '0×': 'not'}
// table = Array.from($0.querySelectorAll('tr')).slice(2, 19).map(row =>
//   Array.from(row.querySelectorAll('td')).map(td => effectiveness[td.innerText]))

const fs = require('fs')
const path = require('path')

const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark']
const table = [
  ['normal', 'normal', 'normal', 'normal', 'normal', 'notVery', 'normal', 'not', 'notVery', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal'],
  ['super', 'normal', 'notVery', 'notVery', 'normal', 'super', 'notVery', 'not', 'super', 'normal', 'normal', 'normal', 'normal', 'notVery', 'super', 'normal', 'super'],
  ['normal', 'super', 'normal', 'normal', 'normal', 'notVery', 'super', 'normal', 'notVery', 'normal', 'normal', 'super', 'notVery', 'normal', 'normal', 'normal', 'normal'],
  ['normal', 'normal', 'normal', 'notVery', 'notVery', 'notVery', 'normal', 'notVery', 'not', 'normal', 'normal', 'super', 'normal', 'normal', 'normal', 'normal', 'normal'],
  ['normal', 'normal', 'not', 'super', 'normal', 'super', 'notVery', 'normal', 'super', 'super', 'normal', 'notVery', 'super', 'normal', 'normal', 'normal', 'normal'],
  ['normal', 'notVery', 'super', 'normal', 'notVery', 'normal', 'super', 'normal', 'notVery', 'super', 'normal', 'normal', 'normal', 'normal', 'super', 'normal', 'normal'],
  ['normal', 'notVery', 'notVery', 'notVery', 'normal', 'normal', 'normal', 'notVery', 'notVery', 'notVery', 'normal', 'super', 'normal', 'super', 'normal', 'normal', 'super'],
  ['not', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'super', 'notVery', 'normal', 'normal', 'normal', 'normal', 'super', 'normal', 'normal', 'notVery'],
  ['normal', 'normal', 'normal', 'normal', 'normal', 'super', 'normal', 'normal', 'notVery', 'notVery', 'notVery', 'normal', 'notVery', 'normal', 'super', 'normal', 'normal'],
  ['normal', 'normal', 'normal', 'normal', 'normal', 'notVery', 'super', 'normal', 'super', 'notVery', 'notVery', 'super', 'normal', 'normal', 'super', 'notVery', 'normal'],
  ['normal', 'normal', 'normal', 'normal', 'super', 'super', 'normal', 'normal', 'normal', 'super', 'notVery', 'notVery', 'normal', 'normal', 'normal', 'notVery', 'normal'],
  ['normal', 'normal', 'notVery', 'notVery', 'super', 'super', 'notVery', 'normal', 'notVery', 'notVery', 'super', 'notVery', 'normal', 'normal', 'normal', 'notVery', 'normal'],
  ['normal', 'normal', 'super', 'normal', 'not', 'normal', 'normal', 'normal', 'normal', 'normal', 'super', 'notVery', 'notVery', 'normal', 'normal', 'notVery', 'normal'],
  ['normal', 'super', 'normal', 'super', 'normal', 'normal', 'normal', 'normal', 'notVery', 'normal', 'normal', 'normal', 'normal', 'notVery', 'normal', 'normal', 'not'],
  ['normal', 'normal', 'super', 'normal', 'super', 'normal', 'normal', 'normal', 'notVery', 'notVery', 'notVery', 'super', 'normal', 'normal', 'notVery', 'super', 'normal'],
  ['normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'notVery', 'normal', 'normal', 'normal', 'normal', 'normal', 'normal', 'super', 'normal'],
  ['normal', 'notVery', 'normal', 'normal', 'normal', 'normal', 'normal', 'super', 'notVery', 'normal', 'normal', 'normal', 'normal', 'super', 'normal', 'normal', 'notVery']]

const out = fs.createWriteStream(path.resolve(__dirname, 'pokeTypes.yaml'))

types.forEach((defType, defIndex) => {
  out.write(`${defType}:\n`)
  const effectiveness = {
    superEffective: [],
    notVeryEffective: [],
    notEffective: []
  }

  table.forEach((atkType, atkIndex) => {
    const effStr = atkType[defIndex] + 'Effective'
    if (effectiveness[effStr]) {
      effectiveness[effStr].push(types[atkIndex])
    }
  })

  Object.entries(effectiveness).forEach(([effStr, atkTypes]) => {
    if (atkTypes.length > 0) {
      out.write(`  ${effStr.replace('Effective')}: [${atkTypes.join(', ')}]\n`)
    }
  })

  if (defIndex < types.length - 1) {
    out.write('\n')
  }
})
