import React from "react";

const pbkdf2 = require('pbkdf2')
const crypto = require('crypto');

const iterations = 2000;
const keyLength = 512;
const alg = 'sha512'

export function hashPassword(password) {
  let salt = crypto.randomBytes(64).toString('base64');

  //TODO probably wants async function here
  let hash = pbkdf2.pbkdf2Sync(password, salt, iterations, keyLength, alg)

  return {
    salt: salt,
    hash: hash.toString('base64'),
    iterations: iterations
  }

}


export function isPasswordCorrect(savedHash, savedSalt, savedIterations, passwordAttempt) {
  //TODO get saved values from db
  return savedHash === pbkdf2.pbkdf2Sync(passwordAttempt, savedSalt, savedIterations, keyLength, alg).toString('base64')
}
