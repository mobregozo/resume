import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonInfoService } from '../../json-info.service';

@Component({
  selector: 'app-experience-detail',
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})
export class ExperienceDetailComponent implements OnInit {
  detail: any;
  private sub: any;

  constructor(private route: ActivatedRoute, private appSettingsService: JsonInfoService ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       const id = params['id']; // (+) converts string 'id' to a number

       this.appSettingsService.getJSON().subscribe(data => {
        this.detail = data.filter((experience) => {
          return experience.id === id;
        })[0];
    });
    });
  }

}
