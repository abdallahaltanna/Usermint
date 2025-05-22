import { create } from 'zustand'
import type { User, RandomUser } from './types/user'

interface UserStore {
  users: User[]
  setUsers: (users: User[]) => void
  addRandomUser: (user: RandomUser) => void
  addUser: (user: User) => void
}

const useUsers = create<UserStore>((set) => ({
  users: [],
  setUsers: (users) => set({ users }),
  addRandomUser: (user) =>
    set((state) => ({
      users: [
        {
          username: user.username,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email
        },
        ...state.users
      ]
    })),
  addUser: (user) =>
    set((state) => ({
      users: [
        {
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        },
        ...state.users
      ]
    }))
}))

export default useUsers
