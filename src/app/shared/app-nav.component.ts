import {
  Component
} from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.scss']
})
export class AppNavComponent {

  public nav = [
    {
      titleKey: 'app_nav_home',
      path: '/'
    },
    {
      titleKey: 'app_nav_about',
      path: '/about'
    },
    {
      titleKey: 'app_nav_registration',
      path: '/registration'
    },
    {
      titleKey: 'app_nav_users',
      path: '/users'
    },
    {
      titleKey: 'app_nav_companies',
      path: '/companies'
    }
  ];
}
