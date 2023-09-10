import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

import { useAuth0 } from '@auth0/auth0-react'
import Tasks from './Tasks.tsx'

function Nav() {
  const { user, loginWithRedirect, logout } = useAuth0()

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <div className="centered-container">
        <IfAuthenticated>
          <button className="logBtn" onClick={handleSignOut}>
            Sign out
          </button>
          {user && <p>Signed in as: {user?.nickname}</p>}
          <Tasks />
        </IfAuthenticated>
        <IfNotAuthenticated>
          <button className="logBtn" onClick={handleSignIn}>
            Sign in
          </button>
        </IfNotAuthenticated>
      </div>
    </>
  )
}

export default Nav
