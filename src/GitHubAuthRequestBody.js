
'use strict'

const { AsyncObject } = require('@cuties/cutie')

class GitHubAuthRequestBody extends AsyncObject {
  constructor (code, clientId, clientSecret) {
    super(code, clientId, clientSecret)
  }

  syncCall () {
    return (code, clientId, clientSecret) => {
      return {
        client_id: clientId,
        client_secret: clientSecret,
        code: code
      }
    }
  }
}

module.exports = GitHubAuthRequestBody
