import { CanActivateFn, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('STO GUARDIANDO');
  const storageServ = inject(LocalStorageService);
  const routerServ = inject(Router);
  const isUserLogged = storageServ.checkLogin();

  if (isUserLogged) {
    return true;
  } else {
    routerServ.navigateByUrl('/login')
    return false;
  }

};
