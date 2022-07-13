import { ChildEntity, OneToMany, OneToOne } from 'typeorm';
import { Person } from 'feature-school/person/entities/person.entity';
import { Family } from 'feature-school/family/entities/family.entity';
import { FamilyMember } from 'feature-school/family-member/entities/family-member.entity';

@ChildEntity()
export class Parent extends Person {
  @OneToOne(() => Family, (a) => a.parent)
  headOfFamily: Family;

  @OneToMany(() => FamilyMember, (a) => a.parent)
  familyMember: FamilyMember;
}
