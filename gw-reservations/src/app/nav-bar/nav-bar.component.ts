import { InavigationItem } from './../interfaces/nav-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gw-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

public navArr: InavigationItem[];

ngOnInit(){
  this.navArr =[{
    title: 'Welcome',
    url:'welcome'
  },
    {
      title: 'About',
       url:'about'
    },
    {
      title:"",
      url:"root"
    
  }]
}

}
