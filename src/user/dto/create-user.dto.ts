import{
    IsEmail,
    IsNotEmpty,
    IsNumber,
    IsString,

}from 'class-validator';


export class CreateUserDto {
@IsNotEmpty()
@IsString()
nonveg:string;

@IsNotEmpty()
@IsString()
veg:string;

@IsNotEmpty()
@IsNumber()
vegprice:Number;


@IsNotEmpty()
@IsNumber()
vegnonveg:Number;




}
