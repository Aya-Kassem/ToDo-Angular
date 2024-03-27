import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';
import { inject } from '@angular/core';

export const homeGuard: CanActivateFn = (route, state) => {
  const _AuthService = inject(AuthService);
  const router: Router = inject(Router);
 
  return !_AuthService.user.value.activeUser ? true : router.navigate(['tasks']) 

};
