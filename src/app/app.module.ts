import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { HomeComponent } from './components/home/home.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { MyInterceptor } from './interceptor';
import { HistoryComponent } from './components/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigurationComponent,
    HomeComponent,
    TextSimilarityComponent,
    LanguageDetectionComponent,
    SentimentAnalysisComponent,
    EntityExtractionComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
