import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from './loginservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loginmodule',
  templateUrl: './loginmodule.component.html',
  styleUrls: ['./loginmodule.component.css']
})
export class LoginmoduleComponent implements OnInit {
  username: String = '';
  password: String = '';
  userType: String = '';
  constructor(private loginService: LoginserviceService, private router:Router) { }

  ngOnInit(): void {
  }

  Login(){
    let response = this.loginService.login({username:this.username,password:this.password,userType:this.userType}).subscribe(data =>{      
      // alert(data)
      if(data=="true"){
      this.goToHomePage()
      }
      else{
        alert("invalid login");
        location.reload();
      }      
    });
  }
  

  goToHomePage(){
    if(this.userType==='admin'){
      this.router.navigate(['/adminhome']);
    }
    else{
      this.router.navigate(['/fachome']);
    }
  }

}
