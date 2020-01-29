import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: AngularFirestore
  ) { }


  create_NewRide(record) {
    return this.firestore.collection('ride').add(record);
  }

  read_Ride() {
    return this.firestore.collection('ride').snapshotChanges();
  }

  update_Student(recordID,record){
    this.firestore.doc('ride/' + recordID).update(record);
  }

  delete_Student(record_id) {
    this.firestore.doc('ride/' + record_id).delete();
  }
}