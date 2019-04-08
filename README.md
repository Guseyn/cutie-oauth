# cutie-oauth

[![NPM Version](https://img.shields.io/npm/v/@cuties/oauth.svg)](https://npmjs.org/package/@cuties/oauth)
[![Build Status](https://travis-ci.org/Guseyn/cutie-oauth.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-oauth)
[![codecov](https://codecov.io/gh/Guseyn/cutie-oauth/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-oauth)

[Cutie](https://github.com/Guseyn/cutie) extension for authentication and authorization in different platforms and systems (Google, GitHub, etc). It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Install

`npm install @cuties/oauth`

## Run build

`npm run build`

## Async objects

**`GitHubUserData(payload, githubCode, clientId, clientSecret)`**

Gets data of GitHub user by `githubCode`, `clientId` and `clientSecret`.

Example of response:

```json
{ 
  "login": "Guseyn",
  "id": 7002896,
  "node_id": "MDQ6VXNlcjcwMDI4OTY=",
  "avatar_url": "https://avatars2.githubusercontent.com/u/7002896?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Guseyn",
  "html_url": "https://github.com/Guseyn",
  "followers_url": "https://api.github.com/users/Guseyn/followers",
  "following_url": "https://api.github.com/users/Guseyn/following{/other_user}",
  "gists_url": "https://api.github.com/users/Guseyn/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Guseyn/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Guseyn/subscriptions",
  "organizations_url": "https://api.github.com/users/Guseyn/orgs",
  "repos_url": "https://api.github.com/users/Guseyn/repos",
  "events_url": "https://api.github.com/users/Guseyn/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Guseyn/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Guseyn Ismayylov",
  "company": null,
  "blog": "https://guseyn.com",
  "location": null,
  "email": "guseynism@gmail.com",
  "hireable": true,
  "bio": "fan of yours. Author of Async Tree Pattern.",
  "public_repos": 76,
  "public_gists": 1,
  "followers": 10,
  "following": 20,
  "created_at": "2014-03-19T19:51:49Z",
  "updated_at": "2019-04-04T15:43:29Z",
  "private_gists": 0,
  "total_private_repos": 0,
  "owned_private_repos": 0,
  "disk_usage": 50711,
  "collaborators": 0,
  "two_factor_authentication": false,
  "plan":
   { "name": "free",
     "space": 976562499,
     "collaborators": 0,
     "private_repos": 10000 } }
```

**`GoogleUserData(googleToken)`**

Gets data of Google user by `googleToken`.

Example of response:

```json
{ 
  "iss": "accounts.google.com",
  "azp": "8310979471-lvmkisk1b33fjd25pjjqe8v8fa72rq2q.apps.googleusercontent.com",
  "aud": "8310979471-lvmkisk1b33fjd25pjjqe8v8fa72rq2q.apps.googleusercontent.com",
  "sub": "109435010500416342870",
  "email": "guseynism@gmail.com",
  "email_verified": "true",
  "at_hash": "Z6cLnVZC6aoXxBxP1J4SgQ",
  "name": "Guseyn Ismayylov",
  "picture": "https://lh6.googleusercontent.com/-2tLiBfrLMT4/AAAAAAAAAAI/AAAAAAAAAy0/5hcq1rASuoQ/s96-c/photo.jpg",
  "given_name": "Guseyn",
  "family_name": "Ismayylov",
  "locale": "en-GB",
  "iat": "1554712673",
  "exp": "1554716273",
  "jti": "166a2e9303346e3bab19b55f40d1c9c778934606",
  "alg": "RS256",
  "kid": "6f6781ba71199a658e760aa5aa93e5fc3dc752b5",
  "typ": "JWT"
}
```
