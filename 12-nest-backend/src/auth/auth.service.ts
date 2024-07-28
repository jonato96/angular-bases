import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
import { Certificate } from 'crypto';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    // 1 Encriptar pass
    // 2 Guardar el user
    // 3 Generar el JWT
    try {
      const newUser = new this.userModel(createUserDto);
      return await newUser.save();
      
    } catch(error) {
      if( error.code === 11000) {
        throw new BadRequestException(`${createUserDto.email} already exists.`);
      }
      throw new InternalServerErrorException(`Something when wrong.`);      
    }

  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
