import { Component } from '@angular/core';


@Component({
  selector: 'app-boton-like',
  standalone: true,
  imports: [],
  templateUrl: './boton-like.component.html',
  styleUrl: './boton-like.component.css'
})
export class BotonLikeComponent {
  cuentaLike = 0;
  liked = false;
  clase = ''
  countLike = 0
  

  public like() {
    this.liked = !this.liked;
    if(this.liked){
      this.cuentaLike += 1;
      this.clase = "liked"
    }else{
      this.cuentaLike -= 1;
      this.clase = "not-liked"
    }
  }

  public sumar(){
    this.countLike++;
  }

}
