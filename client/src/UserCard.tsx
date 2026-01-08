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

const UserCard = ({ user }: { user: User }) => {
  return (
    <article className="card">
      <div className="card-header">
        <img src={user.picture} alt={user.name} className="avatar" />
        <div className="card-header-info">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
      <p>{user.phone}</p>
      <p>{user.role}</p>
      <p>{user.bio}</p>
      <p>{user.location}</p>
      <p>{user.joinDate}</p>
      <p className={user.status == 'active' ? 'active' : 'inactive'}>{user.status}</p>
    </article>
  )
}

export default UserCard
