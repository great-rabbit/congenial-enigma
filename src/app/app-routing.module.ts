import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArtComponent } from './art/art.component';

const routes: Routes = [
	{ path: 'art', component: ArtComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
