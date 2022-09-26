import { Outlet, Link } from "react-router-dom"

function App() {

  return (
    <>
      <Link to="notes"><div>Hello App</div></Link>
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default App
