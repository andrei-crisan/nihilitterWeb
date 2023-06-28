import { CanActivateFn } from '@angular/router';
import { AuthentificationService } from './services/authentification.service';
import { inject } from '@angular/core';

export const guardianGuard: CanActivateFn = (route, state) => {
  const currentService = inject(AuthentificationService);
  return currentService.isLoggedIn$;
};
