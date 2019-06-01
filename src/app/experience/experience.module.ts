import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceComponent } from '../tabs/experience/experience.component';
import { ExperienceListComponent } from '../experience/experience-list/experience-list.component';
import { ExperienceDetailComponent } from '../experience/experience-detail/experience-detail.component';
import { ExperienceRoutingModule } from './experience.routing';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ExperienceComponent, ExperienceListComponent, ExperienceDetailComponent ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    MatCardModule
  ]
})
export class ExperienceModule { }
