import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ROUTES_PROJECT } from './routes/routes'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { Chatbot } from './components/Chatbot'

const App = () => {
  return (
    <Router>
      <div className='relative min-h-screen'>
        <Routes>
          <Route path={ROUTES_PROJECT.home} element={<Home />} />
          <Route path={ROUTES_PROJECT.login} element={<Login />} />
          <Route path={ROUTES_PROJECT.blog} element={<Blog/>} />
        </Routes>
        <Chatbot />
      </div>
    </Router>
  )
}

export default App