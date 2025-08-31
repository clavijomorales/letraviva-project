import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ROUTES_PROJECT } from './routes/routes'
import { Login } from './pages/Login'
import { Home } from './pages/Home'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES_PROJECT.home} element={<Home />} />
        <Route path={ROUTES_PROJECT.login} element={<Login />} />
        <Route path={ROUTES_PROJECT.blog} element={<>BLOG</>} />
      </Routes>
    </Router>
  )
}

export default App