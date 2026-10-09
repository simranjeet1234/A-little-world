import type { AppConfig } from '../types';

/**
 * ============================================================================
 *  A LITTLE WORLD OF TIFRUU - CENTRAL CONFIGURATION FILE
 * ============================================================================
 */

export const config: AppConfig = {
  friendName: 'Tifruu',
  websiteTitle: 'A Little World of Tifruu ✨',
  subtitle: 'A tiny corner of the internet, made just for you.',
  
  // Main portrait displayed in the hero section
  mainPortrait: '/images/main_portrait.jpg',

  // Hero collage photographs (scattered around the main portrait)
  heroCollagePhotos: [
    {
      id: 'hero-1',
      url: '/images/photo_17.jpg',
      caption: 'Bench Days & Sunny Smiles 🍃',
      rotation: -6,
    },
    {
      id: 'hero-2',
      url: '/images/photo_21.jpg',
      caption: 'Outdoor Breezes & Green Trees 🌿',
      rotation: 5,
    },
    {
      id: 'hero-3',
      url: '/images/photo_22.jpg',
      caption: 'Garden Aesthetics ✨',
      rotation: -4,
    },
    {
      id: 'hero-4',
      url: '/images/photo_23.jpg',
      caption: 'Golden Glow Days ☀️',
      rotation: 7,
    },
  ],

  // Full Gallery photos (/gallery) - ALL UNIQUE UPLOADS
  galleryPhotos: [
    { id: 'g-main', url: '/images/main_portrait.jpg', caption: 'Radiant outdoor portrait in golden sunlight', date: 'Golden Hour', location: 'Garden Haven', rotation: -3, category: 'Portraits' },
    { id: 'g-1', url: '/images/photo_1.jpg', caption: 'Cozy moments and warm smiles', date: 'Happy Days', location: 'Sweet Spot', rotation: 2, category: 'Cozy' },
    { id: 'g-2', url: '/images/photo_2.jpg', caption: 'Capturing pure joy and laughter', date: 'Sunny Morning', location: 'City Walk', rotation: -2, category: 'Sweet' },
    { id: 'g-3', url: '/images/photo_3.jpg', caption: 'Beautiful aesthetic poses', date: 'Golden Hour', location: 'Highland Park', rotation: 3, category: 'Portraits' },
    { id: 'g-4', url: '/images/photo_4.jpg', caption: 'Chasing sunsets and clear skies', date: 'Weekend Vibe', location: 'Scenic View', rotation: -4, category: 'Outdoors' },
    { id: 'g-5', url: '/images/photo_5.jpg', caption: 'Effortless style and grace', date: 'Lovely Afternoon', location: 'Garden Path', rotation: 2, category: 'Portraits' },
    { id: 'g-6', url: '/images/photo_6.jpg', caption: 'Bright smiles that light up the day', date: 'Summer Days', location: 'Sunny Terrace', rotation: -3, category: 'Sweet' },
    { id: 'g-7', url: '/images/photo_7.jpg', caption: 'Nature walks under lush green trees', date: 'Nature Trail', location: 'Greenwood Park', rotation: 4, category: 'Outdoors' },
    { id: 'g-8', url: '/images/photo_8.jpg', caption: 'Unforgettable adventures and laughter', date: 'Day Trip', location: 'Cozy Spot', rotation: -2, category: 'Memories' },
    { id: 'g-9', url: '/images/photo_9.jpg', caption: 'Serene aesthetics and peaceful vibes', date: 'Chill Afternoon', location: 'Favorite Spot', rotation: 3, category: 'Aesthetic' },
    { id: 'g-10', url: '/images/photo_10.jpg', caption: 'Sweet candid moments', date: 'Golden Hours', location: 'Outdoor Lounge', rotation: -3, category: 'Portraits' },
    { id: 'g-11', url: '/images/photo_11.jpg', caption: 'Warm breeze and cheerful smiles', date: 'Sunny Vibe', location: 'Garden Fence', rotation: 2, category: 'Outdoors' },
    { id: 'g-12', url: '/images/photo_12.jpg', caption: 'Elegant candid captures', date: 'Special Memories', location: 'Highland Meadow', rotation: -4, category: 'Portraits' },
    { id: 'g-13', url: '/images/photo_13.jpg', caption: 'Radiant energy and happy vibes', date: 'Best Days', location: 'Sunny Courtyard', rotation: 3, category: 'Sweet' },
    { id: 'g-14', url: '/images/photo_14.jpg', caption: 'Peaceful moments in full bloom', date: 'Spring Time', location: 'Flower Garden', rotation: -2, category: 'Outdoors' },
    { id: 'g-15', url: '/images/photo_15.jpg', caption: 'Effortless cozy aesthetic', date: 'Cozy Afternoon', location: 'Backyard Haven', rotation: 4, category: 'Aesthetic' },
    { id: 'g-16', url: '/images/photo_16.jpg', caption: 'Charming smile under bright skies', date: 'Sunshine Days', location: 'Park Pavilion', rotation: -3, category: 'Portraits' },
    { id: 'g-17', url: '/images/photo_17.jpg', caption: 'Cozy sweater days under the big tree', date: 'Warm Autumn', location: 'Bench Meadow', rotation: 3, category: 'Outdoors' },
    { id: 'g-18', url: '/images/photo_18.jpg', caption: 'Joyful laughs and golden hours', date: 'Sunset Vibe', location: 'Scenic Spot', rotation: -2, category: 'Memories' },
    { id: 'g-19', url: '/images/photo_19.jpg', caption: 'Capturing beauty in everyday moments', date: 'Lovely Day', location: 'City Courtyard', rotation: 4, category: 'Aesthetic' },
    { id: 'g-20', url: '/images/photo_20.jpg', caption: 'Unstoppable positive energy', date: 'Happy Hour', location: 'Rooftop Cafe', rotation: -3, category: 'Sweet' },
    { id: 'g-21', url: '/images/photo_21.jpg', caption: 'Clear blue skies and towering trees', date: 'Nature Walks', location: 'Highland Forest', rotation: 3, category: 'Outdoors' },
    { id: 'g-22', url: '/images/photo_22.jpg', caption: 'Charming garden fence snapshots', date: 'Sunny Day', location: 'Flower Bed', rotation: -2, category: 'Aesthetic' },
    { id: 'g-23', url: '/images/photo_23.jpg', caption: 'Effortless elegance outdoors', date: 'Golden Glow', location: 'Lounge Deck', rotation: 4, category: 'Portraits' },
    { id: 'g-24', url: '/images/photo_24.jpg', caption: 'Peaceful afternoon sunsets', date: 'Twilight Vibe', location: 'Panorama Deck', rotation: -3, category: 'Cozy' },
    { id: 'g-25', url: '/images/photo_25.jpg', caption: 'Sparkling eyes and genuine smiles', date: 'Sweet Moments', location: 'City Walk', rotation: 3, category: 'Portraits' },
    { id: 'g-26', url: '/images/photo_26.jpg', caption: 'Pure joy shared together', date: 'Friendship Days', location: 'Little Spot', rotation: -2, category: 'Memories' },
    { id: 'g-27', url: '/images/photo_27.jpg', caption: 'Warm ambient glow and cute poses', date: 'Evening Magic', location: 'Lantern Garden', rotation: 4, category: 'Aesthetic' },
    { id: 'g-28', url: '/images/photo_28.jpg', caption: 'Serene moments surrounded by green', date: 'Quiet Retreat', location: 'Botanical Park', rotation: -3, category: 'Outdoors' },
    { id: 'g-29', url: '/images/photo_29.jpg', caption: 'Spontaneous and fun poses', date: 'Adventure Day', location: 'Sunny Hill', rotation: 3, category: 'Sweet' },
    { id: 'g-30', url: '/images/photo_30.jpg', caption: 'Sun-kissed aesthetic shots', date: 'Golden Hour', location: 'Patio Haven', rotation: -2, category: 'Portraits' },
    { id: 'g-31', url: '/images/photo_31.jpg', caption: 'Nature exploration and fresh air', date: 'Forest Walk', location: 'Greenwood Trail', rotation: 4, category: 'Outdoors' },
    { id: 'g-32', url: '/images/photo_32.jpg', caption: 'Heartwarming laughter and good vibes', date: 'Best Times', location: 'Favorite Spot', rotation: -3, category: 'Cozy' },
    { id: 'g-33', url: '/images/photo_33.jpg', caption: 'Glowing smiles in warm daylight', date: 'Summer Sunshine', location: 'Courtyard', rotation: 3, category: 'Portraits' },
    { id: 'g-34', url: '/images/photo_34.jpg', caption: 'Every picture tells a happy story', date: 'Memorable Day', location: 'Backyard', rotation: -2, category: 'Memories' },
    { id: 'g-35', url: '/images/photo_35.jpg', caption: 'Cute scrapbook polaroids', date: 'Lovely Vibe', location: 'Meadow', rotation: 4, category: 'Aesthetic' },
    { id: 'g-36', url: '/images/photo_36.jpg', caption: 'Pure warmth and cheerfulness', date: 'Bright Days', location: 'Terrace', rotation: -3, category: 'Sweet' },
    { id: 'g-37', url: '/images/photo_37.jpg', caption: 'Surrounded by nature and sunshine', date: 'Outdoors Day', location: 'Garden Trail', rotation: 3, category: 'Outdoors' },
    { id: 'g-38', url: '/images/photo_38.jpg', caption: 'Radiant memory snapshot', date: 'Special Chapter', location: 'Sunset Hill', rotation: -2, category: 'Memories' },
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
      title: 'The Trip to the Mountains ⛰️',
      description: 'Breathtaking mountain views and unforgettable fresh air.',
      imageUrl: '/images/photo_17.jpg',
      sticker: '⛰️',
      tag: 'Mountain Trip',
    },
    {
      id: 'mem-2',
      date: 'Chapter 2',
      title: 'The Unexpected Roadtrip 🚗',
      description: 'Singing out loud to random songs on the open road.',
      imageUrl: '/images/photo_21.jpg',
      sticker: '🚗',
      tag: 'Roadtrip',
    },
    {
      id: 'mem-3',
      date: 'Chapter 3',
      title: 'Outdoor Afternoon & Talks 🌿',
      description: 'Sitting under green trees talking about dreams.',
      imageUrl: '/images/photo_22.jpg',
      sticker: '✨',
      tag: 'Outdoors',
    },
    {
      id: 'mem-4',
      date: 'Chapter 4',
      title: 'Celebrating Big Wins 🎉',
      description: 'Conquering challenges and celebrating sweetness together.',
      imageUrl: '/images/main_portrait.jpg',
      sticker: '🎉',
      tag: 'Milestone',
    },
    {
      id: 'mem-5',
      date: 'Chapter 5',
      title: 'Golden Hour Smiles ☀️',
      description: 'Sun-kissed moments and warm daylight.',
      imageUrl: '/images/photo_23.jpg',
      sticker: '☀️',
      tag: 'Sunshine',
    },
    {
      id: 'mem-6',
      date: 'Chapter 6',
      title: 'Café Days & Good Vibes ☕',
      description: 'Cozy coffee dates and endless laughter.',
      imageUrl: '/images/photo_20.jpg',
      sticker: '☕',
      tag: 'Cozy',
    },
    {
      id: 'mem-7',
      date: 'Chapter 7',
      title: 'Garden Strolls & Greenery 🌸',
      description: 'Peaceful walks surrounded by nature in full bloom.',
      imageUrl: '/images/photo_28.jpg',
      sticker: '🌸',
      tag: 'Nature',
    },
    {
      id: 'mem-8',
      date: 'Chapter 8',
      title: 'Sunset Views 🌅',
      description: 'Watching twilight skies and soft evening glow.',
      imageUrl: '/images/photo_24.jpg',
      sticker: '🌅',
      tag: 'Sunset',
    },
    {
      id: 'mem-9',
      date: 'Chapter 9',
      title: 'Cozy Afternoon Moments 🧸',
      description: 'Simple moments filled with warmth and smiles.',
      imageUrl: '/images/photo_15.jpg',
      sticker: '🧸',
      tag: 'Warmth',
    },
  ],

  // For You messages (/for-you)
  messages: [
    {
      id: 'msg-1',
      envelopeTitle: 'Open when you need a smile 💛',
      subtitle: 'A gentle reminder of how amazing you are.',
      letterContent: `Hey Tifruu! 

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
      letterContent: `Dear Tifruu,

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
      letterContent: `Never forget how unique and wonderful you are, Tifruu. Your kindness inspires people around you, and your presence makes hard days so much lighter. 

Thank you for being such an incredible person and a wonderful friend! 💖`,
      tag: 'Appreciation',
      stampIcon: 'Heart',
      themeColor: '#FCE4EC',
    },
    {
      id: 'msg-4',
      envelopeTitle: 'Open when you need courage 🌟',
      subtitle: 'You are stronger than you think.',
      letterContent: `Believe in yourself, Tifruu! You have overcome tough challenges before and you handled them with grace and strength. Whatever is on your mind right now, you’ve got this! 

Cheering for you always! 📣⭐`,
      tag: 'Encouragement',
      stampIcon: 'Star',
      themeColor: '#EDE7F6',
    },
  ],

  // Compliments
  compliments: [
    'Your smile literally lights up the room, Tifruu! ✨',
    'You have the kindest heart and best vibe. 🌸',
    'Everything is 100x more fun when you are around! 🎈',
    'You are genuinely one of a kind. 💖',
    'Your taste in music/art is elite! 🎶',
    'You make the world a much warmer and sweeter place. 🧸',
    'If kindness was a superpower, you would be an Avenger! 🦸‍♀️',
    'You have a gift for making people feel heard and valued. 💌',
  ],

  // Interactive Quiz
  quizQuestions: [
    {
      id: 1,
      question: 'What is your ultimate recipe for a perfect cozy day?',
      options: [
        'Good books and soft acoustic music 📖',
        'Exploring cute spots and taking polaroid pictures 📸',
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

  // Surprises
  surprises: [
    {
      id: 'surp-1',
      title: 'Golden Secret Found! 🌟',
      message: 'You unlocked Surprise #1! Here is a virtual bouquet of endless happiness for you! 💐✨',
      imageUrl: '/images/photo_17.jpg',
      emoji: '💐',
    },
    {
      id: 'surp-2',
      title: 'Cozy Snack Pass! 🍰',
      message: 'You unlocked Surprise #2! You have been granted 1 free slice of strawberry cake! 🍓🍰',
      imageUrl: '/images/photo_21.jpg',
      emoji: '🍰',
    },
    {
      id: 'surp-3',
      title: 'Starry Wish Granted! ✨',
      message: 'You unlocked Surprise #3! Make a wish right now — something wonderful is coming your way! 🌠',
      imageUrl: '/images/photo_22.jpg',
      emoji: '⭐',
    },
  ],

  // Secret Room (/secret)
  secretRoom: {
    teaserTitle: 'Psst... there is something special waiting for you 🤫',
    teaserSubtitle: 'A hidden vault created just for Tifruu. Find 3 magical floating stars to unlock the secret!',
    hintText: 'Click on the 3 glowing stars scattered on the card below to reveal your surprise!',
    starsToFind: 3,
    revealedTitle: 'You Unlocked the Secret Room! 🎉✨',
    revealedMessage: `Congratulations Tifruu! 💖

This little digital world was crafted with so much care and love just to bring a big smile to your face.

Never forget how special, appreciated, and loved you are every single day. Thank you for being YOU! 🌈⭐`,
    revealedImageUrl: '/images/photo_44.jpg',
  },

  // Optional background ambient music path
  audioUrl: '',
};
