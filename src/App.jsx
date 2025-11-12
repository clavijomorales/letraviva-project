import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Chatbot } from './components/Chatbot'
import Header from './components/Header'
import { Blog } from './pages/Blog'
import { Home } from './pages/Home'
import { Libraries } from './pages/Libraries'
import { Login } from './pages/Login'
import { ROUTES_PROJECT } from './routes/routes'

const App = () => {
  return (
    <Router>
      <div className='relative min-h-screen'>
        <Header />
        <Routes>
          <Route path={ROUTES_PROJECT.home} element={<Home />} />
          <Route path={ROUTES_PROJECT.login} element={<Login />} />
          <Route path={ROUTES_PROJECT.blog} element={<Blog/>} />
          <Route path={ROUTES_PROJECT.libraries} element={<Libraries />}/>
        </Routes>
        <Chatbot />
      </div>
    </Router>
  )
}

export default App