# KLP flow

## User
```javascript
export interface User{
  id: number
  name: string
  gender: string
  email: string
  password: string
  image: string
  status: STATUS (PENDING, ACTIVE, BLOCK)
  role: ROLE (ADMIN, LAWYER, LAWYER_CLIENT, LAWYER_MEMBER, APPOINTMENT_CLIENT)
}

```
### Sign Up / Sign In (Users)
* * ADMIN, LAWYER, LAWYER_MEMBER

### Non [Sign Up / Sign In (Users)]
* * LAWYER_CLIENT, APPOINTMENT_CLIENT

