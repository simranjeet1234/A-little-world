import type { AppConfig } from '../types';

/**
 * ============================================================================
 *  A LITTLE WORLD OF YOU - CENTRAL CONFIGURATION FILE
 * ============================================================================
 *  You can replace any of the placeholder text, images, memories, messages,
 *  and quiz questions here.
 *
 *  Image Placement Guide:
 *  - Save your custom photos in the `public/images/` directory.
 *  - Reference them as `/images/your-photo-name.jpg`.
 *  - E.g., replace `/images/main_portrait.jpg` with `/images/my_friend.jpg`.
 * ============================================================================
 */

export const config: AppConfig = {
  friendName: 'Bestie',
  websiteTitle: 'A Little World of You ✨',
  subtitle: 'A tiny corner of the internet, made just for you.',
  
  // Main portrait displayed in the hero section
  mainPortrait: '/images/main_portrait.jpg',

  // Hero collage photographs (scattered around the main portrait)
  heroCollagePhotos: [
    {
      id: 'hero-1',
      url: '/images/gallery_1.jpg',
      caption: 'Sunshine & Flowers 🌸',
      rotation: -6,
    },
    {
      id: 'hero-2',
      url: '/images/gallery_2.jpg',
      caption: 'Cozy Coffee Days ☕',
      rotation: 5,
    },
    {
      id: 'hero-3',
      url: '/images/gallery_3.jpg',
      caption: 'Under the Stars ✨',
      rotation: -4,
    },
    {
      id: 'hero-4',
      url: '/images/gallery_4.jpg',
      caption: 'Pure Happiness 🐾',
      rotation: 7,
    },
  ],

  // Full Gallery photos (/gallery)
  galleryPhotos: [
    {
      id: 'g-1',
      url: '/images/gallery_1.jpg',
      caption: 'Wildflowers in full bloom on a sunny afternoon',
      date: 'Summer Days',
      location: 'The Meadow',
      rotation: -3,
      category: 'Outdoors',
    },
    {
      id: 'g-2',
      url: '/images/gallery_2.jpg',
      caption: 'Matcha lattes, strawberry cake, and journaling',
      date: 'Weekend Cafe Routine',
      location: 'Little Bakery',
      rotation: 3,
      category: 'Cozy',
    },
    {
      id: 'g-3',
      url: '/images/gallery_3.jpg',
      caption: 'Stargazing with fairy lights and warm blankets',
      date: 'Starry Evening',
      location: 'Backyard Haven',
      rotation: -2,
      category: 'Memories',
    },
    {
      id: 'g-4',
      url: '/images/gallery_4.jpg',
      caption: 'Adorable little garden moments with cute friends',
      date: 'Sunny Morning',
      location: 'Flower Garden',
      rotation: 4,
      category: 'Sweet',
    },
    {
      id: 'g-5',
      url: '/images/main_portrait.jpg',
      caption: 'Radiant smile lighting up the room',
      date: 'Golden Hour',
      location: 'Home Sweet Home',
      rotation: -4,
      category: 'Portraits',
    },
    {
      id: 'g-6',
      url: '/images/gallery_1.jpg',
      caption: 'Collecting happy memories everywhere we go',
      date: 'Adventure Day',
      location: 'Sunny Park',
      rotation: 2,
      category: 'Outdoors',
    },
  ],

  // Little Things cards (/little-things)
  littleThings: [
    {
      id: 'lt-1',
      category: 'unique',
      title: 'Your Infectious Smile',
      shortDescription: 'How your laughter instantly brightens up any room.',
      detailedText: 'You have a genuine, warm smile that makes everyone around you instantly feel comfortable and at ease. It is truly your superpower!',
      iconName: 'Smile',
      colorTheme: 'pink',
    },
    {
      id: 'lt-2',
      category: 'quirk',
      title: 'The Cute Coffee Ritual',
      shortDescription: 'The exact specific way you prepare your favorite drink.',
      detailedText: 'Whether it is stirring milk precisely 3 times or needing that specific cozy mug, your little daily rituals are incredibly charming.',
      iconName: 'Coffee',
      colorTheme: 'cream',
    },
    {
      id: 'lt-3',
      category: 'favorite',
      title: 'Favorite Aesthetic',
      shortDescription: 'Pastel hues, cozy blankets, and warm fairy lights.',
      detailedText: 'You love turning any small corner into a warm, magical sanctuary filled with flowers, soft lights, and cozy warmth.',
      iconName: 'Sparkles',
      colorTheme: 'lavender',
    },
    {
      id: 'lt-4',
      category: 'smile',
      title: 'Endless Kindheartedness',
      shortDescription: 'Always remembering the tiny details about people.',
      detailedText: 'You remember favorite snacks, small worries, and things people love. Your thoughtfulness never goes unnoticed.',
      iconName: 'Heart',
      colorTheme: 'pink',
    },
    {
      id: 'lt-5',
      category: 'fun-fact',
      title: 'Master Playlist Curator',
      shortDescription: 'Finding the exact right song for every mood.',
      detailedText: 'Your music recommendations are 100% legendary. You somehow always know the exact song to lift spirits!',
      iconName: 'Music',
      colorTheme: 'lavender',
    },
    {
      id: 'lt-6',
      category: 'unique',
      title: 'Unstoppable Curiosity',
      shortDescription: 'Always eager to learn and explore new hobbies.',
      detailedText: 'From art to new places, your enthusiasm for discovering beautiful things makes every conversation exciting.',
      iconName: 'Compass',
      colorTheme: 'cream',
    },
  ],

  // Memory Lane timeline (/memories)
  memories: [
    {
      id: 'mem-1',
      date: 'Chapter 1',
      title: 'The Day We First Met',
      description: 'The start of an amazing friendship filled with endless laughter, shared secrets, and unforgettable moments.',
      imageUrl: '/images/gallery_1.jpg',
      sticker: '🌸',
      tag: 'Beginning',
    },
    {
      id: 'mem-2',
      date: 'Chapter 2',
      title: 'The Unexpected Roadtrip',
      description: 'Singing out loud to random songs, getting slightly lost, and finding the cutest roadside cafe ever.',
      imageUrl: '/images/gallery_2.jpg',
      sticker: '🚗',
      tag: 'Adventure',
    },
    {
      id: 'mem-3',
      date: 'Chapter 3',
      title: 'Late Night Stargazing & Talks',
      description: 'Sitting under fairy lights talking about dreams, funny stories, and future plans until 3 AM.',
      imageUrl: '/images/gallery_3.jpg',
      sticker: '✨',
      tag: 'Heartwarming',
    },
    {
      id: 'mem-4',
      date: 'Chapter 4',
      title: 'Celebrating Big Wins Together',
      description: 'Conquering challenges and popping confetti! Having a friend like you makes every success twice as sweet.',
      imageUrl: '/images/main_portrait.jpg',
      sticker: '🎉',
      tag: 'Milestone',
    },
  ],

  // For You messages (/for-you)
  messages: [
    {
      id: 'msg-1',
      envelopeTitle: 'Open when you need a smile 💛',
      subtitle: 'A gentle reminder of how amazing you are.',
      letterContent: `Hey there! 

Just in case nobody reminded you today: you are doing fantastic. Life gets busy, but your positivity and effort never go unnoticed. Take a deep breath, smile, and remember how bright you shine.

Whenever you need a pick-me-up, come back to your little world! ✨`,
      tag: 'Comfort',
      stampIcon: 'Sun',
      themeColor: '#FFF4E6',
    },
    {
      id: 'msg-2',
      envelopeTitle: 'Open when you are feeling tired 🍵',
      subtitle: 'Permission to rest and recharge.',
      letterContent: `Dear friend,

It is completely okay to pause, rest, and do absolutely nothing for a while. You don’t have to conquer the world every single day. Grab a warm cup of tea, wrap yourself in a soft blanket, and relax. 

You deserve all the peace and comfort in the world! 🌿`,
      tag: 'Rest',
      stampIcon: 'Coffee',
      themeColor: '#E8F5E9',
    },
    {
      id: 'msg-3',
      envelopeTitle: 'A little reminder for you 🌸',
      subtitle: 'Something I want you to always remember.',
      letterContent: `Never forget how unique and wonderful you are. Your kindness inspires people around you, and your presence makes hard days so much lighter. 

Thank you for being such an incredible person and a wonderful friend! 💖`,
      tag: 'Appreciation',
      stampIcon: 'Heart',
      themeColor: '#FCE4EC',
    },
    {
      id: 'msg-4',
      envelopeTitle: 'Open when you need courage 🌟',
      subtitle: 'You are stronger than you think.',
      letterContent: `Believe in yourself! You have overcome tough challenges before and you handled them with grace and strength. Whatever is on your mind right now, you’ve got this! 

Cheering for you always! 📣⭐`,
      tag: 'Encouragement',
      stampIcon: 'Star',
      themeColor: '#EDE7F6',
    },
  ],

  // Compliments for Fun Zone (/fun-zone)
  compliments: [
    'Your smile literally lights up the room! ✨',
    'You have the kindest heart and best vibe. 🌸',
    'Everything is 100x more fun when you are around! 🎈',
    'You are genuinely one of a kind. 💖',
    'Your taste in music/art is elite! 🎶',
    'You make the world a much warmer and sweeter place. 🧸',
    'If kindness was a superpower, you would be an Avenger! 🦸‍♀️',
    'You have a gift for making people feel heard and valued. 💌',
  ],

  // Interactive Quiz (/fun-zone)
  quizQuestions: [
    {
      id: 1,
      question: 'What is your ultimate recipe for a perfect cozy day?',
      options: [
        'Coffee, good books, and soft acoustic music 📖',
        'Exploring cute cafes and taking polaroid pictures 📸',
        'Stargazing with fairy lights and warm cocoa ✨',
        'All of the above combined into one magical day! 💖',
      ],
      correctAnswerIndex: 3,
      explanation: 'Correct! Every option is amazing, but having all of them makes the ultimate cozy day!',
    },
    {
      id: 2,
      question: 'What super skill do you possess without even trying?',
      options: [
        'Making people laugh effortlessly 🤭',
        'Finding the cutest aesthetic spots 🌸',
        'Giving the warmest hugs 🫂',
        'Being an incredible friend 👑',
      ],
      correctAnswerIndex: 3,
      explanation: 'Spot on! Being such a wonderful friend is your signature quality.',
    },
    {
      id: 3,
      question: 'If this little world had a official mascot, what would it be?',
      options: [
        'A fluffy kitten wearing a tiny flower crown 🐱🌸',
        'A cheerful golden retriever puppy 🐶',
        'A cozy sleeping panda 🐼',
        'A magical sparkling star 🌟',
      ],
      correctAnswerIndex: 0,
      explanation: 'A fluffy kitten with a flower crown matches the adorable pastel vibe perfectly!',
    },
  ],

  // Surprises for Fun Zone (/fun-zone)
  surprises: [
    {
      id: 'surp-1',
      title: 'Golden Secret Found! 🌟',
      message: 'You unlocked Surprise #1! Here is a virtual bouquet of endless happiness for you! 💐✨',
      imageUrl: '/images/gallery_1.jpg',
      emoji: '💐',
    },
    {
      id: 'surp-2',
      title: 'Cozy Snack Pass! 🍰',
      message: 'You unlocked Surprise #2! You have been granted 1 free slice of strawberry cake and hot mocha! 🍓☕',
      imageUrl: '/images/gallery_2.jpg',
      emoji: '🍰',
    },
    {
      id: 'surp-3',
      title: 'Starry Wish Granted! ✨',
      message: 'You unlocked Surprise #3! Make a wish right now — something wonderful is coming your way! 🌠',
      imageUrl: '/images/gallery_3.jpg',
      emoji: '⭐',
    },
  ],

  // Secret Room (/secret)
  secretRoom: {
    teaserTitle: 'Psst... there is something special waiting for you 🤫',
    teaserSubtitle: 'A hidden vault created just for you. Find 3 magical floating stars to unlock the secret!',
    hintText: 'Click on the 3 glowing stars scattered on the card below to reveal your surprise!',
    starsToFind: 3,
    revealedTitle: 'You Unlocked the Secret Room! 🎉✨',
    revealedMessage: `Congratulations! 💖

This little digital world was crafted with so much care and love just to bring a big smile to your face.

Never forget how special, appreciated, and loved you are every single day. Thank you for being YOU! 🌈⭐`,
    revealedImageUrl: '/images/main_portrait.jpg',
  },

  // Optional background ambient music path
  audioUrl: '',
};
