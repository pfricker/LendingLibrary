import { Component, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppService } from '../app.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { IDataWrapper } from '../dataWrapper';

@Component({
  selector: 'upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})


export class UploadComponent {
  book_title
  book_author
  book_format
  book_available

  constructor(private _appService: AppService) {}

  bookupload(formValues) {
    console.log(formValues)
    this._appService.addBook(formValues)
      .subscribe(
        (data: IDataWrapper) => console.log(data),
        (err: any) => console.log(err)
    );
  }


}
