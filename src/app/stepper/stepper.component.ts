import { Component, OnInit,ViewChild } from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators,FormControl} from '@angular/forms';
import {MatTable} from '@angular/material/table';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { Product, SellingPoint } from '../product'
import { FileValidator } from 'ngx-material-file-input';
interface exps {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  totalyear: string;
  position: number;
  lastctc: number;
  action: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, totalyear: 'Hydrogen', lastctc: 1.0079, action: 'H'},
  {position: 2, totalyear: 'Helium', lastctc: 4.0026, action: 'He'},
  {position: 3, totalyear: 'Lithium', lastctc: 6.941, action: 'Li'},
];
//items: FormArray;
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})

export class StepperComponent implements OnInit {
  
    private experienceArray: FormArray | any

 // displayedColumns: string[] = ['position', 'totalyear', 'lastctc', 'action'];
 // dataSource = [...ELEMENT_DATA];


  isLinear = false;
  readonly maxSize = 104857600;
  //firstFormGroup: FormGroup ;
  exps: exps[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  expyear = new FormControl(this.exps[1].value);
  
  // employment details table 
  


  constructor(private fb: FormBuilder  ) { }


  firstFormGroup = this.fb.group({
    //firstCtrl: ['', Validators.required],
    oneFirstName: ['', Validators.required],
    oneMiddleName: ['', Validators.required],
    oneLastName: ['', Validators.required],
    oneEmail: ['', Validators.required],
    oneMobile: ['', Validators.required],
    oneLandLine: ['', Validators.required],
    oneBirthDate: ['', Validators.required],
   // requiredfile: ['', Validators.required],
    onePresentAddress: ['', Validators.required],
    onePermanentAddress: ['', Validators.required],
    twoBankName: ['', Validators.required],
    twoAccountName: ['', Validators.required],
    twoBankAccountNumber: ['', Validators.required],
    twoIFSC: ['', Validators.required],
    twoAadhar: ['', Validators.required],
    twoPan: ['', Validators.required],
    threeDesignation: ['', Validators.required],
    threeDepartment: ['', Validators.required],
    threeExperience: ['', Validators.required],
    threeExperience2: ['', Validators.required],
    threeCurrentLocation: ['', Validators.required],
    threeSkills: ['', Validators.required],
    requiredfile2: [undefined, Validators.required],
    sixJoiningDate: ['', Validators.required],
    sixAppraisalDate: ['', Validators.required],
    sixCTC: ['', Validators.required],
    title: [],
      selling_points: this.fb.array([this.fb.group({point:''})]),
      experienceArray: this.fb.array([ this.newExperienceFeild()]),
    requiredfile: [undefined, Validators.required// FileValidator.maxContentSize(this.maxSize)]
    ],exps: this.expyear,
  });
  
  secondFormGroup = this.fb.group({
    secondCtrl: ['', Validators.required],
  });
  ngOnInit(): void { 
    this.firstFormGroup.valueChanges.subscribe(x=> {console.log('Valuechanges', x)})
      
  }
  get sellingPoints() {
    return this.firstFormGroup.get('selling_points') as FormArray;
  }

  /////// This is new /////////////////

  addSellingPoint() {
    this.sellingPoints.push(this.fb.group({point:''}));
  }

  deleteSellingPoint(index: number) {
    this.sellingPoints.removeAt(index);
  }
  //new test for aff form array
  addItem(): void {
    this.experienceArray = this.firstFormGroup.get('experienceArray') as FormArray;
    this.experienceArray.push(this.newExperienceFeild());
  }
  newExperienceFeild(): FormGroup { 
        return new FormGroup({'name': new FormControl('', Validators.email),
        'description': new FormControl(''), 'price': new FormControl('', Validators.email),}
)
    // return this.fb.group({
    //   name: '',
    //   description: '',
    //   price: ''
    // });
  }

}
