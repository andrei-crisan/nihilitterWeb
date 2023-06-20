import { Component, OnInit } from '@angular/core';
import { Nihil } from 'src/app/models/nihil';
import { NihilService } from 'src/app/services/nihil.service';

@Component({
  selector: 'app-nihil-list',
  templateUrl: './nihil-list.component.html',
  styleUrls: ['./nihil-list.component.scss']
})
export class NihilListComponent implements OnInit {
  nihils: Nihil[] = [];

  constructor(private nihilService: NihilService) { }

  ngOnInit(): void {
    this.requestAllNihils();
  }

  requestAllNihils() {
    this.nihilService.getAllNihils()
      .subscribe(x => this.nihils = x);
  }

}
