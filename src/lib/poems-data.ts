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
    whois: ['Mommy', 'Papa', 'Grandma', 'Grandpa', 'tita'],
    author: 'Francis Lawrence P. Morales',
    password: 'yearofrecall',
    moods: ['reflective', 'hopeful', 'grateful'],
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
    id: 'stories-of-me',
    title: 'Stories of Me',
    whois: ['Mommy', 'Papa', 'Grandma', 'Grandpa'],
    author: 'Francis Lawrence P. Morales',
    password: 'achukayo',
    moods: ['nostalgic', 'reflective', 'hopeful'],
    stanzas: [
      [
        'They tell stories of me, small and restless,',
        'Crawling under barricades, stirring the sleeping,',
        'A whisper of mischief, a shadow in motion,',
        'Eyes wide with curiosity, always creeping.',
      ],
      [
        '“Achukayo, achukayo,” I called without end,',
        'A chant repeated until walls seemed to bend.',
        '“It’s getting dark, it’s getting dark,” I warned,',
        'Echoes of fear, in a small voice adorned.',
      ],
      [
        'Soft mellow songs filled my little world,',
        'From radio or CD, gentle melodies swirled.',
        'Minecraft blocks became kingdoms I owned,',
        'A pixelated universe where my heart had grown.',
      ],
      [
        'Everything around me, a shade of white,',
        'A brightness, a blank canvas, soft and light.',
        'Yet life began with struggle I could not name,',
        'Hospital walls and tubes, a tiny body aflame.',
      ],
      [
        'Tubercolosis and weak blood, my first test,',
        'A week of tubes, of doctors, no rest.',
        'Therapies endless, a routine of care,',
        'Hands of strangers and family everywhere.',
      ],
      [
        'Through cries and whispers, the world shaped me,',
        'A mix of fragility, stubborn energy.',
        'Even small, even pale, I carved my own way,',
        'A child of resilience, learning to stay.',
      ],
      [
        'They tell me I loved repetition and sound,',
        'Echoes of comfort wherever it was found.',
        'Soft songs, soft voices, the blocks I stacked,',
        'Little worlds built while the real world unpacked.',
      ],
      [
        'A memory painted in white and soft glow,',
        'Mischief and fear, learning to grow.',
        'From hospitals to Minecraft, from night to day,',
        'A child emerged, in her own vivid way.',
      ],
    ],
  },
  {
    // poem 4
    id: 'a-mothers-sacrifice',
    title: "A mother's sacrifice",
    whois: ['Mommy'],
    author: 'Francis Lawrence P. Morales',
    password: 'Danafel',
    moods: ['grateful', 'reflective', 'joyful'],
    stanzas: [
      [
        'Twenty years abroad, no Philippine Christmas lights,',
        'No parols, no feasts, no festive nights.',
        'Yet every sacrifice, silent and grand,',
        'Built a life for me with her careful hand.',
      ],
      [
        'From junior accountant to assistant manager climbed,',
        'Numbers and ledgers, responsibilities primed.',
        'Abu Issa Holdings held her days and nights,',
        'Yet her love for me shone, a guiding light.',
      ],
      [
        'Video calls bridged oceans wide,',
        'Moments together, though miles divide.',
        'Homecomings rare, yet hearts entwined,',
        'A mother’s presence never far behind.',
      ],
      [
        'Each vacation in the Philippines, a monthlong affair,',
        'Except the one where I faced battles beyond compare.',
        'Through fear, exhaustion, and tears unknown,',
        'Her support unwavering, her love shown.',
      ],
      [
        'COVID-19 struck, isolation confined,',
        'The world paused, yet she never declined.',
        'Through silence and stillness, through distant despair,',
        'Her care reached me, always there.',
      ],
      [
        'Though I bugged her endlessly, every single day,',
        'She met my chaos with patience, come what may.',
        'Calm and composed, in ways hard to find,',
        'A mother’s strength, steadfast and kind.',
      ],
      [
        'ASD, my quirks, my unpredictable ways,',
        'Handled gently through all my growing days.',
        'No dramatics, no frustration expressed,',
        'Just quiet love, understanding, nothing less.',
      ],
      [
        'Through sacrifice, distance, and labor intense,',
        'She built a fortress of love immense.',
        'Each ledger and task, a silent testimony,',
        'Of a life devoted, a mother’s symphony.',
      ],
      [
        'Through all the years, the work, and the miles,',
        'She held our bond, the laughter, the trials.',
        'No glory sought, no recognition needed,',
        'Just love unending, planted and seeded.',
      ],
      [
        'Mom, this poem is a simple embrace,',
        'For all your sacrifices, your patient grace.',
        'Through every hardship, your heart remained true,',
        'A lifetime of love, from me to you.',
      ],
    ],
  },
  {
    // poem 5
    id: 'a-fathers-sacrifice',
    title: "A Father's Sacrifice",
    whois: ['Papa'],
    author: 'Francis Lawrence P. Morales',
    password: 'Teddy',
    moods: ['grateful', 'reflective', 'nostalgic'],
    stanzas: [
      [
        'I don’t speak much of where you go,',
        'I let the silence do the talking.',
        'But please know—forgetting was never an option,',
        'Even when my words stayed locked inside.',
      ],
      [
        'I care in the way I stand still,',
        'In the way my eyes follow and linger.',
        'If I only stare and never speak,',
        'That is still love, just heavier.',
      ],
      [
        'Every time you travel far from home,',
        'I feel the distance before I name it.',
        'I miss you quietly, privately, deeply,',
        'Even when I don’t say a thing.',
      ],
      [
        'I know about the nights in the car,',
        'The hunger you swallowed so we wouldn’t feel it.',
        'Your sacrifices never announced themselves,',
        'They just showed up as our comfort.',
      ],
      [
        'You crossed miles so we could stand still,',
        'Endured exhaustion so we could rest.',
        'For mom, for me, for this family,',
        'You gave without ever keeping score.',
      ],
      [
        'When something breaks, you are already there,',
        'Hands steady, fixing what life cracked open.',
        'The house holds together because you do,',
        'Because you never let things fall apart alone.',
      ],
      [
        'Even when I was stubborn, unmoving,',
        'You guided me anyway—soft, firm, patient.',
        'Correction without cruelty, lessons without force,',
        'A compass I didn’t know I was following.',
      ],
      [
        'So if I don’t say this often enough,',
        'Hear it now, written where silence can’t hide:',
        'I see you. I remember everything.',
        'And I love you more than I know how to say.',
      ],
    ],
  },
  {
    // poem 6
    id: 'grandma-of-the-year',
    title: 'Grandma of the Year',
    whois: ['Grandma'],
    author: 'Francis Lawrence P. Morales',
    password: 'naynaynaynaynaynaynay',
    moods: ['grateful', 'reflective', 'nostalgic'],
    stanzas: [
      [
        "I'm sorry for the times we clashed over food,",
        'For tantrums, stubbornness, and attitude.',
        'For every bite that became a battlefield,',
        'And every spoonful that refused to yield.',
      ],
      [
        "I'm sorry for the swimming fights we had,",
        'For every splash, every shout, every time I got mad.',
        'All for lessons you knew I had to learn,',
        'Even when my defiance made your patience burn.',
      ],
      [
        "I'm sorry for the math battles we fought,",
        'For every wrong answer and lesson you taught.',
        'For every equation that made us both shout,',
        'But every struggle was love, without a doubt.',
      ],
      [
        "I'm sorry for the shouting matches that came,",
        'From stubbornness and pride, my own little flame.',
        'Every argument, every raised voice, every day,',
        'Was you shaping me in your quiet, relentless way.',
      ],
      [
        "I'm sorry for the stubbornness I held tight,",
        'For making your care feel like a fight.',
        'For forgetting sometimes, in my headstrong ways,',
        'The depth of your love in those long, hard days.',
      ],
      [
        'Yet I remember the stage lights, the applause,',
        'Competitions and awards, without pause.',
        'Every honor I earned, every prize I received,',
        'Was built on the care and guidance you believed.',
      ],
      [
        "I'm grateful for the hours you spent awake,",
        'Nursing my sickness, my every ache.',
        'Through fevers, colds, and nights long and still,',
        'You were the warmth that healed, the strength of will.',
      ],
      [
        "I'm grateful for your patience, steadfast and true,",
        'For holding me when storms and tantrums blew.',
        'Even when I argued, even when I fought,',
        'You gave all you could, more than I ever sought.',
      ],
      [
        "I'm grateful for the lessons that stung at first,",
        'The hard words, the corrections, the occasional burst.',
        'Each one a stepping stone, a quiet hand,',
        'Leading me gently to understand.',
      ],
      [
        "I'm grateful for the stories and songs you told,",
        'For laughter, for guidance, for hands to hold.',
        'For the way you made life feel safe and bright,',
        'Even in the shadows, you brought light.',
      ],
      [
        "I'm grateful for mornings and evenings shared,",
        'For every meal, every hug, every care.',
        'For being present when life pulled me apart,',
        'And never once faltering in heart.',
      ],
      [
        "I'm grateful for the sacrifices you made,",
        'The moments of quiet love that never fade.',
        'Even in disagreement, even in strife,',
        'Your heart stayed constant, shaping my life.',
      ],
      [
        "I'm grateful for you just being there,",
        'For showing me love in every prayer.',
        'Through fights and stubbornness, I now see,',
        'Your devotion has always been a gift to me.',
      ],
      [
        "I'm grateful for lessons beyond school and grades,",
        'For resilience, for kindness, the love that never fades.',
        'All the shouting, all the struggles, all the fight,',
        'Were ways you taught me to stand, to do right.',
      ],
      [
        'Grandma, I apologize and thank you too,',
        'For every battle, every care, everything you do.',
        'I may have been stubborn, loud, and wild,',
        'But you shaped me gently, endlessly, my guide.',
      ],
    ],
  },
  {
    // poem 7
    id: 'fetches-fixes-faith',
    title: 'Fetches, Fixes, and Faith',
    whois: ['Grandpa'],
    author: 'Francis Lawrence P. Morales',
    password: 'angDanilongbayan123155',
    moods: ['grateful', 'reflective', 'nostalgic'],
    stanzas: [
      [
        'You were always the one who came to get me,',
        'From places too dark, too strange, too late.',
        'No questions first, no lectures yet—',
        'Just headlights cutting through my mistakes.',
      ],
      [
        'Whenever I had no car, no way home,',
        'Your presence became my map.',
        'You showed up like it was nothing,',
        'As if rescuing me was just part of the day.',
      ],
      [
        'And there was always chuk—',
        'Running, barking, existing loudly.',
        'Our dog, our chaos, our constant,',
        'Loved fiercely under your watch.',
      ],
      [
        "You somehow made Grandma's head ache daily,",
        'With every move, every plan, every idea.',
        'Yet in that noise and stubborn rhythm,',
        'Life kept breathing, loud and real.',
      ],
      [
        'You worked on projects at home endlessly,',
        'Hands moving long after strength should’ve gone.',
        'Even when your body paid the price,',
        'You finished what you started—bleeding, unbroken.',
      ],
      [
        'Pain never stopped you from doing the work,',
        'You just adjusted your stance and continued.',
        'I learned from watching, not from words,',
        "That responsibility doesn't wait for comfort.",
      ],
      [
        'Beyond the house, beyond the noise,',
        'You stood firm in quiet service.',
        'An active worker in the church,',
        'Pulling souls gently back to faith.',
      ],
      [
        'You helped save Aetas not with force,',
        'But with patience, presence, and truth.',
        'Not trophies, not numbers—',
        'Just lives slowly turned toward light.',
      ],
      [
        'You were stubborn, loud, relentless,',
        'Yet somehow endlessly dependable.',
        'In chaos, you were motion;',
        'In need, you were already there.',
      ],
      [
        'So this is me saying thank you—',
        'For the fetches, the fixes, the faith.',
        'For loving loudly, working endlessly,',
        'And teaching me what steadfast really means.',
      ],
    ],
  },
  {
    // poem 8
    id: 'a-dual-flame',
    title: 'A Dual Flame',
    whois: ['tita'],
    author: 'Francis Lawrence P. Morales',
    password: 'donnadana',
    moods: ['grateful', 'reflective', 'joyful'],
    stanzas: [
      [
        'You fought with me like storms in the night,',
        'Clashing, arguing, yet never out of sight.',
        'Every battle carved a path I now see,',
        'A love that persisted, steadfast and free.',
      ],
      [
        'Home was your fortress, ESL lessons your call,',
        'Except when school pulled you, standing tall.',
        'Red days marked your rhythm, fierce and bright,',
        'Yet through it all, your care was the light.',
      ],
      [
        'Chocolates, biscuits, little treats in hand,',
        'Always a snack ready, carefully planned.',
        'Small gestures of love in everyday grace,',
        'A quiet reminder of your warm embrace.',
      ],
      [
        'Even when tempers flared, voices grew loud,',
        'You never let frustration bury the proud.',
        'Your patience, a river, flowing beneath,',
        'Guiding my steps with every heated brief.',
      ],
      [
        'I know the battles were never just mine,',
        'Each clash a lesson, your heart in line.',
        'Love threaded through every “no” and “why,”',
        'Teaching me to reach, to aim, to try.',
      ],
      [
        'Through homebound hours and red-day sighs,',
        'Through snack-filled smiles and knowing eyes,',
        'You showed me that love can be both firm and kind,',
        'A dual flame, gentle and intertwined.',
      ],
      [
        'So here is my thanks, wrapped in these lines,',
        'For fighting, for caring, for all the signs.',
        'For love that argued but never let go,',
        'For shaping my heart more than you know.',
      ],
    ],
  },
  {
    // poem 9
    id: 'a-prayer-for-my-parents',
    title: 'A Prayer for My Parents',
    whois: ['Mommy', 'Papa'],
    author: 'Francis Lawrence P. Morales',
    password: 'dana8',
    moods: ['peaceful', 'grateful', 'hopeful'],
    stanzas: [
      [
        'Lord, I lift my parents up to You tonight,',
        'For all the years of love, steadfast and bright.',
        'Through every sacrifice, every tear unshed,',
        'Every silent worry, every word unsaid.',
      ],
      [
        'For Mom, who bore distance with grace untold,',
        'Twenty years abroad, yet heart of gold.',
        'Who worked and labored, numbers and sheets,',
        'Yet in her love, our home was complete.',
      ],
      [
        'For Dad, who quietly carried me through,',
        'Every rescue, every lesson, every view.',
        'Even when I spoke too little, or stared too long,',
        'His care was constant, patient, strong.',
      ],
      [
        'Bless them for every call across the seas,',
        'For every time they calmed storms with ease.',
        'For every homecoming, rare but profound,',
        'For every step they walked on sacred ground.',
      ],
      [
        'Bless Mom for handling my quirks with peace,',
        'ASD, burnout, my endless unease.',
        'For bearing me with patience, calm and kind,',
        'For showing love without measure, without bind.',
      ],
      [
        'Bless Dad for his quiet, steadfast hand,',
        'Fixing what breaks, helping me understand.',
        'For guiding me gently through stubborn days,',
        'For leading without needing to always praise.',
      ],
      [
        'Lord, I thank You for their endless fight,',
        'For the unseen battles they face each night.',
        'For the hunger they swallow, the pain they hide,',
        'For every moment they set themselves aside.',
      ],
      [
        'For every tear Mom held back, every late night,',
        'For Dad\'s strong presence, his silent might.',
        'For every sacrifice I may not comprehend,',
        'For every step they took to guide, defend.',
      ],
      [
        'Bless them for laughter, for joy, for cheer,',
        'For all the moments that bring warmth near.',
        'For every gift, every snack, every small delight,',
        'For turning hard days into something bright.',
      ],
      [
        'For health struggles faced, for sickness endured,',
        'For fears, for accidents, for trials obscured.',
        'For holding our family through every storm,',
        'For keeping hearts warm and safe, the norm.',
      ],
      [
        'For every OJT, every school battle won,',
        'For tears shed silently when the day was done.',
        'For every milestone, every triumph I claim,',
        'For every moment they nurtured without fame.',
      ],
      [
        'Bless them for love that never fades away,',
        'For guiding me gently, come what may.',
        'For standing together, facing the unknown,',
        'For every seed of care they have sown.',
      ],
      [
        'Lord, let their hearts feel the peace they give,',
        'Let joy return in the life they live.',
        'Let laughter echo in their quiet days,',
        'Let gratitude rise in countless ways.',
      ],
      [
        'Bless Mom for strength, for courage so deep,',
        'Bless Dad for wisdom that still makes me weep.',
        'For the love they gave, unwavering, true,',
        'I lift this prayer, my thanks to You.',
      ],
      [
        'For family bound by sacrifice and care,',
        'For every struggle, every answered prayer.',
        'For every homecoming, every guiding hand,',
        'I pray for blessings across their land.',
      ],
      [
        'For health, for peace, for years to come,',
        'For moments of rest, for hearts that hum.',
        'For joy in small things, and love in all,',
        'May grace surround them, catch every fall.',
      ],
      [
        'For laughter, for hugs, for quiet embrace,',
        'For steadfast love no time can erase.',
        'For everything Mom and Dad have done,',
        'I pray, O Lord, may Your will be won.',
      ],
      [
        'Through every storm, every tear, every fight,',
        'May they always feel Your guiding light.',
        'For my parents, dear, holy, and true,',
        'This prayer I give from my heart to You.',
      ],
    ],
  },
  {
    // poem 10
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
  { // poem 11
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
  { // poem 12
    id: 'fishaso',
    title: "fish dog chuk",
    whois: ['Aso ng isda ng chuk'],
    author: 'Anonymous',
    password: 'chooks',
    moods: ['grateful', 'nostalgic', 'reflective'],
    stanzas: [
      [
        "Achukanababs",
        "Achuka chuka chuka chuka chukana",
        "Chukana chukana babs",
        "Achookanachukana",
      ],
      [
        "Aso ng isda ng chuk ng fish",
        "fish dog chuk",
        "Aso ng aso ng achuka chuka chukanababs",
        "Achookanachukanababs",
      ],
      [
        "Chukanachukanachukana",
        "Achukachukachukana",
        "chukachukachukachukachukachukanababs",
        "Achookanachukanababs",
      ],
      [
        "Achukanababs Achukanababs",
        "Achuka chuka chuka chukana",
        "Chukana babs chukana",
        "Achookanachukana",
      ],
      [
        "Chukana achuka babs",
        "chuka chukana chuka",
        "Achukanababs chuk",
        "Achookanachukana",
      ],
      [
        "Achuka chuka chuka",
        "chuka chuka chukana",
        "chuka chukana chukana",
        "chukana babs",
      ],
      [
        "Achuka",
        "Achuka chuka",
        "Achuka chuka chukana",
        "Achukanababs",
      ],
      [
        "chuk chuk chuk chuk",
        "chuka chukana chuk",
        "achuka achuka babs",
        "Achookanachukanababs",
      ],

      [
        "Aso ng isda ng fish dog",
        "fish dog chuk chuk",
        "Aso ng achuka chukana",
        "Achookanachukanababs",
      ],

      [
        "Achuka chuka chukana babs",
        "fish dog chuk",
        "chukachukachukanababs",
        "Achookanachukana",
      ],
    ],
  },

]

export const SITE_PASSWORD = 'Obedience'
