import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { UserNavbarComponent } from './user-navbar/user-navbar.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { CreateAdpostComponent } from './create-adpost/create-adpost.component';
import { DetailComponent } from './detail/detail.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CreatedPostComponent } from './created-post/created-post.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { CreatedVideoComponent } from './created-video/created-video.component';
import { ClassVideosComponent } from './class-videos/class-videos.component';
import { AllClassesComponent } from './all-classes/all-classes.component';

const routes=[
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"profile",component:ProfileComponent,/*canActivate:[AuthGuard],*/ children:[
    {path:'',component:DetailComponent,pathMatch: 'full'},
    {path:"editProfile",component:EditProfileComponent},
    {path:"createAdPost",component:CreateAdpostComponent},
    {path:"createdPost",component:CreatedPostComponent},
    {path:"uploadVideo",component:UploadVideoComponent},
    {path:"createdVideo",component:CreatedVideoComponent},
    {path:"classVideos",component:ClassVideosComponent},
    {path:"allVideos",component:AllClassesComponent}
  ]}
]

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    
    NavbarComponent,
    
    ProfileComponent,
    EditProfileComponent,
    CreateAdpostComponent,
    DetailComponent,
    UserNavbarComponent,
    FooterComponent,
    CreatedPostComponent,
    UploadVideoComponent,
    CreatedVideoComponent,
    ClassVideosComponent,
    AllClassesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [NavbarComponent,HttpClient,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
