import Tasks from './Tasks.tsx'
import Nav from './Nav.tsx'

function App() {
  return (
    <>
      <header className="header">
        <h1>My To Do List!</h1>
        <h2>Sign in to view the to do list</h2>
      </header>

      <Nav />

      <section className="main"></section>
      <footer className="footer"></footer>
    </>
  )
}

export default App
