import Nav from './Nav.tsx'
import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'

function App() {
  return (
    <>
      <IfNotAuthenticated>
        <div className="app-container">
          <section className="main"></section>
          <br />
          <header className="header">
            <h1 className="main-title">My To Do List📝</h1>
            <h2>Sign in to view list..</h2>
          </header>
        </div>
        <br />
        <Nav />
      </IfNotAuthenticated>

      <IfAuthenticated>
        <div className="app-container">
          <section className="main"></section>
          <br />
          <header className="header">
            <h1 className="main-title">My To Do List📝</h1>
          </header>
        </div>
        <br />
        <Nav />
      </IfAuthenticated>
    </>
  )
}

export default App
