import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  host: { class: 'ml3' }
})
export class AppComponent {
  companyName = 'Test';
}
