import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from "@angular/router";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './Welcome/welcome/welcome.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LogInComponent } from './log-in/log-in.component';
import { AboutComponent } from './About/about/about.component';


const routes: Route[] = [
  {
     component: WelcomeComponent,
     path: "welcome"
  },
    {
      component: AboutComponent,
      path: "about"
    },
    {
      component: WelcomeComponent,
      path: "root"
    },
    {
      
      path: "**",
      component: FourOhFourComponent
    }
];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavBarComponent,
    LogInComponent,
    AboutComponent,
    FourOhFourComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
