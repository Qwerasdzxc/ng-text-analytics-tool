import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { TextSimilarityResult } from '../model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private readonly apiUrl = environment.apiUrl;

  constructor(
    private configService: ConfigService,
    private httpClient: HttpClient
  ) {}

  submitTextSimilarity(
    text1: string,
    text2: string
  ): Observable<TextSimilarityResult> {
    return this.httpClient.get<TextSimilarityResult>(
      `${this.apiUrl}/datatxt/sim/v1/`,
      {
        params: {
          text1: text1,
          text2: text2,
          lang: 'en',
          token: this.configService.getToken(),
        },
      }
    );
  }
}
