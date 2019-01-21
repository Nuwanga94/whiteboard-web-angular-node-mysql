import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { SuperUserComponent } from './super-user/super-user.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { FeaturesComponent } from './features/features.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { ScreenShareComponent } from './screen-share/screen-share.component';
import { FootComponent } from './foot/foot.component';
import { PricingComponent } from './pricing/pricing.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarStudentComponent } from './sidebar-student/sidebar-student.component';
import { SidebarTeacherComponent } from './sidebar-teacher/sidebar-teacher.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { HelpComponent } from './help/help.component';
import { PpicComponent } from './ppic/ppic.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin/:id/ppic/register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/:id', component: AdminComponent },
  { path: 'teacher/:id', component: TeacherComponent },
  { path: 'student/:id', component: StudentComponent },
  { path: 'superUser', component: SuperUserComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'adminView', component: AdminViewComponent },
  { path: 'navbar-home', component: NavbarHomeComponent },
  { path: 'screen-share', component: ScreenShareComponent },
  { path: 'footer', component: FootComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'sidebar', component: SidebarComponent },
  { path: 'sidebar-student', component: SidebarStudentComponent },
  { path: 'sidebar-teacher', component: SidebarTeacherComponent },
  { path: 'tutorials', component: TutorialsComponent },
  { path: 'help', component: HelpComponent },
  { path: ':type/:id/ppic', component: PpicComponent }
  
  

]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    AdminComponent,
    TeacherComponent,
    StudentComponent,
    SuperUserComponent,
    HomeComponent,
    NavbarComponent,
    ContactComponent,
    FeaturesComponent,
    AdminViewComponent,
    NavbarHomeComponent,
    ScreenShareComponent,
    FootComponent,
    PricingComponent,
    SidebarComponent,
    SidebarStudentComponent,
    SidebarTeacherComponent,
    TutorialsComponent,
    HelpComponent,
    PpicComponent
  ],

  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
