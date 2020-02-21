
'use strict'

const { AsyncObject } = require('@cuties/cutie')

class GitHubAuthRequestOptions extends AsyncObject {
  constructor (code, clientId, clientSecret) {
    super(code)
  }

  syncCall () {
    return (code, clientId, clientSecret) => {
      return {
        hostname: 'github.com',
        port: 443,
        path: `/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        }
      }
    }
  }
}

module.exports = GitHubAuthRequestOptions
