import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ObjectMaker } from './object.model';

@Component({
  selector: 'app-object-maker',
  templateUrl: './object-maker.component.html',
  styleUrls: ['./object-maker.component.scss']
})
export class ObjectMakerComponent implements OnInit {
  data: ObjectMaker[];

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.data = await this.http.get<ObjectMaker[]>('./assets/test/object.test.json').toPromise();
    console.log(this.data);
  }
}