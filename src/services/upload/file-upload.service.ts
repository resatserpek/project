import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private storage: AngularFireStorage) { }
}
