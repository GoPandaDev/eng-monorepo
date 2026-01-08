import { useEffect, useState } from 'react'
import './App.css'
import UserCard from './UserCard'
import StatCard from './StatCard'

interface User {
  id: number
  name: string
  email: string
  picture: string
  role: string
  bio: string
  location: string
  phone: string
  joinDate: string
  status: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => setUsers(data))
  }, [])

  return (
    <main className="dashboard">
      <header className="dashboard-header">
        <h1>Team Directory</h1>
        <div className="stats">
          <StatCard title="Total Users" value={users.length} />
          <StatCard title="Active" value={users.filter(u => u.status === 'active').length} />
        </div>
      </header>

      <section className="grid">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </section>
    </main>
  )
}

export default App
