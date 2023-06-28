import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NihilService } from 'src/app/services/nihil.service';

@Component({
  selector: 'app-nihil-add',
  templateUrl: './nihil-add.component.html',
  styleUrls: ['./nihil-add.component.scss']
})
export class NihilAddComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private nihilService: NihilService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      nihil: new FormControl('', [Validators.required])
    })
  }

  submitNihilPost() {
    this.nihilService.submitNihilPost(this.formGroup)
      .subscribe(_ => {
        console.log("Submited!")
        location.reload();
      });
  }
}
