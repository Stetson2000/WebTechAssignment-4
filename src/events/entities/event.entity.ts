import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    title: String
    @Column()
    description: String

}
