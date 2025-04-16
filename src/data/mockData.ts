
import { Skill, User, Challenge, Event, Review } from '@/types';

// Mock Users
export const mockUsers: User[] = [
  {
    id: 'user1',
    name: 'Emma Johnson',
    email: 'emma@example.com',
    bio: 'Passionate educator with a love for gardening and sustainable living.',
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      city: 'San Francisco',
      radius: 5
    },
    profileImageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    skills: ['skill1', 'skill5'],
    rating: 4.8,
    reviewCount: 24,
    joinedAt: '2023-01-15T08:00:00Z',
    verified: true,
    vouches: 12
  },
  {
    id: 'user2',
    name: 'Michael Chen',
    email: 'michael@example.com',
    bio: 'Software engineer by day, cooking enthusiast by night. Love to share tech knowledge.',
    location: {
      latitude: 37.7833,
      longitude: -122.4167,
      city: 'San Francisco',
      radius: 3
    },
    profileImageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    skills: ['skill2', 'skill6'],
    rating: 4.6,
    reviewCount: 18,
    joinedAt: '2023-03-22T10:30:00Z',
    verified: true,
    vouches: 8
  },
  {
    id: 'user3',
    name: 'Sofia Rodriguez',
    email: 'sofia@example.com',
    bio: 'Language teacher and translator. I believe everyone should have the chance to learn new languages.',
    location: {
      latitude: 37.7694,
      longitude: -122.4862,
      city: 'San Francisco',
      radius: 10
    },
    profileImageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    skills: ['skill3', 'skill7'],
    rating: 4.9,
    reviewCount: 32,
    joinedAt: '2022-11-05T14:45:00Z',
    verified: true,
    vouches: 15
  },
  {
    id: 'user4',
    name: 'James Wilson',
    email: 'james@example.com',
    bio: 'Carpenter and DIY enthusiast. I can help you build just about anything for your home.',
    location: {
      latitude: 37.7608,
      longitude: -122.4177,
      city: 'San Francisco',
      radius: 7
    },
    profileImageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5',
    skills: ['skill4', 'skill8'],
    rating: 4.7,
    reviewCount: 41,
    joinedAt: '2023-02-18T09:15:00Z',
    verified: false,
    vouches: 9
  },
  {
    id: 'user5',
    name: 'Aisha Patel',
    email: 'aisha@example.com',
    bio: 'Yoga instructor and wellness coach. I love helping people find balance in their lives.',
    location: {
      latitude: 37.7865,
      longitude: -122.4307,
      city: 'San Francisco',
      radius: 5
    },
    profileImageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    skills: ['skill9', 'skill10'],
    rating: 5.0,
    reviewCount: 28,
    joinedAt: '2023-04-10T11:20:00Z',
    verified: true,
    vouches: 18
  },
];

// Mock Skills
export const mockSkills: Skill[] = [
  {
    id: 'skill1',
    title: 'Organic Gardening Classes',
    description: 'Learn how to grow your own vegetables and herbs using organic methods. Perfect for beginners!',
    category: 'teaching',
    userId: 'user1',
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      city: 'San Francisco'
    },
    type: 'offer',
    exchangeType: 'both',
    price: 25,
    barterPreference: 'I\'d love to trade for cooking lessons or home DIY help.',
    createdAt: '2023-12-01T14:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae'
  },
  {
    id: 'skill2',
    title: 'Web Development Tutoring',
    description: 'One-on-one tutoring in JavaScript, React, and modern web development. All skill levels welcome.',
    category: 'technology',
    userId: 'user2',
    location: {
      latitude: 37.7833,
      longitude: -122.4167,
      city: 'San Francisco'
    },
    type: 'offer',
    exchangeType: 'both',
    price: 40,
    barterPreference: 'Happy to trade for language lessons or fitness training.',
    createdAt: '2023-11-15T10:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159'
  },
  {
    id: 'skill3',
    title: 'Spanish Conversation Practice',
    description: 'Practice your Spanish speaking skills with a fluent speaker. Focus on conversation and practical vocabulary.',
    category: 'language',
    userId: 'user3',
    location: {
      latitude: 37.7694,
      longitude: -122.4862,
      city: 'San Francisco'
    },
    type: 'offer',
    exchangeType: 'barter',
    barterPreference: 'Looking for help with graphic design or photography.',
    createdAt: '2024-01-05T16:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d'
  },
  {
    id: 'skill4',
    title: 'Custom Furniture Building',
    description: 'Custom-built furniture for your home or office. Specializing in bookshelves, tables, and storage solutions.',
    category: 'crafts',
    userId: 'user4',
    location: {
      latitude: 37.7608,
      longitude: -122.4177,
      city: 'San Francisco'
    },
    type: 'offer',
    exchangeType: 'payment',
    price: 0, // Price varies by project
    createdAt: '2023-10-22T13:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1588875446496-14a8a35390cc'
  },
  {
    id: 'skill5',
    title: 'Sustainable Living Workshop',
    description: 'Group workshop on reducing waste, sustainable shopping, and eco-friendly home practices.',
    category: 'teaching',
    userId: 'user1',
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      city: 'San Francisco'
    },
    type: 'offer',
    exchangeType: 'payment',
    price: 15,
    createdAt: '2023-12-18T18:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09'
  },
  {
    id: 'skill6',
    title: 'Homemade Pasta Cooking Class',
    description: 'Learn to make fresh pasta from scratch! We\'ll cover basic dough, various shapes, and simple sauces.',
    category: 'teaching',
    userId: 'user2',
    location: {
      latitude: 37.7833,
      longitude: -122.4167,
      city: 'San Francisco'
    },
    type: 'offer',
    exchangeType: 'both',
    price: 30,
    barterPreference: 'Would trade for gardening advice or home repair help.',
    createdAt: '2023-11-02T12:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1607110382141-ee6f6c6d1a8e'
  },
  {
    id: 'skill7',
    title: 'Portuguese for Beginners',
    description: 'Structured lessons for complete beginners in Brazilian Portuguese. Focus on practical, everyday language.',
    category: 'language',
    userId: 'user3',
    location: {
      latitude: 37.7694,
      longitude: -122.4862,
      city: 'San Francisco'
    },
    type: 'offer',
    exchangeType: 'payment',
    price: 25,
    createdAt: '2024-01-20T11:00:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1598343672916-de13ab0636ed'
  },
  {
    id: 'skill8',
    title: 'Basic Home Repairs',
    description: 'Help with small home repairs - fixing leaky faucets, patching walls, mounting TVs, assembling furniture.',
    category: 'home',
    userId: 'user4',
    location: {
      latitude: 37.7608,
      longitude: -122.4177,
      city: 'San Francisco'
    },
    type: 'offer',
    exchangeType: 'both',
    price: 35,
    barterPreference: 'Open to trading for cooking lessons or tech help.',
    createdAt: '2023-09-30T14:45:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1581177049226-db7d05339441'
  },
  {
    id: 'skill9',
    title: 'Mindfulness Meditation Sessions',
    description: 'One-hour guided meditation sessions focused on stress reduction and mindfulness techniques.',
    category: 'wellness',
    userId: 'user5',
    location: {
      latitude: 37.7865,
      longitude: -122.4307,
      city: 'San Francisco'
    },
    type: 'offer',
    exchangeType: 'both',
    price: 20,
    barterPreference: 'Would love to trade for language practice or gardening help.',
    createdAt: '2023-12-05T17:30:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1545389336-cf090694435e'
  },
  {
    id: 'skill10',
    title: 'Yoga for Beginners',
    description: 'Private or small group yoga sessions tailored for complete beginners. Focus on proper form and gentle movements.',
    category: 'wellness',
    userId: 'user5',
    location: {
      latitude: 37.7865,
      longitude: -122.4307,
      city: 'San Francisco'
    },
    type: 'offer',
    exchangeType: 'payment',
    price: 30,
    createdAt: '2024-02-01T08:15:00Z',
    imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b'
  },
];

// Mock Community Challenges
export const mockChallenges: Challenge[] = [
  {
    id: 'challenge1',
    title: 'Teach 3 Neighbors a Skill',
    description: 'Share your knowledge with at least three neighbors this month. Document your teaching sessions!',
    startDate: '2024-04-01T00:00:00Z',
    endDate: '2024-04-30T23:59:59Z',
    participantsCount: 47,
    category: 'teaching',
    rewards: 'Community Champion badge and feature in our monthly newsletter'
  },
  {
    id: 'challenge2',
    title: 'Neighborhood Clean-Up',
    description: 'Organize or participate in a local clean-up event in your area. Every little bit helps!',
    startDate: '2024-04-15T00:00:00Z',
    endDate: '2024-05-15T23:59:59Z',
    participantsCount: 32,
    category: 'community',
    rewards: 'Environmental Hero badge and tree planted in your name'
  },
  {
    id: 'challenge3',
    title: 'Skill Swap Week',
    description: 'Trade skills with at least two different neighbors in a single week. Expand your knowledge!',
    startDate: '2024-05-01T00:00:00Z',
    endDate: '2024-05-31T23:59:59Z',
    participantsCount: 19,
    category: 'exchange',
    rewards: 'Skill Master badge and premium account features for 3 months'
  }
];

// Mock Community Events
export const mockEvents: Event[] = [
  {
    id: 'event1',
    title: 'Group Bike Repair Workshop',
    description: 'Bring your bikes for a community repair session. Experienced mechanics will be available to help and teach.',
    date: '2024-04-20',
    time: '10:00-14:00',
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      address: 'Golden Gate Park, Bandstand Area',
      city: 'San Francisco'
    },
    organizerId: 'user4',
    attendeeIds: ['user1', 'user2', 'user5'],
    category: 'skills',
    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6',
    maxAttendees: 15
  },
  {
    id: 'event2',
    title: 'Language Exchange Meetup',
    description: 'Practice Spanish, Mandarin, French and more in a casual setting. All levels welcome!',
    date: '2024-04-25',
    time: '18:00-20:00',
    location: {
      latitude: 37.7833,
      longitude: -122.4167,
      address: 'City Library, Conference Room B',
      city: 'San Francisco'
    },
    organizerId: 'user3',
    attendeeIds: ['user1', 'user2', 'user5'],
    category: 'language',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655',
    maxAttendees: 20
  },
  {
    id: 'event3',
    title: 'Community Garden Day',
    description: 'Help plant, weed, and maintain our neighborhood community garden. Tools and refreshments provided!',
    date: '2024-05-05',
    time: '09:00-13:00',
    location: {
      latitude: 37.7694,
      longitude: -122.4862,
      address: 'Sunshine Community Garden, 123 Green St',
      city: 'San Francisco'
    },
    organizerId: 'user1',
    attendeeIds: ['user3', 'user4', 'user5'],
    category: 'outdoors',
    imageUrl: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae',
    maxAttendees: 30
  }
];

// Mock Reviews
export const mockReviews: Review[] = [
  {
    id: 'review1',
    userId: 'user2',
    targetId: 'user1',
    skillId: 'skill1',
    rating: 5,
    comment: 'Emma\'s gardening class was amazing! I learned so much and now have a thriving herb garden.',
    createdAt: '2024-01-15T18:30:00Z'
  },
  {
    id: 'review2',
    userId: 'user1',
    targetId: 'user2',
    skillId: 'skill6',
    rating: 5,
    comment: 'Michael is a great cooking instructor. The pasta we made was delicious and I can now make it at home!',
    createdAt: '2024-02-03T19:45:00Z'
  },
  {
    id: 'review3',
    userId: 'user5',
    targetId: 'user3',
    skillId: 'skill3',
    rating: 4,
    comment: 'Sofia is patient and encouraging. My Spanish has improved significantly after just a few sessions.',
    createdAt: '2024-02-28T17:15:00Z'
  },
  {
    id: 'review4',
    userId: 'user3',
    targetId: 'user4',
    skillId: 'skill8',
    rating: 5,
    comment: 'James fixed my leaky sink and showed me how to prevent it in the future. Very knowledgeable!',
    createdAt: '2024-03-10T14:00:00Z'
  },
  {
    id: 'review5',
    userId: 'user4',
    targetId: 'user5',
    skillId: 'skill9',
    rating: 5,
    comment: 'Aisha\'s meditation session was exactly what I needed. I feel much more centered and relaxed.',
    createdAt: '2024-03-22T10:30:00Z'
  }
];
