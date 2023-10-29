import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class RegisterDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;

  @MinLength(1)
  @IsNotEmpty()
  firstName: string;

  @MinLength(0)
  middleName: string;

  @MinLength(1)
  @IsNotEmpty()
  lastName: string;
}
