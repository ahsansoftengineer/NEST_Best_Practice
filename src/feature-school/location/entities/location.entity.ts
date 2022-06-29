import {
  Entity,
  Tree,
  Column,
  PrimaryGeneratedColumn,
  TreeChildren,
  TreeParent,
  TreeLevelColumn,
} from "typeorm"

@Entity()
@Tree("nested-set")
// @Tree("materialized-path") Materialized Path (also called Path Enumeration) is another pattern of storing tree structures in the database. Its simple and effective. Example:
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @TreeChildren()
  children: Category[]

  @TreeParent()
  parent: Category
  
  @TreeLevelColumn()
  level: number
}

// https://typeorm.io/tree-entities

// const a1 = new Category()
// a1.name = "a1"
// await dataSource.manager.save(a1)

// const a11 = new Category()
// a11.name = "a11"
// a11.parent = a1
// await dataSource.manager.save(a11)

// const a12 = new Category()
// a12.name = "a12"
// a12.parent = a1
// await dataSource.manager.save(a12)

// const a111 = new Category()
// a111.name = "a111"
// a111.parent = a11
// await dataSource.manager.save(a111)

// const a112 = new Category()
// a112.name = "a112"
// a112.parent = a11
// await dataSource.manager.save(a112)

// const trees = await dataSource.manager.getTreeRepository(Category).findTrees()

// const treeCategories = await dataSource.manager.getTreeRepository(Category).findTrees()
// // returns root categories with sub categories inside

// const treeCategoriesWithLimitedDepth = await dataSource.manager.getTreeRepository(Category).findTrees({ depth: 2 })
// // returns root categories with sub categories inside, up to depth 2

// const rootCategories = await dataSource.manager.getTreeRepository(Category).findRoots()
// // returns root categories without sub categories inside

// const children = await dataSource.manager.getTreeRepository(Category).findDescendants(parentCategory)
// // returns all direct subcategories (without its nested categories) of a parentCategory