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

  currentClinic: Clinicstory;

  constructor(private clinicstoryService: ClinicstoryService) { }

  ngOnInit() {
  }

  saveValues(){

  }

}
