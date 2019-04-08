'use strict'

const { ParsedJSON } = require('@cuties/json')
const { StringFromBuffer } = require('@cuties/buffer')
const { ResponseFromHttpsGetRequest, ResponseBody } = require('@cuties/https')
const GoogleAuthRequestOptions = require('./GoogleAuthRequestOptions')

class GoogleUserData {
  constructor (googleToken) {
    return new ParsedJSON(
      new StringFromBuffer(
        new ResponseBody(
          new ResponseFromHttpsGetRequest(
            new GoogleAuthRequestOptions(
              googleToken
            )
          )
        )
      )
    )
  }
}

module.exports = GoogleUserData
