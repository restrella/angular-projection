import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-projection';

  // name = 'Django';
  // age = 25;
  $implicit = 'N/A';
}
