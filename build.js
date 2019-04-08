'use strict'

const { 
  ExecutedLint
} = require('@cuties/wall')
const {
  ExecutedScripts
} = require('@cuties/scripts')

new ExecutedLint(process, './src').after(
  new ExecutedScripts('node', 'js', './src', './index.js')
).call()
