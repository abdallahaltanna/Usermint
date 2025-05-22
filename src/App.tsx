import { useEffect, useState } from 'react'
import UsersTable from './components/UsersTable'
import {
  CircularProgress,
  Container,
  Typography,
  Button,
  Fade
} from '@mui/material'
import { Add, Speed } from '@mui/icons-material'
import useGetUsers from './queries/useGetUsers'
import BasicModal from './components/Modal'
import useGetRandomUser from './queries/userGetRandomUsers'
import useUsers from './store'

function App() {
  const [open, setOpen] = useState(false)

  const { users, setUsers, addRandomUser } = useUsers()

  const { isLoading, data: fetchedUsers } = useGetUsers()

  const {
    isPending,
    mutate: generateUser,
    data: randomUser
  } = useGetRandomUser()

  const handleOpen = () => setOpen(true)

  useEffect(() => {
    if (fetchedUsers) {
      setUsers(fetchedUsers)
    }
  }, [fetchedUsers, setUsers])

  useEffect(() => {
    if (randomUser) {
      addRandomUser(randomUser)
    }
  }, [randomUser, addRandomUser])

  return (
    <>
      <BasicModal open={open} setOpen={setOpen} />
      <Container>
        <div className="main-header">
          <Typography variant="h4">User Management</Typography>

          <div className="main-header-buttons">
            <Button
              variant="outlined"
              onClick={() => generateUser()}
              disabled={isPending}
            >
              <Speed style={{ marginInlineEnd: '5px' }} />
              Generate
            </Button>
            <Button variant="contained" onClick={handleOpen}>
              <Add style={{ marginInlineEnd: '5px' }} />
              Add User
            </Button>
          </div>
        </div>

        {isPending || isLoading ? (
          <Fade in={isPending || isLoading} unmountOnExit>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '2rem'
              }}
            >
              <CircularProgress />
            </div>
          </Fade>
        ) : (
          <UsersTable users={users} />
        )}
      </Container>
    </>
  )
}

export default App
