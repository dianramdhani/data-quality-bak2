import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Rule } from './rule.model';

@Component({
  selector: 'app-normalize-rule',
  templateUrl: './normalize-rule.component.html',
  styleUrls: ['./normalize-rule.component.scss']
})
export class NormalizeRuleComponent implements OnInit {
  rules: Rule[];

  constructor(private http: HttpClient) { }

  async ngOnInit() {
    this.rules = await this.http.get<Rule[]>('./assets/test/rules.test.json').toPromise();
    console.log(this.rules);
  }
}