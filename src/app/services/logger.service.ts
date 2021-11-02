import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private logs: Array<string>;

  constructor() {
    this.logs = [];
  }

  getLogs(): Array<string> {
    return this.logs;
  }

  addLog(log: string) {
    this.logs.push(log);
  }
}
