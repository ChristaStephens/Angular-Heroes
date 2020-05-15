import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroService } from './hero.service';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [HeroService]

})
export class AppRoutingModule { }
