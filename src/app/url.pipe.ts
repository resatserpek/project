import { Pipe, PipeTransform } from '@angular/core';
import { FileUploadService } from 'src/services/upload/file-upload.service';
import { Observable } from 'rxjs';

@Pipe({
  name: 'url'
})
export class UrlPipe implements PipeTransform {

  imageUrl: Observable<string>;
  constructor(private image: FileUploadService){

  }
  //https://www.youtube.com/watch?v=wcl9HUxM0tI&t=473s
  transform(value: any, ...args: any[]): any {
    if(value === ''){
      return '';
    }
    this.imageUrl = this.image.getMedia(value);
    return this.imageUrl;
  }

}
