import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent implements OnInit {

  text: string;
  clean: boolean;

  result: string;

  constructor(private restService: RestService) { 
    this.text = '';
    this.clean = false;
    this.result = '';
  }
  
  ngOnInit(): void {}

  submitData() {
    this.restService.submitLanguageDetection(
      this.text, this.clean
    ).subscribe(result => {
      this.result = '';
      result.detectedLangs.forEach(resultItem => {
        console.log(resultItem);
        this.result += `${resultItem.lang} with ${resultItem.confidence.toFixed(2)} confidence.\n\n`
      });
    });
  }

}
