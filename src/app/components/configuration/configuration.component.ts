import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  token: string;

  constructor(private configService: ConfigService) { 
    this.token = this.configService.getToken();
  }
  
  ngOnInit(): void {}

  setToken() {
    this.configService.setToken(this.token);
  }

}
