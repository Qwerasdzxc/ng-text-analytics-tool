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

export interface EntityExtractionResult {
    annotations: Array<EntityExtractionResultItem>
}

export interface EntityExtractionResultItem {
    label: string;
    spot: string;
    categories: Array<string>;
    abstract: string;
    image: EntityExtractionResultItemImage;
}

export interface EntityExtractionResultItemImage {
    full: string;
    thumbnail: string;
}