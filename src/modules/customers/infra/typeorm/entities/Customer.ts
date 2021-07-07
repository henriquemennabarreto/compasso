import City from '@modules/cities/infra/typeorm/entities/City';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('customers')
class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city_id: number;

  @Column()
  name: string;

  @Column()
  gender: string;

  @Column()
  age: string;

  @Column()
  birth: Date;

  @ManyToOne(() => City, city => city.customers)
  @JoinColumn([{ name: 'city_id' }])
  city: City;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @DeleteDateColumn()
  deleted_at: Date;
}

export default Customer;
