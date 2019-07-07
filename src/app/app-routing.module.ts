
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './tabs/about/about.component';
import { PersonalComponent } from './tabs/personal/personal.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'personal', component: PersonalComponent },
    { path: '',   redirectTo: 'about', pathMatch: 'full' },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
