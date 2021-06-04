import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private storage: AngularFireStorage) { 

  }

  getMedia(url: string){
    const ref = this.storage.ref(url);
    return ref.getDownloadURL();
  }

  upload(fileName: string, file: File){
    this.storage.upload(fileName, file);
  }
}
