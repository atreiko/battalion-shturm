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
          delete: false
        }
      },
      exp: exp.getTime() / 1000
    },
    config.JWT_SECRET
  )
}

/**
 * @desc creates user
 */
export const createUser = async ({
  email,
  first_name,
  last_name,
  password: pswdIn,
}) => {
  const salt = randomBytes(32)
  const password = await argon2.hash(pswdIn, { salt })

  const user = await UserSchema.create({
    email,
    first_name,
    last_name,
    password,
    salt
  })

  return {
    user,
    token: generateToken(user)
  }
}