import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  //firstFormGroup: FormGroup ;

  constructor(private fb: FormBuilder) { }
  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
  });
  ngOnInit(): void { 
    
    
  }

}
