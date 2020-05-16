import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; 
import {MatButtonModule} from '@angular/material/button';
import { NewUserComponent } from './new-user/new-user.component';
import { NewSondageComponent } from './new-sondage/new-sondage.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'; 
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ListSondageComponent } from './list-sondage/list-sondage.component';
import { ListParticipantComponent } from './list-participant/list-participant.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {DoodleService} from './doodle.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path : '', component : ConnexionComponent },
  { path : 'new-user', component : NewUserComponent },
  { path : 'new-sondage', component : NewSondageComponent },
  { path : 'list-sondage', component : ListSondageComponent },
  { path : 'list-participant', component : ListParticipantComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ConnexionComponent,
    NewUserComponent,
    NewSondageComponent,
    ListSondageComponent,
    ListParticipantComponent
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [DoodleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
