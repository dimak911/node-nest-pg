import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, Length } from "class-validator";

export class CreateUserDto {
  @ApiProperty({ example: "user@mail.com", description: "Email" })
  @IsString({ message: "Must be a string" })
  @IsEmail({}, { message: "Ivalid email" })
  readonly email: string;

  @ApiProperty({ example: "12345678", description: "Password" })
  @IsString({ message: "Must be a string" })
  @Length(4, 16, { message: "Must be minimum 4 and maximum 16 chars long" })
  readonly password: string;
}
