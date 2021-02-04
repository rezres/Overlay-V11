import { OverlayContainer } from '@angular/cdk/overlay';
import { Directive, Injectable, OnDestroy } from '@angular/core';

@Directive()
@Injectable()
export class MyOverlayService extends OverlayContainer implements OnDestroy {
  protected _createContainer(): void {
    super._createContainer();
    if (!this._containerElement) {
      return;
    }
    const parent = document.querySelector('.my-selector') || document.body;
    parent.appendChild(this._containerElement);
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this._containerElement = null;
  }
}
