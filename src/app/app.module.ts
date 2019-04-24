import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ChatComponent } from './components/chat/chat.component';
import { MynetworkComponent } from './components/mynetwork/mynetwork.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { FriendlistComponent } from './components/mynetwork/friendlist/friendlist.component';
import { InvitationsComponent } from './components/mynetwork/invitations/invitations.component';
import { RecommendationComponent } from './components/mynetwork/recommendation/recommendation.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { AddExperienceComponent } from './components/dashboard/add-experience/add-experience.component';
import { AddeducationComponent } from './components/dashboard/addeducation/addeducation.component';
import { CertificationsComponent } from './components/dashboard/certifications/certifications.component';
import { EditProfileComponent } from './components/dashboard/edit-profile/edit-profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    ChatComponent,
    MynetworkComponent,
    LandingpageComponent,
    FriendlistComponent,
    InvitationsComponent,
    RecommendationComponent,
    NotificationsComponent,
    JobsComponent,
    AddExperienceComponent,
    AddeducationComponent,
    CertificationsComponent,
    EditProfileComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
