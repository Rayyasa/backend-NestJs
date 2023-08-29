import { Controller, Delete, Get, Param, Post, Put, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { UserService} from './user.service';
import { createUserDto, updateUserDto } from './user.dto';
@Controller('user')
export class UserController {
  constructor (private userService: UserService) {}


  @Get('/list')
  findUsers() {
    return this.userService.getUsers();
  }

  @Post('/create')
  @UsePipes(ValidationPipe)
  createUsers(@Body() payload:createUserDto) {
    return this.userService.createUsers(payload)
  }


  @Get('detail/:id')
  findOneUsers(@Param('id') id:string) {
    return this.userService.getDetail(+id);
  }

  @Put('update/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto:updateUserDto) {
    return this.userService.updateUser(Number(id), updateUserDto);
  }

  @Delete('delete/:id')
  deleteUser(@Param('id') id:string) {
    return this.userService.deleteUsers(+id);
  }


}
