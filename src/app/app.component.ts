import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { FooterBarComponent } from './footer-bar/footer-bar.component';
import { FormBaseComponent } from './form/form-base/form-base.component';
import { FormHeaderComponent } from './form/form-header/form-header.component';
import { FormContentComponent } from './form/form-content/form-content.component';
import { FormFooterComponent } from './form/form-footer/form-footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderBarComponent,
    FooterBarComponent,
    FormBaseComponent,
    FormHeaderComponent,
    FormContentComponent,
    FormFooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
