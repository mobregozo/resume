import { Component, OnInit } from '@angular/core';
import { JsonInfoService } from './../../json-info.service';

@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
    constructor(private appSettingsService: JsonInfoService) {}

    public experiences: any = [];

    ngOnInit() {
        this.appSettingsService.getJSON().subscribe(data => {
            this.experiences = data.jobs;
        });
    }
}
