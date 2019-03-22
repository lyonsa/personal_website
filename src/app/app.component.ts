import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <body>
    <!-- header -->
    <app-header></app-header>
    <div class="content">
    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>
    </div>
    <!-- footer -->
    <app-footer></app-footer>
    </body>
  `,
  styles: []
})
export class AppComponent {
  title = 'personal';

}
