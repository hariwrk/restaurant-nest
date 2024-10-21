//export class User {}


import
{
    Entity,
    PrimaryGeneratedColumn,
    Column,

}from 'typeorm';




@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    nonveg:string;

    @Column()
    nonvegprice:Number;


    @Column()
    veg:string;

    @Column()
    vegprice:Number;


}
