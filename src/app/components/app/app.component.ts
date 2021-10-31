import { Component } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'text-analytics-tool';

  constructor(private configService: ConfigService) {}

  getToken() {
    return this.configService.getToken();
  }
  
}
