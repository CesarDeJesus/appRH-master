import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mensaje(){
    var enlace = document.getElementsByClassName('clasena');
    for (var i=0; i<enlace.length; i++){
        enlace[i].classList.toggle('desaparece');
        enlace[i].classList.toggle('grande');
    }
   
   }
  
   
    
 
  constructor() { }

  ngOnInit() {
  }

}
