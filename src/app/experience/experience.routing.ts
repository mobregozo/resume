import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExperienceComponent } from '../tabs/experience/experience.component';
import { ExperienceListComponent } from '../experience/experience-list/experience-list.component';
import { ExperienceDetailComponent } from '../experience/experience-detail/experience-detail.component';

const routes: Routes = [
    {
        path: 'experience',
        component: ExperienceComponent,
        children: [
            {
                path: 'list',
                component: ExperienceListComponent,
            },
            {
                path: 'list/:id',
                component: ExperienceDetailComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ExperienceRoutingModule {}
