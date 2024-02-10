import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

@Controller('users') // Decorator to handle the user routes
export class UsersController {
    /*
    creating routes    (order maters, )
    GET /users |  GET /users/:id | POST /users | PATCH /users/:id | DELETE /users/:id
                       
    */
    @Get() // GET /users (query parameter) - or /users?role=value)
    findAll(@Query('role') role?: 'INTERNS' | 'ENGINEER' | 'ADMIN') {
        return[]         
    }

    @Get('interns') //GET /users/interns
    findAllInterns(){
        return[]
    }

    @Get(':id') //GET /users/:id
    findOne(@Param('id') id: string){
        return { id }
    }
    
    @Post() //POST /users
    create(@Body() user: {}){
        return user
    }
 
    @Patch(':id') //Patch /users/:id
    update(@Param('id') id: string, @Body() userUpdate){
        return { id, ...userUpdate }
    }
    
    @Delete(':id') //DELET /users/:id
    delete(@Param('id') id: string){
        return { id }
    }
   
}
