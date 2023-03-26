import { Component, OnInit } from '@angular/core';
import { MockApiService } from '../mock-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

   user:any;

  constructor(private api:MockApiService){}


  ngOnInit(): void {

    this.load();

  }

  load(){

    this.api.get("https://63ca103ac3e2021b2d6222db.mockapi.io/api/v1/users").subscribe((result:any)=>{

    this.user = result;
    })
  }




  deleteuser(id:any){
    if(confirm("sure to delete"))
    this.api.delete("https://63ca103ac3e2021b2d6222db.mockapi.io/api/v1/users/" + id).subscribe((result:any)=>{

    this.load();




    })
  }





}
