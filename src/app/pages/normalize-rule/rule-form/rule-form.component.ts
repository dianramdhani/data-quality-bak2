import { Component, Input, ViewChild } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

import { Rule } from '../rule.model';

@Component({
  selector: 'app-rule-form',
  templateUrl: './rule-form.component.html',
  styleUrls: ['./rule-form.component.scss']
})
export class RuleFormComponent {
  @Input() rule: Rule;
  @ViewChild('formRule', { static: false }) formRule: NgForm;

  constructor(public activeModal: NgbActiveModal) {
    this.formRule.form.patchValue(this.rule);
  }

  saveRule(form: NgForm) {
    console.log(form);
  }
}