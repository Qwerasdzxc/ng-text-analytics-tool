import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent implements OnInit {

  text: string;
  language: string;

  result: string;
  resultColor: string;

  constructor(private restService: RestService) { 
    this.text = '';
    this.language = 'Auto';
    this.result = '';
    this.resultColor = '#000000';
  }
  
  ngOnInit(): void {}

  submitData() {
    this.restService.submitSentimentAnalysis(
      this.text, this.langMap[this.language]
    ).subscribe(result => {
      this.result = `Sentiment is ${result.sentiment.type} with ${result.sentiment.score} score.`;
      this.resultColor = this.lerpColor('#FF0000', '#00FF00', (result.sentiment.score - -1) / (1 - -1));
    });
  }

  lerpColor(a: string, b: string, amount: number) { 
    var ah = parseInt(a.replace(/#/g, ''), 16),
        ar = ah >> 16, ag = ah >> 8 & 0xff, ab = ah & 0xff,
        bh = parseInt(b.replace(/#/g, ''), 16),
        br = bh >> 16, bg = bh >> 8 & 0xff, bb = bh & 0xff,
        rr = ar + amount * (br - ar),
        rg = ag + amount * (bg - ag),
        rb = ab + amount * (bb - ab);

    return '#' + ((1 << 24) + (rr << 16) + (rg << 8) + rb | 0).toString(16).slice(1);
}

  private langMap : Record<string, string> = {
    Auto: 'auto',
    English: 'en',
    Italian: 'it'
  }
}
