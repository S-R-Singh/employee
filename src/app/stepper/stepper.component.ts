import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators,FormControl} from '@angular/forms';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileValidator } from 'ngx-material-file-input';
interface exps {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {
  isLinear = false;
  readonly maxSize = 104857600;
  //firstFormGroup: FormGroup ;
  exps: exps[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  expyear = new FormControl(this.exps[1].value);

  constructor(private fb: FormBuilder) { }
  firstFormGroup = this.fb.group({
    firstCtrl: ['', Validators.required],
    requiredfile: [undefined, Validators.required// FileValidator.maxContentSize(this.maxSize)]
    ],      exps: this.expyear,
  });
  
  // onFileChange(event)
  //  {
  
  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.firstFormGroup.patchValue({
  //       fileSource: file
  //     });
  //   }
  // }
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  ngOnInit(): void { 
    this.firstFormGroup.valueChanges.subscribe(x=> {console.log('Valuechanges', x)})
    
  }

}
