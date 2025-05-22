import { useQuery } from '@tanstack/react-query'
import type { User } from '../types/user'
import axios from 'axios'
import QUERY_KEYS from './keys'

export default function useGetUsers() {
  return useQuery<User[]>({
    queryKey: [QUERY_KEYS.users],
    queryFn: () => axios.get<User[]>('/users.json').then((res) => res.data)
  })
}
