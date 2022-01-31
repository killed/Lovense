# Lovense Wiki

This will have everything to-do with the mobile api's encryption

[Discord](https://discord.gg/cK3UN4exSM)

## Login

POST `https://apps2.lovense.com/api/wear/genGtoken`

- Headers
  - Content-Type: application/x-www-form-urlencoded; charset=utf-8
  - Ver: 5.2.7

- Form Data
  - password: [createSignature("username", "password")[0]](https://github.com/killed/Lovense-Wiki/blob/main/loginSignature.js)
  - ver: 5.2.7
  - signature: [createSignature("username", "password")[1]](https://github.com/killed/Lovense-Wiki/blob/main/loginSignature.js)
  - pf: remote-android
  - tag: login
  - email: username/email

## Register

POST `https://apps2.lovense.com/ajaxSignup`

- Headers
  - Content-Type: application/x-www-form-urlencoded; charset=utf-8
  - Ver: 5.2.7

- Form Data
  - password: [encryptPassword("password")](https://github.com/killed/Lovense-Wiki/blob/main/registerSignature.js)
  - ver: 5.2.7
  - isNewApp: 1
  - gender: App sends as an empty string but you could figure it out
  - nickName: username
  - timezone: App sends as an empty string but you could figure it out
  - language: en
  - passwordRepeat: [encryptPassword("password")](https://github.com/killed/Lovense-Wiki/blob/main/registerSignature.js)
  - email: example@example.com
