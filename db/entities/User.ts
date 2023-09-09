import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, OneToOne, JoinTable } from 'typeorm';
import { Profile } from '../entities/Profile';
import { Role } from '../entities/Role';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid') // Use 'uuid' for the id property
  id: string; // Change the type to string

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @ManyToMany(() => Role, role => role.users)
  @JoinTable()
  roles: Role[];

  @OneToOne(() => Profile, profile => profile.user)
  profile: Profile;
  static roles: any;
}
