import bcrypt from 'bcryptjs'

const users = [
    {
        name : 'Admin User',
        email : 'admin@gmail.com',
        password : bcrypt.hashSync('123456',10),
        isAdmin : true
    },
    {
        name : 'Ori Bayo',
        email : 'ori@gmail.com',
        password : bcrypt.hashSync('123456',10),    
    },
    {
        name : 'Bar Cohen',
        email : 'bar@gmail.com',
        password : bcrypt.hashSync('123456',10), 
    },
]

export default users