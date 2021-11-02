import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { EntityExtractionResult, LanguageDetectionResult, SentimentAnalysisResult, TextSimilarityResult } from '../model';
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

  submitLanguageDetection(
    text: string,
    clean: boolean
  ): Observable<LanguageDetectionResult> {
    return this.httpClient.get<LanguageDetectionResult>(
      `${this.apiUrl}/datatxt/li/v1/`,
      {
        params: {
          text: text,
          clean: clean,
          token: this.configService.getToken(),
        },
      }
    );
  }

  submitSentimentAnalysis(
    text: string,
    lang: string
  ): Observable<SentimentAnalysisResult> {
    return this.httpClient.get<SentimentAnalysisResult>(
      `${this.apiUrl}/datatxt/sent/v1/`,
      {
        params: {
          text: text,
          lang: lang,
          token: this.configService.getToken(),
        },
      }
    );
  }

  submitEntityExtraction(
    text: string,
    minConfidence: number,
    include: string
  ): Observable<EntityExtractionResult> {
    return this.httpClient.get<EntityExtractionResult>(
      `${this.apiUrl}/datatxt/nex/v1/`,
      {
        params: {
          text: text,
          min_confidence: minConfidence,
          include: include,
          token: this.configService.getToken(),
        },
      }
    );
  }
}
