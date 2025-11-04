interface User {
    id: number,
    name: string,
    email: string,
    picture: string,
    role: string,
    bio: string,
    location: string,
    phone: string,
    joinDate: string,
    status: string
}

const mockUserData: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        picture: 'https://picsum.photos/seed/user1/200',
        role: 'admin',
        bio: 'Full-stack developer with a passion for building scalable applications',
        location: 'San Francisco, CA',
        phone: '+1-555-0101',
        joinDate: '2023-01-15',
        status: 'active'
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        email: 'sarah.johnson@example.com',
        picture: 'https://picsum.photos/seed/user2/200',
        role: 'user',
        bio: 'UX designer focused on creating delightful user experiences',
        location: 'New York, NY',
        phone: '+1-555-0102',
        joinDate: '2023-03-22',
        status: 'active'
    },
]

export default mockUserData;