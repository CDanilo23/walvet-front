import { Component, OnInit } from '@angular/core';
import { Clinicstory } from './clinicstory';
import { ClinicstoryService } from '../service/clinicstory.service';

@Component({
  moduleId: 'clinicstory',
  selector: 'app-clinicstory',
  templateUrl: './clinicstory.component.html',
  styleUrls: ['./clinicstory.component.css']
})
export class ClinicstoryComponent implements OnInit {

  currentClinic = new Clinicstory();

  constructor(private clinicstoryService: ClinicstoryService) { }

  ngOnInit() {
  }

  saveValues(){
      console.log(this.currentClinic.name);
      console.log(this.currentClinic.specie);
      console.log(this.currentClinic.date);
  }

}
