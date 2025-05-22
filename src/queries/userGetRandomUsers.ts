import { useMutation } from '@tanstack/react-query'
import Axios from '../axios/axiosInstance'
import { toast } from 'react-toastify'

export default function useGetRandomUser() {
  return useMutation({
    mutationFn: () => Axios.get('/api/v2/users').then((res) => res.data),
    onSuccess: (data) => {
      toast.success(`Generated user: ${data.username}`)
    },
    onError: () => {
      toast.error('Too Many Requests')
    }
  })
}
