import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService,private firestore: AngularFirestore) { }

  volver(){
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  altausuario(){
    this.firestore.cole
  }

  ngOnInit(): void {
  }

}
