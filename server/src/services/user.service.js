import UserSchema from '../models/user.model'
import { randomBytes } from 'crypto'
import argon2 from 'argon2'
import jwt from 'jsonwebtoken'
import config from '../config'

/**
 * @desc Generate token
 */
function generateToken({id}) {
  const today = new Date()
  const exp = new Date(today)
  exp.setDate(today.getDate() + 60)

  return jwt.sign(
    {
      id,
      accessList: {
        soldiers: {
          create: true,
          update: true,
          delete: true
        }
      },
      exp: exp.getTime() / 1000
    },
    config.JWT_SECRET
  )
}

/**
 * @desc Creates user
 */
export const createUser = async ({
  login,
  password: pswdIn,
}) => {
  const salt = randomBytes(32)
  const password = await argon2.hash(pswdIn, { salt })

  const user = await UserSchema.create({
    login,
    password,
    salt
  })

  return {
    user,
    token: generateToken(user)
  }
}

/**
 * 
 * @desc Sign in 
 */
export const userSignIn = async({
  login, 
  password
}) => {
  const user = await UserSchema.findOne({ login })

  if (!user) {
    throw new Error('User not found.')
  }

  const verification = await argon2.verify(
    user.password,
    password,
    {
      salt: user.salt
    }
  )

  if (!verification) {
    throw new Error('Invalid password.')
  }

  return {
    user,
    token: generateToken(user)
  }
}