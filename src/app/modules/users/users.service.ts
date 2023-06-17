import config from '../../../config'
import { User } from './user.model'
import { IUser } from './users.interface'
import { generateUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto gererated incremental id
  const id = await generateUserId()

  user.id = id

  // default password

  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  const createdUser = await User.create(user)

  if (!createUser) {
    throw new Error('Faild to create user !')
  }
  return createdUser
}

export default {
  createUser,
}
