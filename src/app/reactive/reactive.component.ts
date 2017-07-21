import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  form: FormGroup;
  formErrors = {
    name: '',
    username: ''
  };

  validationMessages = {
    name: {
      required: 'Name is required',
      minlength: 'Name must be at least 3 characters',
      maxlength: 'Name must be less than 6 characters'
    },
    username: {
      required: 'UserName is required',
      minlength: 'UserName must be at least 3 characters',
    }
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    //build the Form
    this.form = this.fb.group({
      name: ['', [Validators.minLength(3), Validators.maxLength(6)]],
      username: ['', [Validators.minLength(3)]]
    });

    this.form.valueChanges.subscribe(data => this.validateForm());

    console.log(this.form);
  }

  validateForm(): void {
    for (let field in this.formErrors) {
      //clear that input field errors
      this.formErrors[field] = '';

      //grab an input field by name
      let input = this.form.get(field);

      if (input.invalid && input.dirty) {
        //figure out the type of error
        //loop over the formErrors field names
        for (let error in input.errors) {
          //assign that type of error message to variable
          this.formErrors[field] = this.validationMessages[field][error];
        }

        
      }
    }
  }

  processForm(): void {
    console.log("Processing", this.form.value);
  }
}
