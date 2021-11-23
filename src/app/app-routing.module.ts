import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component'; 
import { UnknownComponent } from './unknown/unknown.component'; 
import { AppComponent } from './app.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent},
	{ path: 'articles', component: ArticlesComponent},
  	{ path: 'contact', component: ContactComponent},
	{ path: '',   redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', component:  UnknownComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
