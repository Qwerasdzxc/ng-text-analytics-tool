import { Component, OnInit } from '@angular/core';
import { EntityExtractionResult } from 'src/app/model';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css'],
})
export class EntityExtractionComponent implements OnInit {
  text: string;
  minConfidence: number;

  image: boolean = false;
  abstract: boolean = false;
  categories: boolean = false;

  result: EntityExtractionResult | null;

  constructor(private restService: RestService) {
    this.text = '';
    this.minConfidence = 50;
    this.result = null;
  }

  ngOnInit(): void {}

  onSliderChanged(value: string) {
    this.minConfidence = +value;
  }

  submitData() {
    var include = Array<string>();
    if (this.image) include.push('image');
    if (this.abstract) include.push('abstract');
    if (this.categories) include.push('categories');

    this.restService
      .submitEntityExtraction(this.text, this.minConfidence / 100, include.join(','))
      .subscribe((result) => {
        this.result = result;
      });
  }
}
