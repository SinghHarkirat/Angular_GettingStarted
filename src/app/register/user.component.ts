import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
ages:number[]=[];
index:number=-1;
user:any={};
users:any[]=[];
  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    let id=this.route.snapshot.paramMap.get("id");
    let userString=localStorage.getItem("userData");
    this.users=JSON.parse(userString!);
    console.log("users",this.users);

    if(this.users.length>0){
    for(var j=0;j<this.users!.length;j++){

      let currVal=this.users[j];

      this.user=this.users.filter((currVal,j)=> { 
       return currVal.ID==id
      });

     
    }
    debugger;
    this.index=this.users.indexOf(this.user[0]);
    console.log("found at index",this.index);
  }
    for(var i=18;i<=60;i++){
      this.ages.push(i);
    }
    
    
  }
  updateUser(){
      console.log("new user",this.user[0]);
      
      this.users[this.index]=this.user[0];
       console.log("new user array",this.users);
       localStorage.setItem("userData",JSON.stringify(this.users));
      this.router.navigate(['register']);
  }
  cancel(){
    this.router.navigate(['register']);
  }
}
