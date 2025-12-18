export type Mood =
  | 'hopeful'
  | 'reflective'
  | 'nostalgic'
  | 'joyful'
  | 'peaceful'
  | 'grateful'


export type Persona =
  | 'Mommy'
  | 'Papa'
  | 'Grandma'
  | 'Grandpa'
  | 'tita'
  | 'Aso ng isda ng chuk'

export const WHOIS: {
  id: Persona
  label: string
  emoji: string
  description: string
}[] = [
    {
      id: 'Mommy',
      label: 'Mommy',
      emoji: '👩',
      description: 'Your mom',
    },
    {
      id: 'Papa',
      label: 'Papa',
      emoji: '👨',
      description: 'Your dad',
    },
    {
      id: 'Grandma',
      label: 'Grandma',
      emoji: '👵',
      description: 'Your grandma',
    },
    {
      id: 'Grandpa',
      label: 'Grandpa',
      emoji: '👴',
      description: 'Your grandpa',
    },
    {
      id: 'tita',
      label: 'tita',
      emoji: '👩',
      description: 'Your auntie',
    },
    {
      id: 'Aso ng isda ng chuk',
      label: 'Aso ng isda ng chuk',
      emoji: '🐕',
      description: 'aso ng aso ng aso ng chuk',
    },
  ]


export const MOODS: {
  id: Mood
  label: string
  emoji: string
  description: string
}[] = [
    {
      id: 'hopeful',
      label: 'Hopeful',
      emoji: '✨',
      description: 'Looking forward with optimism',
    },
    {
      id: 'reflective',
      label: 'Reflective',
      emoji: '🌙',
      description: 'Contemplating life and time',
    },
    {
      id: 'nostalgic',
      label: 'Nostalgic',
      emoji: '🍂',
      description: 'Remembering the past fondly',
    },
    {
      id: 'joyful',
      label: 'Joyful',
      emoji: '🎉',
      description: 'Celebrating with happiness',
    },
    {
      id: 'peaceful',
      label: 'Peaceful',
      emoji: '🕊️',
      description: 'Finding calm and serenity',
    },
    {
      id: 'grateful',
      label: 'Grateful',
      emoji: '💛',
      description: 'Appreciating what we have',
    },
  ]

export interface Poem {
  id: string
  title: string
  whois: Persona[]
  author: string
  stanzas: string[][]
  password: string
  moods: Mood[]
}

export const poems: Poem[] = [
  {
    // poem 1
    id: 'swimming-in-the-midst',
    title: 'Swimming in the Midst',
    whois: ['Mommy', 'Papa', 'Grandma', 'Grandpa'],
    author: 'Francis Lawrence P. Morales',
    password: 'applicationdevelopmentandemergingtechnologies',
    moods: ['grateful', 'reflective', 'hopeful'],
    stanzas: [
      [
        'Through the quiet nights when sleep would not come,',
        'When my mind was a tempest, my thoughts undone,',
        'You stayed by my side, steady and near,',
        'Your presence alone quieted my fear.',
      ],
      [
        'Through autistic burnout, when the world felt too loud,',
        'I retreated, I faltered, I hid in a shroud.',
        'Yet you never gave up, never turned away,',
        'Your patience a light at the end of my day.',
      ],
      [
        'Through that May fifteenth, that sudden, sharp fall,',
        'You caught me, you cradled me through it all.',
        'Pain and fear twisted my heart and my bones,',
        'Yet you bore the burden as if it were your own.',
      ],
      [
        'Through OJT struggles, the trials unknown,',
        'You cheered from the sidelines, though tired and alone.',
        'Every challenge I faced, every hurdle I crossed,',
        'You reminded me gently: nothing is lost.',
      ],
      [
        'Through AppDev, SE1, and HCI fights,',
        'Through long coding nights and hopeless plights,',
        'Through tears I shed over screens and designs,',
        "You held me up, said, \"You'll be fine.\"",
      ],
      [
        'Through hardheadedness, my stubborn ways,',
        'Through arguments, refusals, and difficult days,',
        'You did not falter, you did not retreat,',
        'You met my walls with love, calm and complete.',
      ],
      [
        'Through sickness and illness that weakened my frame,',
        'Through days filled with struggle, yet never with shame,',
        'You nurtured, you healed, you held me close,',
        'Your care a river that endlessly flows.',
      ],
      [
        'Through every heartbreak, every silent despair,',
        'Through every moment I forgot to care,',
        'You reminded me gently, with infinite grace,',
        'That I am held, I am safe, in this place.',
      ],
      [
        'Through trials unseen by the rest of the world,',
        'Through the storms of my mind, as life unfurled,',
        'You carried me forward, though weary and spent,',
        'Your love an armor, unbroken, unbent.',
      ],
      [
        'Through everything—fear, fatigue, and pain,',
        'Through moments I faltered, again and again,',
        'Your sacrifice shines, unwavering, true,',
        'A testament, parents, of love like you.',
      ],
      [
        'Through every storm, through darkness, through rain,',
        'Through pain, through struggle, through sorrow, through strain,',
        'You never gave up, you never let go,',
        'Through every storm, your love helped me grow.',
      ],
    ],
  },
  {
    // poem 2
    id: 'a-year-of-recall',
    title: 'A Year of Recall',
    whois: ['Mommy'],
    author: 'Francis Lawrence P. Morales',
    password: 'dana1',
    moods: ['hopeful', 'peaceful', 'grateful'],
    stanzas: [
      [
        'I am the New Year, and I come to you pure and unstained,',
        'Fresh from the hand of God.',
        'Each day, a precious pearl to you is given',
        'That you must string upon the silver thread of life.',
      ],
      [
        'A new year rose, pale light on weary skies,',
        'Mirage vanished, Vios humming where hope lies.',
        'Burnout spread like wildfire in a frozen mind,',
        'Tears traced the cracks, solace hard to find.',
      ],
      [
        'Classes began, the world spun sharp and cold,',
        'AppDev shadows whispering, stories untold.',
        'Each night a river of worry and quiet despair,',
        'Yet somewhere inside, a stubborn spark dared.',
      ],
      [
        "School's mountain loomed, jagged and immense,",
        "Burnout's grip tightened, pain dense and intense.",
        'Every step forward felt a battle unseen,',
        'Yet the heart refused to fold in the machine.',
      ],
      [
        'Professors leaned quietly, hands unseen,',
        'Trying to untangle the chaos within the screen.',
        'Their effort a candle in an unlit hall,',
        'Softly reminding that even small lights call.',
      ],
      [
        'AppDev midterm, alone, yet victory flared,',
        'Amid group storms, I learned how to be prepared.',
        'Professors reached for the hidden threads of thought,',
        'Untangling burnout battles I had long fought.',
      ],
      [
        'The semester a rollercoaster, loops twisting high,',
        'Moments of fear, laughter, and the occasional sigh.',
        'In the turmoil, lessons etched like deep-rooted trees,',
        'Shaping my mind with subtle expertise.',
      ],
      [
        'Finally a team, a small handhold in the dark,',
        'Yet burnout still clawed, leaving its mark.',
        'GE performance climbed like fragile dawn light,',
        'Through tears and tremors, I clung to the fight.',
      ],
      [
        "A year past loss, heartbreak's quiet anniversary,",
        'Pain whispered softly, yet life still carried me.',
        'Each step forward trembled but refused to fall,',
        'Through sorrow, a steadying hope began to call.',
      ],
      [
        'May fifteenth, metal collided, hearts raced,',
        'Chaos spun, yet no harm, no life displaced.',
        'First AppDev defense fell like a shattered moon,',
        'Second rose triumphantly, lessons in tune.',
      ],
      [
        'Fear and relief danced, shadows intertwined,',
        'Resilience whispered softly, "you will be fine."',
        'Through mistakes and panic, strength quietly grew,',
        "Life's fragile thread reminded me what to pursue.",
      ],
      [
        "A sudden victory cracked burnout's tight shell,",
        'OJT doors opened, a Baypointe tale to tell.',
        'Vlogsite creation, a spark through the gloom,',
        'Hope stretching slowly, painting away the room.',
      ],
      [
        'Momentum gathered like rivers after rain,',
        'Each stride forward washing away old pain.',
        'Lessons of patience, focus, and quiet will,',
        'Etched themselves slowly, the heart growing still.',
      ],
      [
        'OJT began, fear coiled in every hall,',
        'Sickness struck, yet I answered the call.',
        'Disorder reigned, chaos clawed at the plan,',
        'Yet vlogsite completion proved what I can.',
      ],
      [
        'Toyota held the car, parts delayed in time,',
        'Persistence humming like an old, steady rhyme.',
        "Through struggle, exhaustion, and worry's tight grip,",
        'I kept moving forward, refusing to slip.',
      ],
      [
        'Two hundred two hours, OJT triumph true,',
        'SIPPC defense sparkling, dreams breaking through.',
        'Seminar and activity tallies over the line,',
        'Trello and Jira shaping order from design.',
      ],
      [
        'Growth crystallized in structure and care,',
        'Skill woven quietly in months of despair.',
        'Organization tamed chaos, balance restored,',
        'Achievement and learning, inseparably stored.',
      ],
      [
        "Mama's surprise flight, laughter in my chest,",
        'Gifts from afar, warmth filling the rest.',
        'Birthday candles flickered, shining hope through gloom,',
        "Moments of love blossomed in life's quiet room.",
      ],
      [
        'Respite embraced after storms long and vast,',
        'Memories collected to treasure and cast.',
        'A pause to breathe, a gentle reprieve,',
        'Reminders of love no trial could deceive.',
      ],
      [
        'Mama departed, midterms looming high,',
        'Flew home for All Saints under gray autumn sky.',
        'Exams like mountains, yet courage remained,',
        'Trello boards glimmered, organization maintained.',
      ],
      [
        'Each fleeting moment stacked with quiet might,',
        'Through stress, flights, and deadlines in sight.',
        'A dance of persistence across time and space,',
        'Marking the struggle, the steadying grace.',
      ],
      [
        'Return flight taken, coding battles ensued,',
        'Family loss struck, grief harshly renewed.',
        'Abie Pajaro defense left panels aghast,',
        'Zero sleep, zombie steps through each task.',
      ],
      [
        'CSRM conquered in a single stroke,',
        'Strength rising quietly from every poke.',
        'Through exhaustion, sorrow, and relentless demand,',
        'I found resilience that would forever stand.',
      ],
      [
        'Final exams raged like storms at sea,',
        'Puyaters devoured, yet mind stayed free.',
        '51Talk tita resolved, Piaya in hand,',
        "Triple Defense held, panels couldn't withstand.",
      ],
      [
        'Christmas in Tagaytay, cold biting deep,',
        '2 AM disagreements, yet hearts still keep.',
        'Through a year of chaos, triumph, and strife,',
        '2025 passed, carving strength into life.',
      ],
    ],
  },
  {
    // poem 3
    id: 'new-years-day',
    title: "New Year's Day",
    whois: ['Mommy'],
    author: 'Christina Rossetti',
    password: 'dana2',
    moods: ['reflective', 'nostalgic'],
    stanzas: [
      [
        'Passing away, saith the World, passing away:',
        'Chances, beauty and youth sapped day by day:',
        'Thy life never continueth in one stay.',
        'Is the eye waxen dim, is the dark hair changing to grey',
      ],
      [
        'That hath won neither laurel nor bay?',
        'I shall clothe myself in Spring and bud in May:',
        'Thou, root-stricken, shalt not rebuild thy decay',
        'On my bosom for aye.',
      ],
      [
        'Then I answered: Yea.',
        'Passing away, saith my Soul, passing away:',
        'With its burden of fear and hope, of labour and play;',
        'Hearken what the past doth witness and say:',
      ],
      [
        'Rust in thy gold, a moth is in thine array,',
        'A canker is in thy bud, thy leaf must decay.',
        'At midnight, at cockcrow, at morning, one certain day,',
        'Lo the Bridegroom shall come and shall not delay.',
      ],
    ],
  },
  {
    id: 'a-new-years-burden',
    title: "A New Year's Burden",
    whois: ['Mommy'],
    author: 'Dante Gabriel Rossetti',
    password: 'dana3',
    moods: ['joyful', 'hopeful'],
    stanzas: [
      [
        'Along the grass sweet airs are blown',
        'Our way this day in Spring.',
        'Of all the songs that we have known',
        'Now which one shall we sing?',
      ],
      [
        'Not that, my love, ah no!—',
        'Not this, my love? why, so!—',
        'Yet both were ours, but hours will come and go.',
        'The breathing Spring once more will bring.',
      ],
      [
        'This day the air is new and strange,',
        'The sun shines bright and clear;',
        'And all the world seems full of change,',
        'And hope for the new year.',
      ],
      [
        'So let us sing a song of cheer,',
        'And welcome in the Spring;',
        'For though the old year disappear,',
        'New joys the new year bring.',
      ],
    ],
  },
  {
    id: 'death-of-the-old-year',
    title: 'The Death of the Old Year',
    whois: ['Mommy'],
    author: 'Alfred, Lord Tennyson',
    password: 'dana4',
    moods: ['nostalgic', 'reflective'],
    stanzas: [
      [
        'Full knee-deep lies the winter snow,',
        'And the winter winds are wearily sighing:',
        'Toll ye the church bell sad and slow,',
        'And tread softly and speak low,',
        'For the old year lies a-dying.',
      ],
      [
        'Old year you must not die;',
        'You came to us so readily,',
        'You lived with us so steadily,',
        'Old year you shall not die.',
      ],
      [
        'He lieth still: he doth not move:',
        'He will not see the dawn of day.',
        'He hath no other life above.',
        'He gave me a friend and a true true-love',
        "And the New-year will take 'em away.",
      ],
      [
        'Old year, you shall not go;',
        'So long you have been with us,',
        'Such joy you have been to us,',
        'Old year, you shall not go.',
      ],
    ],
  },
  {
    id: 'new-years-eve',
    title: "New Year's Eve",
    whois: ['Mommy'],
    author: 'John Clare',
    password: 'dana5',
    moods: ['hopeful', 'nostalgic', 'peaceful'],
    stanzas: [
      [
        'Old year, farewell! and welcome, new!',
        'With all thy hopes and fears;',
        'We part with sighs, we meet with tears,',
        'And mingle joy with sorrow too.',
      ],
      [
        "The old year's sun has set at last,",
        'Its light no more we see;',
        'But memory holds the happy past,',
        'And hope looks on to thee.',
      ],
      [
        'New year, we greet thee with a prayer,',
        'That all thy days be bright;',
        'That peace and love be everywhere,',
        'And wrong give way to right.',
      ],
    ],
  },
  {
    id: 'the-old-year',
    title: 'The Old Year',
    whois: ['Mommy'],
    author: 'John Greenleaf Whittier',
    password: 'dana6',
    moods: ['reflective', 'peaceful'],
    stanzas: [
      [
        'The mossy marbles rest',
        'On the lips that he has prest',
        'In their bloom,',
        'And the names he loved to hear',
        'Have been carved for many a year',
        'On the tomb.',
      ],
      [
        'My spirit ran before,',
        "And I said, 'A year is o'er,",
        'Come what may;',
        "But the next year's buds shall bring",
        'The same sweet flowers of spring,',
        "Come what may.'",
      ],
      [
        'So I turned me to the past,',
        "And I said, 'The die is cast,",
        'Come what may;',
        'I will live as I have lived,',
        'And love as I have loved,',
        "Come what may.'",
      ],
    ],
  },
  {
    id: 'auld-lang-syne',
    title: 'Auld Lang Syne',
    whois: ['Mommy'],
    author: 'Robert Burns',
    password: 'dana7',
    moods: ['nostalgic', 'joyful', 'grateful'],
    stanzas: [
      [
        'Should auld acquaintance be forgot,',
        'And never brought to mind?',
        'Should auld acquaintance be forgot,',
        'And auld lang syne?',
      ],
      [
        'For auld lang syne, my jo,',
        'For auld lang syne,',
        "We'll tak' a cup o' kindness yet,",
        'For auld lang syne.',
      ],
      [
        "And surely ye'll be your pint-stowp!",
        "And surely I'll be mine!",
        "And we'll tak' a cup o' kindness yet,",
        'For auld lang syne.',
      ],
      [
        'We twa hae run about the braes,',
        "And pou'd the gowans fine;",
        "But we've wander'd mony a weary fit,",
        "Sin' auld lang syne.",
      ],
      [
        "We twa hae paidl'd in the burn,",
        'Frae morning sun till dine;',
        "But seas between us braid hae roar'd",
        "Sin' auld lang syne.",
      ],
      [
        "And there's a hand, my trusty fiere!",
        "And gie's a hand o' thine!",
        "And we'll tak' a right gude-willie waught,",
        'For auld lang syne.',
      ],
    ],
  },
  {
    id: 'a-prayer-for-the-new-year',
    title: 'A Prayer for the New Year',
    whois: ['Mommy'],
    author: 'Anonymous',
    password: 'dana8',
    moods: ['peaceful', 'grateful', 'hopeful'],
    stanzas: [
      [
        'Lord, in this new year that begins,',
        'Grant me the wisdom to see',
        'The beauty in each passing day,',
        'And the grace to simply be.',
      ],
      [
        'Help me to cherish those I love,',
        'To speak with kindness true,',
        'To find the strength in quiet moments,',
        'And start each day anew.',
      ],
      [
        'May I walk with gentle footsteps,',
        "Leave light where'er I go,",
        'And may the seeds of hope I plant',
        "In others' hearts still grow.",
      ],
      [
        'As midnight bells ring out tonight,',
        'I offer thanks for all—',
        'For lessons learned and love received,',
        'For rising after fall.',
      ],
    ],
  },
  {
    id: 'midnight-threshold',
    title: 'Midnight Threshold',
    whois: ['Mommy'],
    author: 'Anonymous',
    password: 'dana9',
    moods: ['reflective', 'hopeful'],
    stanzas: [
      [
        'We stand upon the threshold now,',
        'Where old meets new in time,',
        'The clock strikes twelve, the world holds breath,',
        'And midnight bells do chime.',
      ],
      [
        'Behind us lie the faded days,',
        'Of joy and sorrow mixed,',
        'Before us stretches unknown paths,',
        'With nothing yet affixed.',
      ],
      [
        'So raise a glass to what has been,',
        'And what is yet to come,',
        'For in this moment, brief and bright,',
        'All possibilities are one.',
      ],
    ],
  },
  {
    id: 'winters-turning',
    title: "Winter's Turning",
    whois: ['Mommy'],
    author: 'Anonymous',
    password: 'dana10',
    moods: ['peaceful', 'hopeful', 'grateful'],
    stanzas: [
      [
        'The frost upon the window pane',
        'Draws patterns silver-white,',
        'As we gather close together',
        'On this longest, darkest night.',
      ],
      [
        'Yet in the darkness, hope persists,',
        "A candle's steady flame,",
        'Reminding us that light returns,',
        'Though seasons never stay the same.',
      ],
      [
        'So let us mark this turning point,',
        'With reverence and with cheer,',
        'For every ending holds within',
        'The promise of a new frontier.',
      ],
      [
        'The stars above bear witness now,',
        'To vows we softly make,',
        'To live with purpose, love with depth,',
        'And give more than we take.',
      ],
    ],
  },
  {
    id: 'fishaso',
    title: "fish dog chuk",
    whois: ['Aso ng isda ng chuk'],
    author: 'Anonymous',
    password: 'dana11',
    moods: ['grateful', 'nostalgic', 'reflective'],
    stanzas: [
      [
        "Achukanababs",
        'Achuka chuka chuka chuka chukana',
        'Chukana chukana babs',
        'Achookanachukana',
      ],
      [
        "Aso ng isda ng chuk ng fish",
        "fish dog chuk",
        'Aso ng aso ng achuka chuka chukanababs',
        'Achookanachukanababs',
      ],
      [
        'Chukanachukanachukana',
        'Achukachukachukana',
        "chukachukachukachukachukachukanababs",
        'Achookanachukanababs',
      ]
    ],
  },
]

export const SITE_PASSWORD = 'Obedience'
