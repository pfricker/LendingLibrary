import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IDataWrapper } from '../dataWrapper';
import { Router } from '@angular/router';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})


export class UploadComponent {

  constructor(private _appService: AppService, private router:Router) {}

  bookupload(formValues) {
    let newWrapper: IDataWrapper = { resource: null};
    newWrapper.resource = Array.of(formValues);
    console.log(newWrapper);

    this._appService.addBook(newWrapper)
      .subscribe(
        (data: IDataWrapper) => console.log(data),
        (err: any) => console.log(err)
    );
    this.router.navigate(['index'])
  }

  movieupload(formValues) {
    let newWrapper: IDataWrapper = { resource: null};
    newWrapper.resource = Array.of(formValues);
    console.log(newWrapper);

    this._appService.addMovie(newWrapper)
      .subscribe(
        (data: IDataWrapper) => console.log(data),
        (err: any) => console.log(err)
    );
    this.router.navigate(['index'])
  }

  albumupload(formValues) {
    let newWrapper: IDataWrapper = { resource: null};
    newWrapper.resource = Array.of(formValues);
    console.log(newWrapper);

    this._appService.addAlbum(newWrapper)
      .subscribe(
        (data: IDataWrapper) => console.log(data),
        (err: any) => console.log(err)
    );
    this.router.navigate(['index'])
  }

  cancel() {
    this.router.navigate(['index'])
  }


}
