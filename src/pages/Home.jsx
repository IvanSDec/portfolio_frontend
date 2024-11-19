import axios from "../config/axios" 
import { useEffect, useState } from 'react'

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/users')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error('Error fetching users:', error)
      })
  }, [])  

  return (

    <div className="w-full h-auto bg-blue-300">  
      <h1 className="">Hi!</h1> 
      <h1 className="">I'm Iván Sánchez</h1> 
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>

  )

}

