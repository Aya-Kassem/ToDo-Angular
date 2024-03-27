import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';


export const authGuard: CanActivateFn = (route, state) => {
  const _AuthService = inject(AuthService);
  const router: Router = inject(Router);
  
  return _AuthService.user.value.activeUser || router.navigate(['/auth']);
} 
