
import { SkyAppLocaleInfo, SkyAppLocaleProvider } from '@skyux/i18n';
import { Observable, of } from 'rxjs';

export class TestLocaleProvider extends SkyAppLocaleProvider {
  public getLocaleInfo(): Observable<SkyAppLocaleInfo> {
    return of({
      locale: navigator.language
    });
  }
}