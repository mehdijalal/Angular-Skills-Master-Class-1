import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mj';
  screenWidth;
  navLinks;
  isExpanded: boolean;
  activeLinkUrl: string;
  activeLinkIndex: number;




  constructor(){
    this.isExpanded = true;
    this.activeLinkIndex = -1;

    this.screenWidth = window.innerWidth;
    window.onresize = ()=>{
      this.screenWidth = window.innerWidth;
      if(this.screenWidth<=599){
        this.sidenav.toggle();
      }
    }
    
    //----create left navigations-----//
    this.navLinks = [
      {
        index: 0,
        label: 'Dashboard',
        link: 'dashboard',
        iconName: 'home',
        isPanelHiddenParent: false,
        isPanelParent: false
      },
      {
        index: 1,
        label: 'Admin Panel',
        link: './admin-panel',
        iconName: 'info',
        isPanelHiddenParent:true,
        isPanelParent:true,
        children:[
          {
            index:0,
            label: 'Users List',
            link: '/users',
            iconName: 'home'
          },
          {
            index:0,
            label: 'Posts List',
            link: '/posts',
            iconName: 'home'
          }
        ]
      },
      {
        index: 1,
        label: 'General',
        link: './employees',
        iconName: 'autorenew',
        isPanelHiddenParent:true,
        isPanelParent:true,
        children:[
          {
            index:0,
            label: 'Help desk',
            link: '/helpdesk',
            iconName: 'customer'
          },
          {
            index:0,
            label: 'Requests',
            link: '/announcement',
            iconName: 'home'
          }
        ]
      }
    ]

  }

  showPanelItem(link: any, isExpanded: boolean) {
    const retValue = link.isPanelParent === true && isExpanded === true;
    
    return retValue;

  }
 
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  
  opened: boolean = true;
 

  

}
