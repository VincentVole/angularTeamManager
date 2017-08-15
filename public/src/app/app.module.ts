import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { ManageStatusComponent } from './manage-status/manage-status.component';
import { PlayerListComponent } from './manage-players/player-list/player-list.component';
import { AddPlayerComponent } from './manage-players/add-player/add-player.component';
import { StatusListComponent } from './manage-status/status-list/status-list.component';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    ManagePlayersComponent,
    ManageStatusComponent,
    PlayerListComponent,
    AddPlayerComponent,
    StatusListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
