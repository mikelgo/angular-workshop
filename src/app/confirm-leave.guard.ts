import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ConfirmLeaveGuard implements CanDeactivate<unknown> {
  private hasLeftBefore = false;

  canDeactivate(): boolean {
    if (this.hasLeftBefore) {
      return true;
    }

    const wantsToLeave = confirm('Do you really want to leave?');

    if (wantsToLeave) {
      this.hasLeftBefore = true;
    }

    return wantsToLeave;
  }
}
