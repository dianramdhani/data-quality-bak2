import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Rule } from './rule.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RuleFormComponent } from './rule-form/rule-form.component';

@Component({
  selector: 'app-normalize-rule',
  templateUrl: './normalize-rule.component.html',
  styleUrls: ['./normalize-rule.component.scss']
})
export class NormalizeRuleComponent implements OnInit {
  rules: Rule[];

  constructor(private http: HttpClient, private modal: NgbModal) { }

  async ngOnInit() {
    this.rules = await this.http.get<Rule[]>('./assets/test/rules.test.json').toPromise();
  }

  openRuleForm(rule = new Rule('', 'title', '', '', false)) {
    const modalRef = this.modal.open(RuleFormComponent);
    modalRef.componentInstance.rule = rule;
  }
}