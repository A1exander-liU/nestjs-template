import { BadRequestException, Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { genSaltSync, hashSync } from "bcrypt";
import { PrismaService } from "src/prisma/prisma.service";
import { RegisterDto } from "./dtos/register.dto";

@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  async findUser(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email: email },
    });
    return user;
  }

  async createUser(registerDto: RegisterDto) {
    const salt = genSaltSync(parseInt(this.configService.get("SALT_ROUNDS")));
    const hash = hashSync(registerDto.password, salt);
    try {
      const newUser = await this.prismaService.user.create({
        data: {
          email: registerDto.email,
          hash: hash,
          firstName: registerDto.firstName,
          middleName: registerDto.middleName,
          lastName: registerDto.lastName,
        },
      });
      return {
        id: newUser.id,
        email: newUser.email,
        firstName: newUser.firstName,
        middleName: newUser.middleName,
        lastName: newUser.lastName,
      };
    } catch (err) {
      throw new BadRequestException("User already exists");
    }
  }
}
