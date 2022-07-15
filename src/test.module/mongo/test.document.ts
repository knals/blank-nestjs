import { Entity, Column, ObjectIdColumn, ObjectID } from 'typeorm';

@Entity()
export class TestCollection {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  filename: string;

  @Column()
  views: number;

  @Column()
  isPublished: boolean;
}
