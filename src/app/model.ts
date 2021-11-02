export interface TextSimilarityResult {
    similarity: number;
}

export interface LanguageDetectionResult {
    detectedLangs: Array<LanguageDetectionResultItem>
}

export interface LanguageDetectionResultItem {
    lang: string;
    confidence: number;
}

export interface SentimentAnalysisResult {
    sentiment: SentimentAnalysisResultItem;
}

export interface SentimentAnalysisResultItem {
    score: number;
    type: string;
}