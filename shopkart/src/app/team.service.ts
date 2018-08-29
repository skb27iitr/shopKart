import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class TeamService {

  constructor(private db: AngularFireDatabase) { }

  // createTeam(team){
  //   return this.db.list('/teams/').push(team);
  // }

  getAll(){
    return this.db.list('/teams/');
  }

}
