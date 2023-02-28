import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { fallIn } from 'src/app/shared/common/animations';

@Component({
  selector: 'app-allvideocheckout',
  templateUrl: './allvideocheckout.component.html',
  styleUrls: ['./allvideocheckout.component.css'],
  animations: [fallIn()],
  host: { '[@fallIn]': '' }
})
export class AllvideocheckoutComponent implements OnInit {

  constructor(private fb: FormBuilder, private el: ElementRef){}

  checkoutForm: FormGroup;
  previewLink: string;
  submitted: boolean = false;

  targetAudienceArray: Array<any> = [
    { name: 'Likes & Comments', value: 'Likes & Comments', id: 'likes' },
    { name: 'Subscribers', value: 'Subscribers', id: 'subscribers' },
    { name: 'Installs', value: 'Installs', id: 'installs' }
  ];

  videoCategoryArray:Array<any> = [
    { value:"Film and Animation", name: "Film and Animation", id:"Film and Animation" },
    { value:"Autos and Vehicles", name: "Autos and Vehicles", id:"Autos and Vehicles" },
    { value:"Music", name: "Music", id:"Music" },
    { value:"Pets and Animals", name: "Pets and Animals", id:"Pets and Animals" },
    { value:"Sports", name: "Sports", id:"Sports" },
    { value:"Travel and Events", name: "Travel and Events", id:"Travel and Events" },
    { value:"Gaming", name: "Gaming", id:"" },
    { value:"People and Blogs", name: "People and Blogs", id:"People and Blogs" },
    { value:"Comedy", name: "Comedy", id:"Comedy" },
    { value:"Entertainment", name: "Entertainment", id:"Entertainment" },
    { value:"News and Politics", name: "News and Politics", id:"News and Politics" },
    { value:"How to and Style", name: "How to and Style", id:"How to and Style" },
    { value:"Education", name: "Education", id:"Education" },
    { value:"Science and Technology", name: "Science and Technology", id:"Science and Technology" },
    { value:"Nonprofits and Activism", name: "Nonprofits and Activism", id:"Nonprofits and Activism" }
  ]

  ngOnInit(): void {
    this.checkoutForm = this.fb.group({
      youtubeLink: new FormControl('', [Validators.required]),
      targetAudience: new FormArray([]),
      gender: new FormControl(null),
      age: new FormControl(null),
      location: new FormControl(null, [Validators.required]),
      country: new FormControl(''),
      videoCategory: new FormControl(null),
      keywords: new FormControl(null),
      budget: new FormControl(null, [Validators.required])
    });
  }

  get f() {
    return this.checkoutForm.controls;
  }

  onCountTotalViews() {
    return +this.f['budget'].value * 5;
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
  }

  showVideoThumbnail() {
    const id = this.f['youtubeLink'].value;
    const i1 = id.indexOf("=");
    let idRefined = id.substring(i1 + 1, id.length);
    if (idRefined.indexOf("&") != -1) {
        idRefined = idRefined.substring(0, idRefined.indexOf("&"));
    }
    this.previewLink = "https://youtube.com/embed/" + idRefined;
}

  onChangeLocation(event: any) {
    if(event.target.value.toLowerCase() === 'country') {
      this.f['country'].setValidators([Validators.required, Validators.minLength(3)]);
      this.f['country'].updateValueAndValidity();
    }
    else {
      this.f['country'].clearValidators();
      this.f['country'].updateValueAndValidity();
    }
  }

  submitForm() {
    this.submitted = true;
    if(!this.checkoutForm.valid) {
      for (const key of Object.keys(this.f)) {
        if (this.f[key].invalid) {
          const invalidControl = this.el.nativeElement.querySelector('[formControlName="' + key + '"]');
          invalidControl.focus();
          break;
        }
      }
      return;
    }
    Object.assign({}, this.checkoutForm.value,  {views: this.onCountTotalViews() });
    console.log(Object.assign({}, this.checkoutForm.value, { views: this.onCountTotalViews() }));
  }
}
