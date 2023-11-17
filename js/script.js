/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
quote: 'Feel the rage. The powerful, pure rage of not being able to forgive will become your unswerving drive to take action.',
name: 'Giyu',
source:'Demon Slayer',
season:'Season 1',
episode:'Episode 1',
movie: ''
},
{
  quote: 'No matter how many people you may lose, you have no choice but to go on living -- no matter how devastating the blows, maybe.',
  name: 'Tengen',
  source:'Demon Slayer',
  season:'',
  episode:'',
  movie: 'The Entertainment District Movie'
  },
  {
    quote: 'It\'s okay to do things a little differently.',
    name: 'Tanjiro',
    source:'Demon Slayer',
    season:'Season 1',
    episode:'Episode 7',
    movie: ''
    },
    {
      quote: 'Those who regretted their own actions, I would never trample over them. Because demons were once human too. Just like me, they were human too.',
      name: 'Tanjiro',
      source:'Demon Slayer',
      season:'Season 1',
      episode:'Episode 2',
      movie: ''
      },
      {
        quote: 'Don\'t ever give up. Even if it\'s painful, even if it\'s agonizing, don\'t try to take the easy way out.',
        name: 'Zenitsu',
        source:'Demon Slayer',
        season:'Season 1',
        episode:'Episode 17',
        movie: ''
        },
        {
          quote: 'All I can do is work hard! That\'s the story of my life!',
          name: 'Tanjiro',
          source:'Demon Slayer',
          season:'Season 1',
          episode:'Episode 2',
          movie: ''
          },
          {
            quote: 'If you are feeling disheartened, that you are somehow not enough, set your heart ablaze.',
            name: 'Tanjiro',
            source:'Demon Slayer',
            season:'Season 2',
            episode:'Episode 7',
            movie: ''
            },
            {
              quote: 'If you can do one thing, hone it to perfection. Hone it to the utmost limit.',
              name: 'Jigoro',
              source:'Demon Slayer',
              season:'Season 1',
              episode:'Episode 16',
              movie: ''
              },
              {
                quote: 'I can do it. I know I can do it. I\'m the guy who gets it done, broken bones or not. No matter what, I can do it! I can fight!',
                name: 'Tanjiro',
                source:'Demon Slayer',
                season:'Season 1',
                episode:'Episode 13',
                movie: ''
                }

]


/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);