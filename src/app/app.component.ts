import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonLikeComponent } from './boton-like/boton-like.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BotonLikeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'boton-like';
}
