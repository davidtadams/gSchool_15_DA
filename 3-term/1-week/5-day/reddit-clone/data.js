//data: http://gameofthrones.wikia.com/wiki/Category:Characters
var timeFrame = 1000 * 60 * 60 * 24 * 7;
var GOTdata = [
  {
    title: 'Gregor Clegane',
    author: 'Georgey',
    description: 'Gregor Clegane is a recurring character in the first, second, fourth, fifth and sixth seasons. He was originally played by guest star Conan Stevens and debuts in "Cripples, Bastards and Broken Things." Stevens was replaced by Ian Whyte, who had already appeared in the series in other roles, for the second season. In the fourth and fifth seasons he is portrayed by Hafþór Júlíus Björnsson.',
    image_url: 'http://vignette1.wikia.nocookie.net/gameofthrones/images/b/be/Gregor_Clegane_4x07.jpg',
    date_normal: new Date(Date.now() - (Math.floor(Math.random() * timeFrame))),
    upvotes: 1,
    comments: [
      {
        author: 'david',
        text: 'this is cool'
      },
      {
        author: 'Jon',
        text: 'You are weak'
      }
    ],
    showComments: false,
    showNewComment: false
  },
  {
    title: 'Jon Snow',
    author: 'Martin',
    description: "Jon Snow is a major character in the first, second, third, fourth, fifth and sixth seasons. He is played by starring cast member Kit Harington, and debuts in the series premiere. Jon is the bastard son of Lord Eddard Stark of Winterfell. He was a steward in the Night's Watch. Now serving on the Wall, Jon has found a place of acceptance where the circumstances of his birth are of little importance. He has a pet direwolf named Ghost, and wields the bastard sword, Longclaw, which was a gift from Lord Commander Jeor Mormont, who took Jon as his personal steward and came to see him as a surrogate son.",
    image_url: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/9/95/Jon_Snow_%28S05E05%29.jpg',
    date_normal: new Date(Date.now() - (Math.floor(Math.random() * timeFrame))),
    upvotes: 2,
    comments: [

    ],
    showComments: false,
    showNewComment: false
  },
  {
    title: 'Daenerys Targaryen',
    author: 'George R. R. Martin',
    description: "Queen Daenerys Targaryen, sometimes called Dany by her brother Viserys, is a major character in the first, second, third, fourth, fifth, and sixth seasons. She is played by starring cast member Emilia Clarke, and debuts in the series premiere.",
    image_url: 'http://vignette3.wikia.nocookie.net/gameofthrones/images/9/9b/Daenerys-MothersMercy.jpg',
    date_normal: new Date(Date.now() - (Math.floor(Math.random() * timeFrame))),
    upvotes: 5,
    comments: [
      {
        author: 'dragon',
        text: 'Thanks for being a great mom!'
      },
      {
        author: 'slave',
        text: 'YAYYAYAYAY!!!'
      },
      {
        author: 'got4lyfe',
        text: 'Hows it going?'
      }
    ],
    showComments: false,
    showNewComment: false
  },
  {
    title: 'Tyrion Lannister',
    author: 'Alexander',
    description: "Tyrion Lannister is a major character in the first, second, third, fourth, fifth, and sixth seasons. He is played by starring cast member Peter Dinklage and debuts in the series premiere. Tyrion Lannister is the youngest son of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces.",
    image_url: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/c/c8/Tyrion-TheDanceofDragons.jpg',
    date_normal: new Date(Date.now() - (Math.floor(Math.random() * timeFrame))),
    upvotes: 7,
    comments: [

    ],
    showComments: false,
    showNewComment: false
  },
  {
    title: 'Sansa Stark',
    author: 'starkfan',
    description: "Sansa Stark is a major character in the first, second, third, fourth, fifth, and sixth seasons. She is played by starring cast member Sophie Turner, and debuts in the series premiere. Sansa is the daughter of Lord Eddard Stark of Winterfell and his wife Lady Catelyn, sister of Robb, Arya, Bran and Rickon Stark, and half-sister of Jon Snow. She moves to King's Landing when her father is appointed Hand of the King to Robert Baratheon, and she is betrothed to heir apparent Joffrey.",
    image_url: 'http://vignette3.wikia.nocookie.net/gameofthrones/images/5/59/Sansa-S05E06.jpg',
    date_normal: new Date(Date.now() - (Math.floor(Math.random() * timeFrame))),
    upvotes: -2,
    comments: [
      {
        author: 'whatver',
        text: 'Complains way too much...'
      },
      {
        author: 'fan2',
        text: 'Not a great person, should have died awhile ago'
      },
      {
        author: 'fan3',
        text: 'Pretty boring character, wish she did more exciting stuff'
      },
      {
        author: 'fan3',
        text: 'what do you know about GOT?'
      }
    ],
    showComments: false,
    showNewComment: false
  },
  {
    title: 'Arya Stark',
    author: 'George R. R. Martin',
    description: "Arya Stark is a major character in the first, second, third, fourth, fifth and sixth seasons. She is played by starring cast member Maisie Williams, and debuts in the series premiere. Arya is the younger daughter of Lord Eddard Stark and his wife Lady Catelyn Stark. She is headstrong, fiercely independent, disdains traditional women's pursuits, and thus is often mistaken for a boy. She wields a sword named Needle, a gift from her half-brother, Jon Snow, and was trained in the Braavosi style of swordfighting while living in King's Landing. She adopted the direwolf Nymeria, but they have since been separated after Nymeria attacked Joffrey, forcing Arya to send her away in order to prevent her execution.",
    image_url: 'http://vignette4.wikia.nocookie.net/gameofthrones/images/3/39/Aryamothersmercy.jpeg',
    date_normal: new Date(Date.now() - (Math.floor(Math.random() * timeFrame))),
    upvotes: 0,
    comments: [
      {
        author: 'yaboi',
        text: 'She is a complete badass assassin, so cooL!'
      }
    ],
    showComments: false,
    showNewComment: false
  },
  {
    title: 'Joffrey Baratheon',
    author: 'gMartin007',
    description: "King Joffrey Baratheon is a major character in the first, second, third, and fourth seasons. He is played by starring cast member Jack Gleeson and debuts in the series premiere. Joffrey ruled the Seven Kingdoms, having claimed the Iron Throne after his legal father, King Robert Baratheon, died. However, Joffrey was actually the bastard son of the incestuous relationship between Ser Jaime Lannister and Queen Cersei Lannister. Because of this, his claim to the Iron Throne was challenged by Robert's younger brother, Stannis Baratheon. He was formally styled as His Grace, Joffrey of the Houses Baratheon and Lannister, the First of His Name, King of the Andals and the First Men, Lord of the Seven Kingdoms, and Protector of the Realm.",
    image_url: 'http://vignette4.wikia.nocookie.net/gameofthrones/images/4/4c/Joffrey-Baratheon-Profile-HD.png',
    date_normal: new Date(Date.now() - (Math.floor(Math.random() * timeFrame))),
    upvotes: -10,
    comments: [
      {
        author: 'superfan',
        text: 'Worst character in the whole show!!'
      },
      {
        author: 'tery',
        text: 'What a monster!!'
      },
      {
        author: 'got1',
        text: 'I was pretty happy when he died'
      },
      {
        author: 'got38',
        text: 'My favorite character!!!'
      },
      {
        author: '7dks3',
        text: 'How could you say that?!?!?'
      }
    ],
    showComments: false,
    showNewComment: false
  },
  {
    title: 'Margaery Tyrell',
    author: 'GOTsuperfan',
    description: "Margaery is known for her beauty, political cunning, and ambition, although she has a compassionate side. Due to Cersei Lannister's machinations, Margaery has recently been arrested by the Faith Militant for perjury on her brother Loras's behalf, and the two are to stand trial.",
    image_url: 'http://vignette4.wikia.nocookie.net/gameofthrones/images/6/6e/MargS5.png',
    date_normal: new Date(Date.now() - (Math.floor(Math.random() * timeFrame))),
    upvotes: 1,
    comments: [
      {
        author: 'tyrellhouse',
        text: 'I love Margaery, she is amazing!!'
      }
    ],
    showComments: false,
    showNewComment: false
  },
  {
    title: 'Melisandre',
    author: 'GeorgeyM',
    description: "Melisandre, often referred to as The Red Woman, is a major character in the second, third, fourth, fifth and sixth seasons. She is played by starring cast member Carice van Houten and debuts in 'The North Remembers.' She is a priestess of the Lord of Light and a close advisor to Stannis Baratheon in his campaign to take the Iron Throne, but ultimately abandons him after her actions inadvertently lead to the destruction of his family and army and flees to Castle Black.",
    image_url: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/7/7c/Melisandre_The_Dance_of_Dragons.jpg',
    date_normal: new Date(Date.now() - (Math.floor(Math.random() * timeFrame))),
    upvotes: 0,
    comments: [
      {
        author: 'sup',
        text: 'She kinda scares me, woah...'
      },
      {
        author: 'heynow',
        text: 'Why is she scary?? I think she is awesome!'
      }
    ],
    showComments: false,
    showNewComment: false
  },
  {
    title: 'Jaime Lannister',
    author: 'SirJaime ',
    description: "Jaime Lannister is a major character in the first, second, third, fourth, fifth and sixth seasons. He is played by starring cast member Nikolaj Coster-Waldau and debuts in the series premiere.",
    image_url: 'http://vignette2.wikia.nocookie.net/gameofthrones/images/8/81/Jaime_Lannister_%28S05E02%29.jpg',
    date_normal: new Date(Date.now() - (Math.floor(Math.random() * timeFrame))),
    upvotes: 8,
    comments: [
      {
        author: 'SirJaime',
        text: 'I added myself...LOL'
      },
      {
        author: 'SirJaime',
        text: 'And gave myself lots of upvotes hehehe'
      },
      {
        author: 'SirJaime',
        text: 'What is everyone doing tonight?'
      },
      {
        author: 'SirJaime',
        text: 'Anyone want to come to my party?'
      },
      {
        author: 'everyone',
        text: 'No!'
      },
      {
        author: 'SirJaime',
        text: "It's okay, maybe next time! hehehehe"
      }
    ],
    showComments: false,
    showNewComment: false
  }
]

for (var i = 0; i < GOTdata.length; i++) {
  GOTdata[i].date_created = moment(GOTdata[i].date_normal).calendar();
}
