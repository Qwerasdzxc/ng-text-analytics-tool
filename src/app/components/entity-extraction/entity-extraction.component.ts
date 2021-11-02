import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit {

  text: string;
  minConfidence: number;

  result: string;

  constructor(private restService: RestService) { 
    this.text = '';
    this.minConfidence = 0.5;
    this.result = '';
  }
  
  ngOnInit(): void {}

  submitData() {
    console.log(this.minConfidence);
    // this.restService.submitLanguageDetection(
    //   this.text, this.clean
    // ).subscribe(result => {
    //   this.result = '';
    //   result.detectedLangs.forEach(resultItem => {
    //     console.log(resultItem);
    //     this.result += `${resultItem.lang} with ${resultItem.confidence.toFixed(2)} confidence.\n\n`
    //   });
    // });
  }

}
