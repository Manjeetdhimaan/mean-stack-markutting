import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-allvideocheckout',
  templateUrl: './allvideocheckout.component.html',
  styleUrls: ['./allvideocheckout.component.css']
})
export class AllvideocheckoutComponent implements OnInit {

  constructor(private fb: FormBuilder){}

  checkoutForm: FormGroup;

  targetAudienceArray: Array<any> = [
    { name: 'Likes & Comments', value: 'Likes & Comments', id: 'likes' },
    { name: 'Subscribers', value: 'Subscribers', id: 'subscribers' },
    { name: 'Installs', value: 'Installs', id: 'installs' }
  ];

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      youtubeLink: new FormControl('', [Validators.required]),
      targetAudience: new FormArray([], Validators.required),
      gender: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      country: new FormControl(''),
      videoCategory: new FormControl('', [Validators.required]),
      keywords: new FormControl('', [Validators.required]),
      budget: new FormControl('', [Validators.required]),
      views: new FormControl('', [Validators.required]),
    });
  }

  onCountTotalViews() {
    return 100;
  }

  onTargetAudienceCheckboxChange(event: any) {
    const selectedTargetAudience = (this.checkoutForm.controls['targetAudience'] as FormArray);
    if (event.target.checked) {
      selectedTargetAudience.push(new FormControl(event.target.value));
    } else {
      const index = selectedTargetAudience.controls
      .findIndex(x => x.value === event.target.value);
      selectedTargetAudience.removeAt(index);
    }

    console.log(selectedTargetAudience.value);
  }

  submitForm() {
    console.log(this.checkoutForm.value);
  }
}
