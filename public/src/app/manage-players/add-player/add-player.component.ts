import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  player:object={
  	name:'', 
  	position:'',
  	status:[0,0,0]
  };



  constructor(private _http:HttpService, private _router:Router) { }

  ngOnInit() {
  }

  addPlayer(){
  	this._http.addPlayer(this.player)
  	.then(res=>{
  		this._router.navigate(['/players/list']);
  	})
  	.catch(err=>{
  		console.log('add player component. addPlayer catch');
  		console.log(err);
  	});

  }
}
