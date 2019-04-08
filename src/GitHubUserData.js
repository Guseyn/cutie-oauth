'use strict'

const { StringifiedJSON, ParsedJSON } = require('@cuties/json')
const { StringFromBuffer } = require('@cuties/buffer')
const { ResponseFromHttpsGetRequest, ResponseFromHttpsRequest, ResponseBody } = require('@cuties/https')
const { Value } = require('@cuties/object')
const GitHubGetUserRequestOptions = require('./GitHubGetUserRequestOptions')
const GitHubAuthRequestOptions = require('./GitHubAuthRequestOptions')
const GitHubAuthRequestBody = require('./GitHubAuthRequestBody')

class GitHubUserData {
  constructor (githubCode, clientId, clientSecret) {
    return new ParsedJSON(
      new StringFromBuffer(
        new ResponseBody(
          new ResponseFromHttpsGetRequest(
            new GitHubGetUserRequestOptions(
              new Value(
                new ParsedJSON(
                  new StringFromBuffer(
                    new ResponseBody(
                      new ResponseFromHttpsRequest(
                        new GitHubAuthRequestOptions(
                          githubCode
                        ),
                        new StringifiedJSON(
                          new GitHubAuthRequestBody(
                            githubCode, clientId, clientSecret
                          )
                        )
                      )
                    )
                  )
                ),
                'access_token'
              )
            )
          )
        )
      )
    )
  }
}

module.exports = GitHubUserData
