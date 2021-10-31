import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent implements OnInit {

  text1: string;
  text2: string;

  result: string;

  constructor(private restService: RestService) { 
    this.text1 = '';
    this.text2 = '';
    this.result = '';
  }
  
  ngOnInit(): void {}

  submitData() {
    this.restService.submitTextSimilarity(
      this.text1, this.text2
    ).subscribe(result => {
      this.result = result.similarity.toString();
    });
  }

}
