import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-non-medical-form',
  templateUrl: './non-medical-form.component.html',
  styleUrls: ['./non-medical-form.component.css']
})
export class NonMedicalFormComponent implements OnInit {

  nonMedForm = new FormGroup({
    applicationNumber: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    members: new FormArray([]),
    searchUser: new FormControl(''),
    problemStatementId: new FormControl(''),
    trackName: new FormControl(''),
    venue: new FormControl(''),
    solution: new FormControl(''),
    isHardwareKit: new FormControl(false),
    whyHardware: new FormControl('')
  });

  constructor() { }

  ngOnInit() { }
}
