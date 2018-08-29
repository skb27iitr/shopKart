import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  //category$:any;

  constructor(private db: AngularFireDatabase) {
    //this.category$ =  db.list('/categories');
   }

   getCategories(){
    return this.db.list('/categories', {
      query:{
        orderByChild:'name'
      }
    })
   }

}
