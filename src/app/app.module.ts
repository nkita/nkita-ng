import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModules} from '../material-modules';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { SubPageComponent } from './sub-page/sub-page.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SideNavComponent } from './side-nav/side-nav.component';

const appRoutes: Routes = [ // 追加
  { path: '', component: MainPageComponent },
  { path: 'sub', component: SubPageComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SubPageComponent,
    HeaderComponent,
    ErrorComponent,
    MainPageComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModules,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
