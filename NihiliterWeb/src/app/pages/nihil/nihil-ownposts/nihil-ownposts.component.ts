import { Component, OnInit } from '@angular/core';
import { Nihil } from 'src/app/models/nihil';
import { NihilService } from 'src/app/services/nihil.service';

@Component({
  selector: 'app-nihil-ownposts',
  templateUrl: './nihil-ownposts.component.html',
  styleUrls: ['./nihil-ownposts.component.scss']
})
export class NihilOwnpostsComponent implements OnInit {
  nihils: Nihil[] = [];

  constructor(private nihilService: NihilService) { }

  ngOnInit(): void {
    this.requestAllNihils();
  }

  requestAllNihils() {
    this.nihilService.getAllMyPosts()
      .subscribe(x => this.nihils = x);
  }

  removeNihileet(nihil: number) {
    if (confirm("Are you sure?")) {
      this.nihilService.deleteNihileet(nihil)
        .subscribe(_ => {
          alert("Deleted!")
          location.reload();
        });
    }
  }

}
