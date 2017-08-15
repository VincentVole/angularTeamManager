import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  
  players:object[]=[];

  constructor(private _http:HttpService) {
  	this.getPlayers();
  }

  ngOnInit() {
  }

  getPlayers(){
  	this._http.getPlayers()
  	.then(players=>{
  		this.players = players;
  	})
  	.catch(err=>{
  		console.log(err);
  	});
  }

  deletePlayer(id){
  	console.log('clicked delete')
  	this._http.deletePlayer(id)
  	.then(res=>{
  		this.getPlayers();
  	})
  	.catch(err=>{
  		console.log(err);
  	})
  }
}
