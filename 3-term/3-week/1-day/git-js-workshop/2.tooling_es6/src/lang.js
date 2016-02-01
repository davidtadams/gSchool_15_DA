// Module imports!
import franc from 'franc'

// Block scope! Constants = const, variables = let
const whitelist = ['spa', 'por', 'fra', 'eng', 'rus', 'swe', 'afr', 'fin', 'dan', 'deu', 'nld']

// Module exports!
export default function() {
  const results = franc.all('Kaapstad is die beste stad', {'whitelist': whitelist})

  document.getElementById('results').innerHTML = ''

  // Iterators!
  for (const result of results) {                   // Interpolation!
    document.getElementById('results').innerHTML += `<div>${result[0]} ${result[1]}</div>`
  }
}