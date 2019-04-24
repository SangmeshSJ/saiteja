import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ChatComponent } from './components/chat/chat.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { MynetworkComponent } from './components/mynetwork/mynetwork.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddeducationComponent } from './components/dashboard/addeducation/addeducation.component';
import { AddExperienceComponent } from './components/dashboard/add-experience/add-experience.component';
import { EditProfileComponent } from './components/dashboard/edit-profile/edit-profile.component';
import { CertificationsComponent } from './components/dashboard/certifications/certifications.component';

const routes: Routes = [
  { path: "", component: LandingpageComponent },
  { path: "landingpage", component: LandingpageComponent },
  { path: "home", component: HomeComponent },
  { path: "mynetwork", component: MynetworkComponent },
  { path: "chat", component: ChatComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "jobs", component: JobsComponent },
  { path: "profile", component: DashboardComponent },
  { path: "addeducation", component: AddeducationComponent },
  { path: "addexperience", component: AddExperienceComponent },
  { path: "editprofile", component: EditProfileComponent },
  { path: "addcertification", component: CertificationsComponent },

  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
