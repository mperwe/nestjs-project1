import { Injectable } from '@nestjs/common';

@Injectable() // decorator attachs data to declare a class
export class UsersService {  // setting property
    private users = [
        {
            "id": 1,
            "name": "Frank",
            "email": "frankmperwe@gmail.com",
            "role": "ADMIN"
        
        },
        {
            "id": 2,
            "name": "mperwe",
            "email": "mperwe@gmail.com",
            "role": "INTERN"
        
        },
        {
            "id": 3,
            "name": "test",
            "email": "test@gmail.com",
            "role": "ENGINNER"
        
        },
        {
            "id": 4,
            "name": "test1",
            "email": "test1@gmail.com",
            "role": "ENGINEER"
        
        },
        {
            "id": 5,
            "name": "test2",
            "email": "test2@gmail.com",
            "role": "ADMIN"
        
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if (role) {
            return this.users.filter(user => user.role === role)
        }
        return this.users
    }

    findOne(id: number){
        const user = this.users.find(user => user.id === id)
        return user
    }

    create(user: { name : string, email: string, role: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
        const usersByHighestid = [...this.users].sort((a,b) => b.id = a.id)
        const newUser = {
            id: usersByHighestid[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser 
              
    }
    update(id: number, updatedUser: { name?: string, email?: string, role?: 'INTERN' | 'ENGINEER' | 'ADMIN' }) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser }
            }
            return user
        })
        return this.findOne(id)
        }
      
        delete(id: number) {
            const removedUser = this.findOne(id)
            this.users = this.users.filter(user => user.id !== id)

            return removedUser
        }
        
    }

