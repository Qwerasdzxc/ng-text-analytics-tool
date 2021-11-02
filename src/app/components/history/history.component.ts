import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  logs: Array<string>;

  constructor(private logger: LoggerService) {
    this.logs = this.logger.getLogs();
  }

  ngOnInit(): void {}

}
