import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { ClinicstoryComponent } from './clinicstory/clinicstory.component';
import { ClinicstoryService} from './service/clinicstory.service';

@NgModule({
  declarations: [
    AppComponent,
    ClinicstoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ClinicstoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
