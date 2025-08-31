import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ROUTES_PROJECT } from './routes/routes'
import { Login } from './pages/Login'
import { Blog } from './pages/Blog'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES_PROJECT.home} element={<>HOLA</>} />
        <Route path={ROUTES_PROJECT.login} element={<Login />} />
        <Route path={ROUTES_PROJECT.blog} element={<Blog/>} />
      </Routes>
    </Router>
  )
}

export default App