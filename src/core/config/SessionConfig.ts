import * as session from "express-session";

export const SessionConfig = session({
  name: 'NESTJS_SESSION_ID_AHSAN',
  secret: 'secret',
  resave: false ,
  saveUninitialized: true, // Only if user logged in 
  cookie: {
    maxAge: 60000 // 1 Minute = 60000
  }
})