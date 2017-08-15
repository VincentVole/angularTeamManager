import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';
import { AddPlayerComponent } from './manage-players/add-player/add-player.component';
import { StatusListComponent } from './manage-status/status-list/status-list.component';


const routes: Routes = [
  {
    path: 'players',
    component: ManagePlayersComponent,
    children: [
	    {
	    	path: 'list',
	    	component: PlayerListComponent
	    },
	    {
	    	path: 'add',
	    	component: AddPlayerComponent
	    }
    ]
  },
  {
  	path: 'status',
  	component: ManageStatusComponent,
  	children: [
	  	{
	  		path: ':id',
	  		component: StatusListComponent
	  	}
  	]
  },
  {
  	path: '',
  	pathMatch: 'full',
  	redirectTo: 'players/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
