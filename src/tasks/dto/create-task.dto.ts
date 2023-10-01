import { IsNotEmpty } from "class-validator";

export class CreateTaskDto {
  @IsNotEmpty({ message: "Title cannot be empty" })
  title: string;

  @IsNotEmpty({ message: "Description cannot be empty" })
  description: string;
}
