import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css']
})
export class StatusListComponent implements OnInit {

  players:object[]=[];
  game:number;
  sub:Subscription;

  constructor(private _http:HttpService, private _route:ActivatedRoute) {
  	this.getPlayers();
  	this.sub = this._route.params.subscribe(params=>{
  		this.game = params.id;
  	})
  }

  ngOnInit() {
  }

  ngOnDestroy(){
  	this.sub.unsubscribe();
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

  update(id, newStatus){
  	this._http.updatePlayer(id, newStatus, this.game)
  	.then(res=>{
  		console.log('made it back')
  		this.getPlayers();
  		console.log('got players')
  	})
  	.catch(err=>{
  		console.log(err);
  	})
  }

}
