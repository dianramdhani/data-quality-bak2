import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ObjectMaker } from './object.model';

import { ObjectFormComponent } from './object-form/object-form.component';

@Component({
  selector: 'app-object-maker',
  templateUrl: './object-maker.component.html',
  styleUrls: ['./object-maker.component.scss']
})
export class ObjectMakerComponent implements OnInit {
  data: ObjectMaker[];

  constructor(private http: HttpClient, private modal: NgbModal) { }

  async ngOnInit() {
    this.data = await this.http.get<ObjectMaker[]>('./assets/test/object.test.json').toPromise();
    console.log(this.data);
  }

  openObjectForm() {
    const modalRef = this.modal.open(ObjectFormComponent);
  }
}