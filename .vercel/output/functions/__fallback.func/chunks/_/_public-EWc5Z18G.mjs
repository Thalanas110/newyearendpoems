import { I as Input, B as Button, c as cn, b as buttonVariants } from './input-BYXOaM1y.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Sparkles, Lock, LogOut, Heart, ArrowLeft, Share2, Eye, X, Loader2, ChevronLeft, ChevronRight, Download, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import 'clsx';
import 'tailwind-merge';
import '@radix-ui/react-slot';
import 'class-variance-authority';

const MOODS = [
  {
    id: "hopeful",
    label: "Hopeful",
    emoji: "\u2728",
    description: "Looking forward with optimism"
  },
  {
    id: "reflective",
    label: "Reflective",
    emoji: "\u{1F319}",
    description: "Contemplating life and time"
  },
  {
    id: "nostalgic",
    label: "Nostalgic",
    emoji: "\u{1F342}",
    description: "Remembering the past fondly"
  },
  {
    id: "joyful",
    label: "Joyful",
    emoji: "\u{1F389}",
    description: "Celebrating with happiness"
  },
  {
    id: "peaceful",
    label: "Peaceful",
    emoji: "\u{1F54A}\uFE0F",
    description: "Finding calm and serenity"
  },
  {
    id: "grateful",
    label: "Grateful",
    emoji: "\u{1F49B}",
    description: "Appreciating what we have"
  }
];
const poems = [
  {
    id: "ring-out-wild-bells",
    title: "Ring Out, Wild Bells",
    whois: ["Mommy"],
    author: "Alfred, Lord Tennyson",
    password: "dana",
    moods: ["hopeful", "reflective"],
    stanzas: [
      [
        "Ring out, wild bells, to the wild sky,",
        "The flying cloud, the frosty light:",
        "The year is dying in the night;",
        "Ring out, wild bells, and let him die."
      ],
      [
        "Ring out the old, ring in the new,",
        "Ring, happy bells, across the snow:",
        "The year is going, let him go;",
        "Ring out the false, ring in the true."
      ],
      [
        "Ring out the grief that saps the mind",
        "For those that here we see no more;",
        "Ring out the feud of rich and poor,",
        "Ring in redress to all mankind."
      ],
      [
        "Ring out a slowly dying cause,",
        "And ancient forms of party strife;",
        "Ring in the nobler modes of life,",
        "With sweeter manners, purer laws."
      ],
      [
        "Ring out false pride in place and blood,",
        "The civic slander and the spite;",
        "Ring in the love of truth and right,",
        "Ring in the common love of good."
      ],
      [
        "Ring out old shapes of foul disease;",
        "Ring out the narrowing lust of gold;",
        "Ring out the thousand wars of old,",
        "Ring in the thousand years of peace."
      ]
    ]
  },
  {
    id: "the-new-year",
    title: "The New Year",
    whois: ["Mommy"],
    author: "Ella Wheeler Wilcox",
    password: "dana1",
    moods: [
      "hopeful",
      "peaceful",
      "grateful"
    ],
    stanzas: [
      [
        "I am the New Year, and I come to you pure and unstained,",
        "Fresh from the hand of God.",
        "Each day, a precious pearl to you is given",
        "That you must string upon the silver thread of life."
      ],
      [
        "Once strung can never be unthreaded but stays",
        "An undying record of your faith and skill.",
        "Each golden, glowing dawn is given you",
        "As a new day to live, to love, to grow."
      ],
      [
        "Do not soil it with your doubts and fears,",
        "But keep it bright and shining as the sun.",
        "For in the end, when all your days are done,",
        "You'll see the beauty of the pearls you've strung."
      ]
    ]
  },
  {
    id: "new-years-day",
    title: "New Year's Day",
    whois: ["Mommy"],
    author: "Christina Rossetti",
    password: "dana2",
    moods: ["reflective", "nostalgic"],
    stanzas: [
      [
        "Passing away, saith the World, passing away:",
        "Chances, beauty and youth sapped day by day:",
        "Thy life never continueth in one stay.",
        "Is the eye waxen dim, is the dark hair changing to grey"
      ],
      [
        "That hath won neither laurel nor bay?",
        "I shall clothe myself in Spring and bud in May:",
        "Thou, root-stricken, shalt not rebuild thy decay",
        "On my bosom for aye."
      ],
      [
        "Then I answered: Yea.",
        "Passing away, saith my Soul, passing away:",
        "With its burden of fear and hope, of labour and play;",
        "Hearken what the past doth witness and say:"
      ],
      [
        "Rust in thy gold, a moth is in thine array,",
        "A canker is in thy bud, thy leaf must decay.",
        "At midnight, at cockcrow, at morning, one certain day,",
        "Lo the Bridegroom shall come and shall not delay."
      ]
    ]
  },
  {
    id: "a-new-years-burden",
    title: "A New Year's Burden",
    whois: ["Mommy"],
    author: "Dante Gabriel Rossetti",
    password: "dana3",
    moods: ["joyful", "hopeful"],
    stanzas: [
      [
        "Along the grass sweet airs are blown",
        "Our way this day in Spring.",
        "Of all the songs that we have known",
        "Now which one shall we sing?"
      ],
      [
        "Not that, my love, ah no!\u2014",
        "Not this, my love? why, so!\u2014",
        "Yet both were ours, but hours will come and go.",
        "The breathing Spring once more will bring."
      ],
      [
        "This day the air is new and strange,",
        "The sun shines bright and clear;",
        "And all the world seems full of change,",
        "And hope for the new year."
      ],
      [
        "So let us sing a song of cheer,",
        "And welcome in the Spring;",
        "For though the old year disappear,",
        "New joys the new year bring."
      ]
    ]
  },
  {
    id: "death-of-the-old-year",
    title: "The Death of the Old Year",
    whois: ["Mommy"],
    author: "Alfred, Lord Tennyson",
    password: "dana4",
    moods: ["nostalgic", "reflective"],
    stanzas: [
      [
        "Full knee-deep lies the winter snow,",
        "And the winter winds are wearily sighing:",
        "Toll ye the church bell sad and slow,",
        "And tread softly and speak low,",
        "For the old year lies a-dying."
      ],
      [
        "Old year you must not die;",
        "You came to us so readily,",
        "You lived with us so steadily,",
        "Old year you shall not die."
      ],
      [
        "He lieth still: he doth not move:",
        "He will not see the dawn of day.",
        "He hath no other life above.",
        "He gave me a friend and a true true-love",
        "And the New-year will take 'em away."
      ],
      [
        "Old year, you shall not go;",
        "So long you have been with us,",
        "Such joy you have been to us,",
        "Old year, you shall not go."
      ]
    ]
  },
  {
    id: "new-years-eve",
    title: "New Year's Eve",
    whois: ["Mommy"],
    author: "John Clare",
    password: "dana5",
    moods: [
      "hopeful",
      "nostalgic",
      "peaceful"
    ],
    stanzas: [
      [
        "Old year, farewell! and welcome, new!",
        "With all thy hopes and fears;",
        "We part with sighs, we meet with tears,",
        "And mingle joy with sorrow too."
      ],
      [
        "The old year's sun has set at last,",
        "Its light no more we see;",
        "But memory holds the happy past,",
        "And hope looks on to thee."
      ],
      [
        "New year, we greet thee with a prayer,",
        "That all thy days be bright;",
        "That peace and love be everywhere,",
        "And wrong give way to right."
      ]
    ]
  },
  {
    id: "the-old-year",
    title: "The Old Year",
    whois: ["Mommy"],
    author: "John Greenleaf Whittier",
    password: "dana6",
    moods: ["reflective", "peaceful"],
    stanzas: [
      [
        "The mossy marbles rest",
        "On the lips that he has prest",
        "In their bloom,",
        "And the names he loved to hear",
        "Have been carved for many a year",
        "On the tomb."
      ],
      [
        "My spirit ran before,",
        "And I said, 'A year is o'er,",
        "Come what may;",
        "But the next year's buds shall bring",
        "The same sweet flowers of spring,",
        "Come what may.'"
      ],
      [
        "So I turned me to the past,",
        "And I said, 'The die is cast,",
        "Come what may;",
        "I will live as I have lived,",
        "And love as I have loved,",
        "Come what may.'"
      ]
    ]
  },
  {
    id: "auld-lang-syne",
    title: "Auld Lang Syne",
    whois: ["Mommy"],
    author: "Robert Burns",
    password: "dana7",
    moods: [
      "nostalgic",
      "joyful",
      "grateful"
    ],
    stanzas: [
      [
        "Should auld acquaintance be forgot,",
        "And never brought to mind?",
        "Should auld acquaintance be forgot,",
        "And auld lang syne?"
      ],
      [
        "For auld lang syne, my jo,",
        "For auld lang syne,",
        "We'll tak' a cup o' kindness yet,",
        "For auld lang syne."
      ],
      [
        "And surely ye'll be your pint-stowp!",
        "And surely I'll be mine!",
        "And we'll tak' a cup o' kindness yet,",
        "For auld lang syne."
      ],
      [
        "We twa hae run about the braes,",
        "And pou'd the gowans fine;",
        "But we've wander'd mony a weary fit,",
        "Sin' auld lang syne."
      ],
      [
        "We twa hae paidl'd in the burn,",
        "Frae morning sun till dine;",
        "But seas between us braid hae roar'd",
        "Sin' auld lang syne."
      ],
      [
        "And there's a hand, my trusty fiere!",
        "And gie's a hand o' thine!",
        "And we'll tak' a right gude-willie waught,",
        "For auld lang syne."
      ]
    ]
  },
  {
    id: "a-prayer-for-the-new-year",
    title: "A Prayer for the New Year",
    whois: ["Mommy"],
    author: "Anonymous",
    password: "dana8",
    moods: [
      "peaceful",
      "grateful",
      "hopeful"
    ],
    stanzas: [
      [
        "Lord, in this new year that begins,",
        "Grant me the wisdom to see",
        "The beauty in each passing day,",
        "And the grace to simply be."
      ],
      [
        "Help me to cherish those I love,",
        "To speak with kindness true,",
        "To find the strength in quiet moments,",
        "And start each day anew."
      ],
      [
        "May I walk with gentle footsteps,",
        "Leave light where'er I go,",
        "And may the seeds of hope I plant",
        "In others' hearts still grow."
      ],
      [
        "As midnight bells ring out tonight,",
        "I offer thanks for all\u2014",
        "For lessons learned and love received,",
        "For rising after fall."
      ]
    ]
  },
  {
    id: "midnight-threshold",
    title: "Midnight Threshold",
    whois: ["Mommy"],
    author: "Anonymous",
    password: "dana9",
    moods: ["reflective", "hopeful"],
    stanzas: [
      [
        "We stand upon the threshold now,",
        "Where old meets new in time,",
        "The clock strikes twelve, the world holds breath,",
        "And midnight bells do chime."
      ],
      [
        "Behind us lie the faded days,",
        "Of joy and sorrow mixed,",
        "Before us stretches unknown paths,",
        "With nothing yet affixed."
      ],
      [
        "So raise a glass to what has been,",
        "And what is yet to come,",
        "For in this moment, brief and bright,",
        "All possibilities are one."
      ]
    ]
  },
  {
    id: "winters-turning",
    title: "Winter's Turning",
    whois: ["Mommy"],
    author: "Anonymous",
    password: "dana10",
    moods: [
      "peaceful",
      "hopeful",
      "grateful"
    ],
    stanzas: [
      [
        "The frost upon the window pane",
        "Draws patterns silver-white,",
        "As we gather close together",
        "On this longest, darkest night."
      ],
      [
        "Yet in the darkness, hope persists,",
        "A candle's steady flame,",
        "Reminding us that light returns,",
        "Though seasons never stay the same."
      ],
      [
        "So let us mark this turning point,",
        "With reverence and with cheer,",
        "For every ending holds within",
        "The promise of a new frontier."
      ],
      [
        "The stars above bear witness now,",
        "To vows we softly make,",
        "To live with purpose, love with depth,",
        "And give more than we take."
      ]
    ]
  },
  {
    id: "fishaso",
    title: "fish dog chuk",
    whois: ["Aso ng isda ng chuk"],
    author: "Anonymous",
    password: "dana11",
    moods: [
      "grateful",
      "nostalgic",
      "reflective"
    ],
    stanzas: [
      [
        "Achukanababs",
        "Achuka chuka chuka chuka chukana",
        "Chukana chukana babs",
        "Achookanachukana"
      ],
      [
        "Aso ng isda ng chuk ng fish",
        "fish dog chuk",
        "Aso ng aso ng achuka chuka chukanababs",
        "Achookanachukanababs"
      ],
      [
        "Chukanachukanachukana",
        "Achukachukachukana",
        "chukachukachukachukachukachukanababs",
        "Achookanachukanababs"
      ]
    ]
  }
];
function PasswordGate({ onSuccess }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "Obedience") onSuccess();
    else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-[#1A1F2C] flex items-center justify-center p-4 relative overflow-hidden",
    children: [/* @__PURE__ */ jsx("div", {
      className: "absolute inset-0 overflow-hidden",
      children: [...Array(50)].map((_, i) => /* @__PURE__ */ jsx(motion.div, {
        className: "absolute w-1 h-1 bg-[#D4AF37]/30 rounded-full",
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        },
        animate: {
          opacity: [
            0.2,
            0.8,
            0.2
          ],
          scale: [
            1,
            1.2,
            1
          ]
        },
        transition: {
          duration: 2 + Math.random() * 3,
          repeat: Infinity,
          delay: Math.random() * 2
        }
      }, i))
    }), /* @__PURE__ */ jsxs(motion.div, {
      initial: {
        opacity: 0,
        y: 20
      },
      animate: {
        opacity: 1,
        y: 0
      },
      transition: { duration: 0.6 },
      className: "relative z-10 w-full max-w-md",
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "text-center mb-8",
          children: [
            /* @__PURE__ */ jsx(motion.div, {
              initial: { scale: 0 },
              animate: { scale: 1 },
              transition: {
                delay: 0.2,
                type: "spring",
                stiffness: 200
              },
              className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6E59A5]/20 border border-[#D4AF37]/30 mb-6",
              children: /* @__PURE__ */ jsx(Sparkles, { className: "w-8 h-8 text-[#D4AF37]" })
            }),
            /* @__PURE__ */ jsx("h1", {
              className: "text-3xl font-serif text-[#F5F0E6] mb-2",
              children: "New Year's Eve Poetry"
            }),
            /* @__PURE__ */ jsx("p", {
              className: "text-[#F5F0E6]/60 text-sm",
              children: "A private collection for family & friends"
            })
          ]
        }),
        /* @__PURE__ */ jsxs(motion.form, {
          onSubmit: handleSubmit,
          animate: isShaking ? { x: [
            -10,
            10,
            -10,
            10,
            0
          ] } : {},
          transition: { duration: 0.4 },
          className: "bg-[#252A38] rounded-2xl p-8 border border-[#D4AF37]/20 shadow-2xl",
          children: [/* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-3 mb-6 pb-4 border-b border-[#D4AF37]/10",
            children: [/* @__PURE__ */ jsx(Lock, { className: "w-5 h-5 text-[#D4AF37]" }), /* @__PURE__ */ jsx("span", {
              className: "text-[#F5F0E6]/80 text-sm",
              children: "Enter the family password to continue"
            })]
          }), /* @__PURE__ */ jsxs("div", {
            className: "space-y-4",
            children: [
              /* @__PURE__ */ jsx(Input, {
                type: "password",
                value: password,
                onChange: (e) => {
                  setPassword(e.target.value);
                  setError(false);
                },
                placeholder: "Password",
                className: "bg-[#1A1F2C] border-[#D4AF37]/20 text-[#F5F0E6] placeholder:text-[#F5F0E6]/40 focus:border-[#D4AF37]/50 focus:ring-[#D4AF37]/20 h-12"
              }),
              error && /* @__PURE__ */ jsx(motion.p, {
                initial: {
                  opacity: 0,
                  y: -10
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                className: "text-red-400 text-sm",
                children: "Incorrect password. Please try again."
              }),
              /* @__PURE__ */ jsx(Button, {
                type: "submit",
                className: "w-full h-12 bg-gradient-to-r from-[#6E59A5] to-[#D4AF37] hover:from-[#7E69AB] hover:to-[#E5BF47] text-white font-medium transition-all duration-300",
                children: "Enter Collection"
              })
            ]
          })]
        }),
        /* @__PURE__ */ jsx("p", {
          className: "text-center text-[#F5F0E6]/30 text-xs mt-6",
          children: "With love, for the turning of the year"
        })
      ]
    })]
  });
}
function PoemCard({ poem, index, onUnlock, isUnlocked }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const previewStanza = poem.stanzas[0];
  const poemMoods = poem.moods.map((moodId) => MOODS.find((m) => m.id === moodId)).filter(Boolean);
  const handleUnlock = () => {
    if (password === poem.password) {
      setError("");
      setPassword("");
      setShowPasswordInput(false);
      onUnlock(poem.id);
    } else setError("Incorrect password");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleUnlock();
  };
  return /* @__PURE__ */ jsxs(motion.article, {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5,
      delay: index * 0.1
    },
    className: "group relative bg-gradient-to-br from-[#252A38] to-[#1A1F2C] rounded-2xl border border-[#D4AF37]/15 hover:border-[#D4AF37]/30 transition-all duration-300 overflow-hidden",
    children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
      /* @__PURE__ */ jsxs("div", {
        className: "p-6 md:p-8",
        children: [
          /* @__PURE__ */ jsxs("header", {
            className: "mb-4",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex items-start justify-between gap-4",
              children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h2", {
                className: "text-xl md:text-2xl font-serif text-[#F5F0E6] mb-2 group-hover:text-[#D4AF37] transition-colors duration-300",
                children: poem.title
              }), /* @__PURE__ */ jsxs("p", {
                className: "text-sm text-[#F5F0E6]/50 italic",
                children: ["\u2014 ", poem.author]
              })] }), isUnlocked ? /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-1 text-[#D4AF37]/60 text-xs",
                children: [/* @__PURE__ */ jsx(Eye, { className: "w-3 h-3" }), /* @__PURE__ */ jsx("span", { children: "Unlocked" })]
              }) : /* @__PURE__ */ jsxs("div", {
                className: "flex items-center gap-1 text-[#F5F0E6]/40 text-xs",
                children: [/* @__PURE__ */ jsx(Lock, { className: "w-3 h-3" }), /* @__PURE__ */ jsx("span", { children: "Locked" })]
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "flex flex-wrap gap-2 mt-3",
              children: poemMoods.map((mood) => /* @__PURE__ */ jsxs("span", {
                className: "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs bg-[#D4AF37]/10 text-[#D4AF37]/70 border border-[#D4AF37]/20",
                children: [/* @__PURE__ */ jsx("span", { children: mood.emoji }), /* @__PURE__ */ jsx("span", { children: mood.label })]
              }, mood.id))
            })]
          }),
          /* @__PURE__ */ jsx("div", { className: "w-16 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent mb-6" }),
          /* @__PURE__ */ jsx("div", {
            className: "space-y-1 mb-6",
            children: previewStanza.map((line, lineIdx) => /* @__PURE__ */ jsx("p", {
              className: "text-[#F5F0E6]/85 font-serif text-base md:text-lg leading-relaxed",
              children: line
            }, lineIdx))
          }),
          poem.stanzas.length > 1 && /* @__PURE__ */ jsxs("p", {
            className: "text-[#F5F0E6]/40 text-sm italic mb-6",
            children: [
              "+ ",
              poem.stanzas.length - 1,
              " more",
              " ",
              poem.stanzas.length - 1 === 1 ? "stanza" : "stanzas",
              "..."
            ]
          }),
          /* @__PURE__ */ jsx("div", {
            className: "pt-6 border-t border-[#D4AF37]/10",
            children: isUnlocked ? /* @__PURE__ */ jsxs(Button, {
              onClick: () => onUnlock(poem.id),
              variant: "ghost",
              className: "w-full text-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 border border-[#D4AF37]/30",
              children: [/* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-2" }), "Read Full Poem"]
            }) : showPasswordInput ? /* @__PURE__ */ jsxs("div", {
              className: "space-y-3",
              children: [
                /* @__PURE__ */ jsxs("div", {
                  className: "flex gap-2",
                  children: [/* @__PURE__ */ jsx(Input, {
                    type: "password",
                    placeholder: "Enter password",
                    value: password,
                    onChange: (e) => {
                      setPassword(e.target.value);
                      setError("");
                    },
                    onKeyDown: handleKeyDown,
                    className: "bg-[#1A1F2C] border-[#D4AF37]/20 text-[#F5F0E6] placeholder:text-[#F5F0E6]/30 focus:border-[#D4AF37]/50"
                  }), /* @__PURE__ */ jsx(Button, {
                    onClick: handleUnlock,
                    className: "bg-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37]/30 border border-[#D4AF37]/30",
                    children: "Unlock"
                  })]
                }),
                error && /* @__PURE__ */ jsx("p", {
                  className: "text-red-400/80 text-sm",
                  children: error
                }),
                /* @__PURE__ */ jsx("button", {
                  onClick: () => {
                    setShowPasswordInput(false);
                    setPassword("");
                    setError("");
                  },
                  className: "text-[#F5F0E6]/40 text-sm hover:text-[#F5F0E6]/60 transition-colors",
                  children: "Cancel"
                })
              ]
            }) : /* @__PURE__ */ jsxs(Button, {
              onClick: () => setShowPasswordInput(true),
              variant: "ghost",
              className: "w-full text-[#F5F0E6]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 border border-[#D4AF37]/20",
              children: [/* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 mr-2" }), "Unlock to Read"]
            })
          })
        ]
      }),
      /* @__PURE__ */ jsx("div", {
        className: "absolute bottom-0 right-0 w-24 h-24 opacity-5 pointer-events-none",
        children: /* @__PURE__ */ jsx("svg", {
          viewBox: "0 0 100 100",
          className: "w-full h-full text-[#D4AF37]",
          children: /* @__PURE__ */ jsx("path", {
            d: "M100 0 L100 100 L0 100 Q50 50 100 0",
            fill: "currentColor"
          })
        })
      })
    ]
  });
}
function StanzaImage({ poem, stanzaGroup, pageNumber, totalPages, onImageReady }) {
  const canvasRef = useRef(null);
  const generateImage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const width = 1200;
    const height = 1200;
    canvas.width = width;
    canvas.height = height;
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, "#1A1F2C");
    gradient.addColorStop(1, "#252A38");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = "rgba(212, 175, 55, 0.1)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(width - 200, height - 100);
    ctx.lineTo(width - 100, height - 100);
    ctx.stroke();
    ctx.fillStyle = "rgba(212, 175, 55, 0.15)";
    ctx.beginPath();
    ctx.arc(80, 80, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(width - 80, height - 80, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#D4AF37";
    ctx.font = "bold 48px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText(poem.title, width / 2, 150);
    ctx.fillStyle = "rgba(245, 240, 230, 0.6)";
    ctx.font = "italic 28px Georgia, serif";
    ctx.fillText(`\u2014 ${poem.author}`, width / 2, 200);
    ctx.strokeStyle = "rgba(212, 175, 55, 0.3)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 100, 240);
    ctx.lineTo(width / 2 + 100, 240);
    ctx.stroke();
    ctx.fillStyle = "#F5F0E6";
    ctx.font = "32px Georgia, serif";
    ctx.textAlign = "center";
    let yPosition = 320;
    const lineHeight = 48;
    const stanzaGap = 40;
    stanzaGroup.forEach((stanza, stanzaIndex) => {
      stanza.forEach((line) => {
        const maxWidth = width - 200;
        const words = line.split(" ");
        let currentLine = "";
        words.forEach((word, wordIndex) => {
          const testLine = currentLine + (currentLine ? " " : "") + word;
          if (ctx.measureText(testLine).width > maxWidth && currentLine) {
            ctx.fillText(currentLine, width / 2, yPosition);
            yPosition += lineHeight;
            currentLine = word;
          } else currentLine = testLine;
          if (wordIndex === words.length - 1) {
            ctx.fillText(currentLine, width / 2, yPosition);
            yPosition += lineHeight;
          }
        });
      });
      if (stanzaIndex < stanzaGroup.length - 1) yPosition += stanzaGap;
    });
    ctx.fillStyle = "rgba(245, 240, 230, 0.4)";
    ctx.font = "24px Georgia, serif";
    ctx.fillText(`${pageNumber} of ${totalPages}`, width / 2, height - 80);
    ctx.fillStyle = "rgba(212, 175, 55, 0.3)";
    ctx.font = "18px Georgia, serif";
    ctx.fillText("New Year's Eve Poetry Collection", width / 2, height - 40);
    onImageReady(canvas.toDataURL("image/png"));
  }, [
    poem,
    stanzaGroup,
    pageNumber,
    totalPages,
    onImageReady
  ]);
  useEffect(() => {
    generateImage();
  }, [generateImage]);
  return /* @__PURE__ */ jsx("canvas", {
    ref: canvasRef,
    className: "hidden",
    "aria-hidden": "true"
  });
}
function chunkStanzas(stanzas) {
  const chunks = [];
  for (let i = 0; i < stanzas.length; i += 4) chunks.push(stanzas.slice(i, i + 4));
  return chunks;
}
function ShareModal({ poem, isOpen, onClose }) {
  const stanzaChunks = chunkStanzas(poem.stanzas);
  const [currentPage, setCurrentPage] = useState(0);
  const [images, setImages] = useState([]);
  const [isGenerating, setIsGenerating] = useState(true);
  const handleImageReady = useCallback((index, dataUrl) => {
    setImages((prev) => {
      const newImages = [...prev];
      newImages[index] = dataUrl;
      if (newImages.filter(Boolean).length === stanzaChunks.length) setIsGenerating(false);
      return newImages;
    });
  }, [stanzaChunks.length]);
  const handleDownload = (imageUrl, pageNum) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `${poem.title.replace(/\s+/g, "-").toLowerCase()}-page-${pageNum + 1}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const handleDownloadAll = () => {
    images.forEach((img, idx) => {
      if (img) setTimeout(() => handleDownload(img, idx), idx * 500);
    });
  };
  const handleShareToFacebook = () => {
    const shareUrl = encodeURIComponent(window.location.href);
    const shareText = encodeURIComponent(`"${poem.title}" by ${poem.author} - A poem for the New Year`);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`, "_blank", "width=600,height=400");
  };
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(motion.div, {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm",
    onClick: onClose,
    children: /* @__PURE__ */ jsxs(motion.div, {
      initial: {
        scale: 0.9,
        opacity: 0
      },
      animate: {
        scale: 1,
        opacity: 1
      },
      exit: {
        scale: 0.9,
        opacity: 0
      },
      transition: {
        type: "spring",
        damping: 25
      },
      className: "relative w-full max-w-2xl bg-[#252A38] rounded-2xl border border-[#D4AF37]/20 shadow-2xl overflow-hidden",
      onClick: (e) => e.stopPropagation(),
      children: [
        /* @__PURE__ */ jsxs("div", {
          className: "flex items-center justify-between p-6 border-b border-[#D4AF37]/10",
          children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h2", {
            className: "text-xl font-serif text-[#F5F0E6]",
            children: [
              'Share "',
              poem.title,
              '"'
            ]
          }), /* @__PURE__ */ jsxs("p", {
            className: "text-sm text-[#F5F0E6]/60 mt-1",
            children: [
              stanzaChunks.length,
              " image",
              stanzaChunks.length > 1 ? "s" : "",
              " ",
              "generated"
            ]
          })] }), /* @__PURE__ */ jsx("button", {
            onClick: onClose,
            className: "p-2 rounded-full hover:bg-[#1A1F2C] transition-colors",
            children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-[#F5F0E6]/60" })
          })]
        }),
        stanzaChunks.map((chunk, idx) => /* @__PURE__ */ jsx(StanzaImage, {
          poem,
          stanzaGroup: chunk,
          pageNumber: idx + 1,
          totalPages: stanzaChunks.length,
          onImageReady: (dataUrl) => handleImageReady(idx, dataUrl)
        }, idx)),
        /* @__PURE__ */ jsx("div", {
          className: "p-6",
          children: isGenerating ? /* @__PURE__ */ jsxs("div", {
            className: "flex flex-col items-center justify-center h-64 text-[#F5F0E6]/60",
            children: [/* @__PURE__ */ jsx(Loader2, { className: "w-8 h-8 animate-spin mb-4 text-[#D4AF37]" }), /* @__PURE__ */ jsx("p", { children: "Generating images..." })]
          }) : /* @__PURE__ */ jsxs("div", {
            className: "relative",
            children: [/* @__PURE__ */ jsx("div", {
              className: "aspect-square bg-[#1A1F2C] rounded-xl overflow-hidden",
              children: images[currentPage] && /* @__PURE__ */ jsx("img", {
                src: images[currentPage],
                alt: `${poem.title} - Page ${currentPage + 1}`,
                className: "w-full h-full object-contain"
              })
            }), stanzaChunks.length > 1 && /* @__PURE__ */ jsxs("div", {
              className: "flex items-center justify-center gap-4 mt-4",
              children: [
                /* @__PURE__ */ jsx("button", {
                  onClick: () => setCurrentPage((p) => Math.max(0, p - 1)),
                  disabled: currentPage === 0,
                  className: "p-2 rounded-full bg-[#1A1F2C] hover:bg-[#6E59A5]/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                  children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-5 h-5 text-[#F5F0E6]" })
                }),
                /* @__PURE__ */ jsxs("span", {
                  className: "text-[#F5F0E6]/60 text-sm",
                  children: [
                    currentPage + 1,
                    " / ",
                    stanzaChunks.length
                  ]
                }),
                /* @__PURE__ */ jsx("button", {
                  onClick: () => setCurrentPage((p) => Math.min(stanzaChunks.length - 1, p + 1)),
                  disabled: currentPage === stanzaChunks.length - 1,
                  className: "p-2 rounded-full bg-[#1A1F2C] hover:bg-[#6E59A5]/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                  children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-5 h-5 text-[#F5F0E6]" })
                })
              ]
            })]
          })
        }),
        /* @__PURE__ */ jsxs("div", {
          className: "p-6 pt-0 space-y-3",
          children: [
            /* @__PURE__ */ jsxs("div", {
              className: "flex gap-3",
              children: [/* @__PURE__ */ jsxs(Button, {
                onClick: () => handleDownload(images[currentPage], currentPage),
                disabled: isGenerating || !images[currentPage],
                className: "flex-1 bg-[#6E59A5] hover:bg-[#7E69AB] text-white",
                children: [/* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }), "Download This Image"]
              }), stanzaChunks.length > 1 && /* @__PURE__ */ jsxs(Button, {
                onClick: handleDownloadAll,
                disabled: isGenerating,
                variant: "outline",
                className: "flex-1 border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37]/10",
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                  "Download All (",
                  stanzaChunks.length,
                  ")"
                ]
              })]
            }),
            /* @__PURE__ */ jsxs(Button, {
              onClick: handleShareToFacebook,
              disabled: isGenerating,
              className: "w-full bg-[#1877F2] hover:bg-[#166FE5] text-white",
              children: [/* @__PURE__ */ jsx(Facebook, { className: "w-4 h-4 mr-2" }), "Share to Facebook"]
            }),
            /* @__PURE__ */ jsx("p", {
              className: "text-xs text-[#F5F0E6]/40 text-center",
              children: "Download images first, then upload them to your Facebook post for best results"
            })
          ]
        })
      ]
    })
  }) });
}
function PoemPage({ poem, onBack }) {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const poemMoods = poem.moods.map((moodId) => MOODS.find((m) => m.id === moodId)).filter(Boolean);
  return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsxs("div", {
    className: "min-h-screen relative",
    children: [/* @__PURE__ */ jsx("div", {
      className: "fixed inset-0 overflow-hidden pointer-events-none",
      children: [...Array(20)].map((_, i) => /* @__PURE__ */ jsx(motion.div, {
        className: "absolute w-1 h-1 bg-[#D4AF37]/20 rounded-full",
        style: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`
        },
        animate: {
          opacity: [
            0.1,
            0.4,
            0.1
          ],
          scale: [
            1,
            1.5,
            1
          ]
        },
        transition: {
          duration: 3 + Math.random() * 2,
          repeat: Infinity,
          delay: Math.random() * 2
        }
      }, i))
    }), /* @__PURE__ */ jsxs("div", {
      className: "relative z-10 max-w-3xl mx-auto px-4 py-8 md:py-16",
      children: [
        /* @__PURE__ */ jsx(motion.div, {
          initial: {
            opacity: 0,
            x: -20
          },
          animate: {
            opacity: 1,
            x: 0
          },
          transition: { duration: 0.4 },
          children: /* @__PURE__ */ jsxs(Button, {
            onClick: onBack,
            variant: "ghost",
            className: "mb-8 text-[#F5F0E6]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10",
            children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }), "Back to Collection"]
          })
        }),
        /* @__PURE__ */ jsxs(motion.article, {
          initial: {
            opacity: 0,
            y: 30
          },
          animate: {
            opacity: 1,
            y: 0
          },
          transition: {
            duration: 0.6,
            delay: 0.1
          },
          className: "bg-gradient-to-br from-[#252A38] to-[#1A1F2C] rounded-2xl border border-[#D4AF37]/20 p-8 md:p-12",
          children: [
            /* @__PURE__ */ jsxs("header", {
              className: "text-center mb-10",
              children: [
                /* @__PURE__ */ jsx(motion.h1, {
                  initial: {
                    opacity: 0,
                    y: 20
                  },
                  animate: {
                    opacity: 1,
                    y: 0
                  },
                  transition: {
                    duration: 0.5,
                    delay: 0.2
                  },
                  className: "text-3xl md:text-4xl font-serif text-[#D4AF37] mb-4",
                  children: poem.title
                }),
                /* @__PURE__ */ jsxs(motion.p, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: {
                    duration: 0.5,
                    delay: 0.3
                  },
                  className: "text-[#F5F0E6]/60 italic text-lg mb-4",
                  children: ["\u2014 ", poem.author]
                }),
                /* @__PURE__ */ jsx(motion.div, {
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  transition: {
                    duration: 0.5,
                    delay: 0.35
                  },
                  className: "flex flex-wrap justify-center gap-2",
                  children: poemMoods.map((mood) => /* @__PURE__ */ jsxs("span", {
                    className: "inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-[#D4AF37]/10 text-[#D4AF37]/70 border border-[#D4AF37]/20",
                    children: [/* @__PURE__ */ jsx("span", { children: mood.emoji }), /* @__PURE__ */ jsx("span", { children: mood.label })]
                  }, mood.id))
                })
              ]
            }),
            /* @__PURE__ */ jsx(motion.div, {
              initial: { scaleX: 0 },
              animate: { scaleX: 1 },
              transition: {
                duration: 0.6,
                delay: 0.4
              },
              className: "w-32 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent mx-auto mb-10"
            }),
            /* @__PURE__ */ jsx("div", {
              className: "space-y-8",
              children: poem.stanzas.map((stanza, stanzaIdx) => /* @__PURE__ */ jsx(motion.div, {
                initial: {
                  opacity: 0,
                  y: 20
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  duration: 0.5,
                  delay: 0.5 + stanzaIdx * 0.1
                },
                className: "space-y-2",
                children: stanza.map((line, lineIdx) => /* @__PURE__ */ jsx("p", {
                  className: "text-[#F5F0E6]/90 font-serif text-lg md:text-xl leading-relaxed text-center",
                  children: line
                }, lineIdx))
              }, stanzaIdx))
            }),
            /* @__PURE__ */ jsx(motion.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: {
                duration: 0.5,
                delay: 0.8
              },
              className: "mt-12 pt-8 border-t border-[#D4AF37]/10 flex justify-center",
              children: /* @__PURE__ */ jsxs(Button, {
                onClick: () => setIsShareOpen(true),
                variant: "ghost",
                className: "text-[#F5F0E6]/60 hover:text-[#D4AF37] hover:bg-[#D4AF37]/10",
                children: [/* @__PURE__ */ jsx(Share2, { className: "w-4 h-4 mr-2" }), "Share as Images"]
              })
            })
          ]
        }),
        /* @__PURE__ */ jsx("div", {
          className: "absolute top-20 left-4 w-32 h-32 opacity-5 pointer-events-none",
          children: /* @__PURE__ */ jsxs("svg", {
            viewBox: "0 0 100 100",
            className: "w-full h-full text-[#D4AF37]",
            children: [/* @__PURE__ */ jsx("circle", {
              cx: "50",
              cy: "50",
              r: "40",
              stroke: "currentColor",
              strokeWidth: "1",
              fill: "none"
            }), /* @__PURE__ */ jsx("circle", {
              cx: "50",
              cy: "50",
              r: "30",
              stroke: "currentColor",
              strokeWidth: "1",
              fill: "none"
            })]
          })
        }),
        /* @__PURE__ */ jsx("div", {
          className: "absolute bottom-20 right-4 w-32 h-32 opacity-5 pointer-events-none",
          children: /* @__PURE__ */ jsx("svg", {
            viewBox: "0 0 100 100",
            className: "w-full h-full text-[#D4AF37]",
            children: /* @__PURE__ */ jsx("path", {
              d: "M10 50 Q50 10 90 50 Q50 90 10 50",
              stroke: "currentColor",
              strokeWidth: "1",
              fill: "none"
            })
          })
        })
      ]
    })]
  }), /* @__PURE__ */ jsx(ShareModal, {
    poem,
    isOpen: isShareOpen,
    onClose: () => setIsShareOpen(false)
  })] });
}
function MoodFilter({ selectedMood, onMoodSelect }) {
  return /* @__PURE__ */ jsxs(motion.div, {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.5,
      delay: 0.3
    },
    className: "mb-12",
    children: [
      /* @__PURE__ */ jsxs("div", {
        className: "text-center mb-6",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-[#F5F0E6]/80 text-lg font-medium mb-2",
          children: "How are you feeling tonight?"
        }), /* @__PURE__ */ jsx("p", {
          className: "text-[#F5F0E6]/40 text-sm",
          children: "Select a mood to discover poems that resonate with you"
        })]
      }),
      /* @__PURE__ */ jsxs("div", {
        className: "flex flex-wrap justify-center gap-3",
        children: [/* @__PURE__ */ jsxs(motion.button, {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          onClick: () => onMoodSelect(null),
          className: `
                        px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                        border backdrop-blur-sm
                        ${selectedMood === null ? "bg-[#D4AF37]/20 border-[#D4AF37]/60 text-[#D4AF37]" : "bg-[#1A1F2C]/60 border-[#D4AF37]/20 text-[#F5F0E6]/60 hover:border-[#D4AF37]/40 hover:text-[#F5F0E6]/80"}
                    `,
          children: [/* @__PURE__ */ jsx("span", {
            className: "mr-1.5",
            children: "\u{1F31F}"
          }), "All Poems"]
        }), MOODS.map((mood) => /* @__PURE__ */ jsxs(motion.button, {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.95 },
          onClick: () => onMoodSelect(mood.id),
          className: `
                            px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                            border backdrop-blur-sm group relative
                            ${selectedMood === mood.id ? "bg-[#D4AF37]/20 border-[#D4AF37]/60 text-[#D4AF37]" : "bg-[#1A1F2C]/60 border-[#D4AF37]/20 text-[#F5F0E6]/60 hover:border-[#D4AF37]/40 hover:text-[#F5F0E6]/80"}
                        `,
          children: [
            /* @__PURE__ */ jsx("span", {
              className: "mr-1.5",
              children: mood.emoji
            }),
            mood.label,
            /* @__PURE__ */ jsx("span", {
              className: "absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-[#252A38] border border-[#D4AF37]/20 rounded-lg text-xs text-[#F5F0E6]/70 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10",
              children: mood.description
            })
          ]
        }, mood.id))]
      }),
      selectedMood && /* @__PURE__ */ jsx(motion.div, {
        initial: {
          opacity: 0,
          y: -10
        },
        animate: {
          opacity: 1,
          y: 0
        },
        className: "text-center mt-6",
        children: /* @__PURE__ */ jsxs("p", {
          className: "text-[#D4AF37]/80 text-sm",
          children: [
            "Showing poems for when you're feeling",
            " ",
            /* @__PURE__ */ jsx("span", {
              className: "font-medium text-[#D4AF37]",
              children: MOODS.find((m) => m.id === selectedMood)?.label.toLowerCase()
            })
          ]
        })
      })
    ]
  });
}
function AlertDialog({ ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Root, {
    "data-slot": "alert-dialog",
    ...props
  });
}
function AlertDialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Trigger, {
    "data-slot": "alert-dialog-trigger",
    ...props
  });
}
function AlertDialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Portal, {
    "data-slot": "alert-dialog-portal",
    ...props
  });
}
function AlertDialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Overlay, {
    "data-slot": "alert-dialog-overlay",
    className: cn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50", className),
    ...props
  });
}
function AlertDialogContent({ className, ...props }) {
  return /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [/* @__PURE__ */ jsx(AlertDialogOverlay, {}), /* @__PURE__ */ jsx(AlertDialogPrimitive.Content, {
    "data-slot": "alert-dialog-content",
    className: cn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg", className),
    ...props
  })] });
}
function AlertDialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", {
    "data-slot": "alert-dialog-header",
    className: cn("flex flex-col gap-2 text-center sm:text-left", className),
    ...props
  });
}
function AlertDialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", {
    "data-slot": "alert-dialog-footer",
    className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
    ...props
  });
}
function AlertDialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Title, {
    "data-slot": "alert-dialog-title",
    className: cn("text-lg font-semibold", className),
    ...props
  });
}
function AlertDialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Description, {
    "data-slot": "alert-dialog-description",
    className: cn("text-muted-foreground text-sm", className),
    ...props
  });
}
function AlertDialogAction({ className, ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Action, {
    className: cn(buttonVariants(), className),
    ...props
  });
}
function AlertDialogCancel({ className, ...props }) {
  return /* @__PURE__ */ jsx(AlertDialogPrimitive.Cancel, {
    className: cn(buttonVariants({ variant: "outline" }), className),
    ...props
  });
}
var UNLOCKED_POEMS_KEY = "nye-unlocked-poems";
function PoemGrid({ onLogout }) {
  const [unlockedPoems, setUnlockedPoems] = useState(() => {
    return /* @__PURE__ */ new Set();
  });
  const [selectedPoemId, setSelectedPoemId] = useState(null);
  const [selectedMood, setSelectedMood] = useState(null);
  const filteredPoems = useMemo(() => {
    if (!selectedMood) return poems;
    return poems.filter((poem) => poem.moods.includes(selectedMood));
  }, [selectedMood]);
  const handleUnlock = (poemId) => {
    const newUnlocked = new Set(unlockedPoems);
    newUnlocked.add(poemId);
    setUnlockedPoems(newUnlocked);
    sessionStorage.setItem(UNLOCKED_POEMS_KEY, JSON.stringify([...newUnlocked]));
    setSelectedPoemId(poemId);
  };
  const handleBack = () => {
    setSelectedPoemId(null);
  };
  const selectedPoem = selectedPoemId ? poems.find((p) => p.id === selectedPoemId) : null;
  if (selectedPoem) return /* @__PURE__ */ jsx(PoemPage, {
    poem: selectedPoem,
    onBack: handleBack
  });
  return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen relative",
    children: [
      /* @__PURE__ */ jsxs(AlertDialog, { children: [/* @__PURE__ */ jsx(AlertDialogTrigger, {
        asChild: true,
        children: /* @__PURE__ */ jsxs(motion.button, {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: {
            duration: 0.4,
            delay: 0.5
          },
          className: "fixed top-4 right-4 z-50 flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1A1F2C]/80 border border-[#D4AF37]/20 text-[#F5F0E6]/60 hover:text-[#F5F0E6] hover:border-[#D4AF37]/40 transition-colors backdrop-blur-sm",
          children: [/* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4" }), /* @__PURE__ */ jsx("span", {
            className: "text-sm",
            children: "Exit"
          })]
        })
      }), /* @__PURE__ */ jsxs(AlertDialogContent, {
        className: "bg-[#1A1F2C] border-[#D4AF37]/20",
        children: [/* @__PURE__ */ jsxs(AlertDialogHeader, { children: [/* @__PURE__ */ jsx(AlertDialogTitle, {
          className: "text-[#F5F0E6]",
          children: "Leave the collection?"
        }), /* @__PURE__ */ jsx(AlertDialogDescription, {
          className: "text-[#F5F0E6]/60",
          children: "You'll need to enter the password again to return to the poems."
        })] }), /* @__PURE__ */ jsxs(AlertDialogFooter, { children: [/* @__PURE__ */ jsx(AlertDialogCancel, {
          className: "bg-transparent border-[#D4AF37]/20 text-[#F5F0E6]/60 hover:bg-[#D4AF37]/10 hover:text-[#F5F0E6]",
          children: "Stay"
        }), /* @__PURE__ */ jsx(AlertDialogAction, {
          onClick: onLogout,
          className: "bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/30",
          children: "Exit"
        })] })]
      })] }),
      /* @__PURE__ */ jsx("div", {
        className: "fixed inset-0 overflow-hidden pointer-events-none",
        children: [...Array(30)].map((_, i) => /* @__PURE__ */ jsx(motion.div, {
          className: "absolute w-1 h-1 bg-[#D4AF37]/20 rounded-full",
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          },
          animate: {
            opacity: [
              0.1,
              0.3,
              0.1
            ],
            scale: [
              1,
              1.5,
              1
            ]
          },
          transition: {
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }
        }, i))
      }),
      /* @__PURE__ */ jsxs("div", {
        className: "relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20",
        children: [
          /* @__PURE__ */ jsxs(motion.header, {
            initial: {
              opacity: 0,
              y: -20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: { duration: 0.6 },
            className: "text-center mb-10",
            children: [
              /* @__PURE__ */ jsxs("div", {
                className: "flex items-center justify-center gap-3 mb-4",
                children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6 text-[#D4AF37]/60" }),
                  /* @__PURE__ */ jsx("span", {
                    className: "text-[#D4AF37]/60 text-sm tracking-widest uppercase",
                    children: "hehehehehehehe hahahahahahaha"
                  }),
                  /* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6 text-[#D4AF37]/60" })
                ]
              }),
              /* @__PURE__ */ jsx("h1", {
                className: "text-4xl md:text-5xl lg:text-6xl font-serif text-[#F5F0E6] mb-4",
                children: "Welcome to my humble collection!"
              }),
              /* @__PURE__ */ jsx("p", {
                className: "text-[#F5F0E6]/60 text-lg max-w-2xl mx-auto",
                children: "Since it is the end of the year, I figured out its time to make this. Started December 18."
              }),
              /* @__PURE__ */ jsxs("div", {
                className: "flex items-center justify-center gap-2 mt-6",
                children: [
                  /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 text-[#D4AF37]/40" }),
                  /* @__PURE__ */ jsx("span", {
                    className: "text-[#F5F0E6]/40 text-sm",
                    children: "Each poem requires its own key to unlock, so you can read it personally. Other people cannot unlock dedicated sections, unless I reveal the passwords myself."
                  }),
                  /* @__PURE__ */ jsx(Heart, { className: "w-4 h-4 text-[#D4AF37]/40" })
                ]
              })
            ]
          }),
          /* @__PURE__ */ jsx(MoodFilter, {
            selectedMood,
            onMoodSelect: setSelectedMood
          }),
          /* @__PURE__ */ jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8",
            children: filteredPoems.length > 0 ? filteredPoems.map((poem, index) => /* @__PURE__ */ jsx(PoemCard, {
              poem,
              index,
              onUnlock: handleUnlock,
              isUnlocked: unlockedPoems.has(poem.id)
            }, poem.id)) : /* @__PURE__ */ jsx(motion.div, {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              className: "col-span-full text-center py-16",
              children: /* @__PURE__ */ jsx("p", {
                className: "text-[#F5F0E6]/60 text-lg",
                children: "No poems match this mood. Try another feeling."
              })
            })
          }),
          selectedMood && filteredPoems.length > 0 && /* @__PURE__ */ jsxs(motion.p, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "text-center text-[#F5F0E6]/40 text-sm mt-8",
            children: [
              "Showing ",
              filteredPoems.length,
              " of ",
              poems.length,
              " poems"
            ]
          }),
          /* @__PURE__ */ jsx(motion.footer, {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: {
              duration: 0.6,
              delay: 1.2
            },
            className: "text-center mt-20 pt-12 border-t border-[#D4AF37]/10",
            children: /* @__PURE__ */ jsx("p", {
              className: "text-[#F5F0E6]/40 text-sm",
              children: "\xA9 Adriaan Dimate, 2025. All rights reserved."
            })
          })
        ]
      })
    ]
  });
}
function SnowEffect() {
  const [snowflakes, setSnowflakes] = useState([]);
  useEffect(() => {
    const flakes = [];
    const count = 60;
    for (let i = 0; i < count; i++) flakes.push({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.6 + 0.4
    });
    setSnowflakes(flakes);
  }, []);
  return /* @__PURE__ */ jsxs("div", {
    className: "fixed inset-0 pointer-events-none overflow-hidden z-10",
    children: [snowflakes.map((flake) => /* @__PURE__ */ jsx("div", {
      className: "absolute rounded-full bg-white animate-fall",
      style: {
        left: `${flake.x}%`,
        width: `${flake.size}px`,
        height: `${flake.size}px`,
        opacity: flake.opacity,
        animationDuration: `${flake.duration}s`,
        animationDelay: `${flake.delay}s`
      }
    }, flake.id)), /* @__PURE__ */ jsx("style", { children: `
                @keyframes fall {
                    0% {
                        transform: translateY(-10px) rotate(0deg);
                    }
                    100% {
                        transform: translateY(100vh) rotate(360deg);
                    }
                }
                .animate-fall {
                    animation: fall linear infinite;
                }
            ` })]
  });
}
var STORAGE_KEY = "nye-poems-authenticated";
function NewYearPoems() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY) === "true") setIsAuthenticated(true);
    setIsLoading(false);
  }, []);
  const handleAuthenticate = () => {
    sessionStorage.setItem(STORAGE_KEY, "true");
    setIsAuthenticated(true);
  };
  const handleLogout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  };
  if (isLoading) return /* @__PURE__ */ jsxs("div", {
    className: "min-h-screen bg-[#1A1F2C] flex items-center justify-center",
    children: [/* @__PURE__ */ jsx(SnowEffect, {}), /* @__PURE__ */ jsx("div", { className: "w-8 h-8 border-2 border-[#D4AF37]/30 border-t-[#D4AF37] rounded-full animate-spin" })]
  });
  if (!isAuthenticated) return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SnowEffect, {}), /* @__PURE__ */ jsx(PasswordGate, { onSuccess: handleAuthenticate })] });
  return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx(SnowEffect, {}), /* @__PURE__ */ jsx(PoemGrid, { onLogout: handleLogout })] });
}
function Index() {
  return /* @__PURE__ */ jsx(NewYearPoems, {});
}

export { Index as component };
//# sourceMappingURL=_public-EWc5Z18G.mjs.map
