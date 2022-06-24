import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable, of } from 'rxjs';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
  constructor(){
    super()
    console.log('in guard')
  }
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    console.log(context)
      return of(true)
  }

}