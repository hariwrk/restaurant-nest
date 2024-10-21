import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { promises } from 'dns';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository:Repository<User>,
  )
  {}

  async create(
    createUserDto:CreateUserDto,):Promise<User>
    {
      const userData=
      await this.userRepository.create(
        createUserDto,
      );
      return this.userRepository.save(userData);
    }

  findAll() {
    return `This action returns all items in menu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
