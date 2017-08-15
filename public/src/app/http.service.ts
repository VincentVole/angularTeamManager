import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class HttpService {

  constructor(private _http:Http) { }

  addPlayer(player){
  	return this._http.post('/api/players/add', player)
  	.map(res=>res.json())
  	.toPromise();
  }

  getPlayers(){
  	console.log('trying to get players in service')
  	return this._http.get('/api/players/show')
  	.map(res=>res.json())
  	.toPromise();
  }

  deletePlayer(id){
  	console.log('in service');
  	console.log(id);
  	return this._http.post('/api/players/delete', {id:id})
  	.map(res=>res.json())
  	.toPromise();
  }

  updatePlayer(id, newStatus, game){
  	return this._http.post('/api/players/edit', {id:id, newStatus:newStatus, game:game})
  	.map(res=>res.json())
  	.toPromise();
  }
}
