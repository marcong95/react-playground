const fs = require('fs')
const path = require('path')

const types = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug', 'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic', 'ice', 'dragon', 'dark', 'fairy']

const colors = ['#e7e7d8', '#dd9988', '#99bbff', '#c689ba', '#f1dda0', '#e1d08c', '#daec44', '#9f9fec', '#dfdfe1', '#ff927d', '#77bbff', '#bdffa3', '#fae078', '#ff9cc4', '#dbf6ff', '#a194ff', '#bda396', '#fbcbfb']

const out = fs.createWriteStream(path.resolve(__dirname, 'pokeTypeColors.yaml'))

types.forEach((type, index) => {
  out.write(`${type}: "${colors[index]}"\n`)
})
