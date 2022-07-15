
export const HandleUniqueError = (err:any) => {
  const check = (check) => {
    return err.sqlMessage.indexOf(check) != -1 
  }
  const result = (message) => {message}
  if(check('book-title-unique')) return result('already a book exsit with this title')
}