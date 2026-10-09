export interface GalleryPhoto {
  id: string;
  url: string;
  caption: string;
  date?: string;
  location?: string;
  rotation?: number; // e.g. -3 to 3 deg for scrapbook look
  category?: string;
}

export interface LittleThing {
  id: string;
  category: 'quirk' | 'favorite' | 'unique' | 'smile' | 'fun-fact';
  title: string;
  shortDescription: string;
  detailedText: string;
  iconName: string;
  colorTheme?: string;
}

export interface MemoryEntry {
  id: string;
  date: string;
  title: string;
  description: string;
  imageUrl?: string;
  sticker?: string;
  tag?: string;
}

export interface PersonalMessage {
  id: string;
  envelopeTitle: string;
  subtitle: string;
  letterContent: string;
  tag: string;
  stampIcon: string;
  themeColor?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface SurpriseItem {
  id: string;
  title: string;
  message: string;
  imageUrl?: string;
  emoji: string;
}

export interface AppConfig {
  friendName: string;
  websiteTitle: string;
  subtitle: string;
  mainPortrait: string;
  heroCollagePhotos: GalleryPhoto[];
  galleryPhotos: GalleryPhoto[];
  littleThings: LittleThing[];
  memories: MemoryEntry[];
  messages: PersonalMessage[];
  compliments: string[];
  quizQuestions: QuizQuestion[];
  surprises: SurpriseItem[];
  secretRoom: {
    teaserTitle: string;
    teaserSubtitle: string;
    hintText: string;
    starsToFind: number;
    revealedTitle: string;
    revealedMessage: string;
    revealedImageUrl: string;
  };
  audioUrl?: string;
}
