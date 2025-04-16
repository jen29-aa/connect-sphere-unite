
// Types for ConnectSphere app

export type Skill = {
  id: string;
  title: string;
  description: string;
  category: SkillCategory;
  userId: string;
  location: Location;
  type: 'offer' | 'request';
  exchangeType: 'barter' | 'payment' | 'both';
  price?: number;
  barterPreference?: string;
  createdAt: string;
  imageUrl?: string;
};

export type SkillCategory = 
  | 'teaching'
  | 'crafts'
  | 'technology'
  | 'wellness'
  | 'home'
  | 'language'
  | 'creative'
  | 'professional'
  | 'other';

export type User = {
  id: string;
  name: string;
  email: string;
  bio: string;
  location: Location;
  profileImageUrl: string;
  skills: string[]; // Array of Skill IDs
  rating: number;
  reviewCount: number;
  joinedAt: string;
  verified: boolean;
  vouches: number; // Community Vouches
};

export type Location = {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  radius?: number; // User's preferred match radius in miles
};

export type Review = {
  id: string;
  userId: string; // User who wrote the review
  targetId: string; // User being reviewed
  skillId?: string; // Optional: Specific skill being reviewed
  rating: number; // 1-5
  comment: string;
  createdAt: string;
};

export type Challenge = {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  participantsCount: number;
  category: string;
  rewards?: string;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: Location;
  organizerId: string;
  attendeeIds: string[];
  category: string;
  imageUrl?: string;
  maxAttendees?: number;
};
