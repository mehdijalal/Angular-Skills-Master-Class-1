import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule } from '@angular/common/http';


import { PostsComponent } from './content/components/posts/posts.component';
import { DefaultComponent } from './default/default.component';
import {UsersComponent} from './content/components/admin/users/users.component';
import {DashboardsComponent} from './content/components/dashboards/dashboards.component';
import {DialogComponent} from './content/shared/components/dialog/dialog.component';
import {SnackbarComponent} from './content/shared/components/snackbar/snackbar.component';
import {AnnouncementsComponent} from './content/components/announcements/announcements.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';







import { RouterModule } from '@angular/router';

const mats=[
  BrowserAnimationsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  RouterModule,
  MatListModule,
  MatExpansionModule,
  MatTooltipModule,
  MatGridListModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatTableModule,
  MatPaginatorModule,
  MatDialogModule,
  MatSnackBarModule,
  MatInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    DefaultComponent,
    UsersComponent,
    DashboardsComponent,
    DialogComponent,
    SnackbarComponent,
    AnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    mats,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  exports:[mats,HttpClientModule],
  providers: [],
  entryComponents:[DialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
