import { EntitySchema } from "typeorm";

export interface Person{
  id: number,
  name: string,
  gender: 'male' | 'female'
  age: number
}
export const PersonEntity = new EntitySchema<Person>({
  name: 'person',
  columns: {
    id: {
      type: Number,
      primary: true,
      generated: true
    },
    name: {
      type: String,
    },
    gender: {
      type: 'enum',
      enum: {MALE: 'male', FEMALE: 'female'}
    },
    age: {
      type: Number
    }
  },
  checks: [
    {
      expression: `"age" > 18`
    },
    {
      expression: `"age" < 101`
    }
  ]

})