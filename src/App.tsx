import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/auth/Login'
import { useState } from 'react'

function App() {
  const [token, setToken] = useState<boolean>(false)
  return (
    <main className="bg-background min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Dashboard token={token} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
      </Routes>
    </main>
  )
}

export default App
