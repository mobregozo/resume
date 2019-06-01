import { Component, OnInit } from '@angular/core';
import { JsonInfoService } from '../../json-info.service';

@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.scss']
})
export class ExperienceListComponent implements OnInit {

  constructor(private appSettingsService: JsonInfoService) {}

  public experiences: any = [];

  ngOnInit() {
      this.appSettingsService.getJSON().subscribe(data => {
          this.experiences = data.jobs;
      });
  }

}
