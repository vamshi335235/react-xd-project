import './App.css'

import { Routes, Route } from 'react-router-dom'
import MobileLayout from './components/MobileLayout.jsx'
import Welcome from './pages/Welcome.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Account from './pages/Account.jsx'
import Comments from './pages/Comments.jsx'

function App() {
  return (
    <MobileLayout>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Account />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </MobileLayout>
  )
}

export default App
