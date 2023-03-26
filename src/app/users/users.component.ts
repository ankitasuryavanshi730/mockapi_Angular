import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MockApiService } from '../mock-api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  formdata:any;

  id:any;

  posting = false;



constructor(private api:MockApiService , private rout:Router ,private router:ActivatedRoute){

}



  ngOnInit(): void {

    this.formdata = new FormGroup({

      name:new FormControl("",Validators.required),
      email:new FormControl("",Validators.compose([Validators.required ,Validators.email])),
      mobno:new FormControl("")

    });

    this.id = this.router.snapshot.params['id'];

    // console.log(this.id);

    if(this.id !=undefined){
      this.api.get("https://63ca103ac3e2021b2d6222db.mockapi.io/api/v1/users/" + this.id).subscribe((result:any)=>{
        // console.log(result);

        this.formdata = new FormGroup({

          name:new FormControl(result.name,Validators.required),
          email:new FormControl(result.email,Validators.compose([Validators.required ,Validators.email])),
          mobno:new FormControl(result.mobno)

        });

      })
    }




  }

  submit(data:any){
    // console.log(data);

    this.posting = true;

    if(this.id == undefined){
      this.api.post("https://63ca103ac3e2021b2d6222db.mockapi.io/api/v1/users" ,data).subscribe((result)=>{

      this.rout.navigate([''])

      })

    }
    else{
      this.api.put("https://63ca103ac3e2021b2d6222db.mockapi.io/api/v1/users/" +  this.id ,data).subscribe((result)=>{
        this.rout.navigate([''])
      })
    }





  }







}
