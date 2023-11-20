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
source: 'Giyu',
citation:'Demon Slayer'
},
{
  quote: 'No matter how many people you may lose, you have no choice but to go on living -- no matter how devastating the blows, maybe.',
  source: 'Tengen',
  citation:'Demon Slayer'
  },
  {
    quote: 'It\'s okay to do things a little differently.',
    source: 'Tanjiro',
    citation:'Demon Slayer'
    },
    {
      quote: 'Those who regretted their own actions, I would never trample over them. Because demons were once human too. Just like me, they were human too.',
      source: 'Tanjiro',
      citation:'Demon Slayer',
      year:'Season 4'
      },
      {
        quote: 'Don\'t ever give up. Even if it\'s painful, even if it\'s agonizing, don\'t try to take the easy way out.',
        source: 'Zenitsu',
        citation:'Demon Slayer',
        year:'Season 5'
        },
        {
          quote: 'All I can do is work hard! That\'s the story of my life!',
          source: 'Tanjiro',
          citation:'Demon Slayer',
          year:'Season 1',
          episode:'Episode 6'
          },
          {
            quote: 'If you are feeling disheartened, that you are somehow not enough, set your heart ablaze.',
            source: 'Tanjiro',
            citation:'Demon Slayer',
            year:'Season 2',
            episode:'Episode 7'
            },
            {
              quote: 'If you can do one thing, hone it to perfection. Hone it to the utmost limit.',
              source: 'Jigoro',
              citation:'Demon Slayer',
              year:'Season 3',
              episode:'Episode 8'
              },
              {
                quote: 'I can do it. I know I can do it. I\'m the guy who gets it done, broken bones or not. No matter what, I can do it! I can fight!',
                source: 'Tanjiro',
                citation:'Demon Slayer',
                year:'Season 4',
                episode:'Episode 9'
                }

]


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  
      const quoteIndex = (Math.floor(Math.random() * quotes.length));
        console.log(quoteIndex);

     let chosenQuote = (quotes[quoteIndex].quote);
     let chosenSource = (quotes[quoteIndex].source);
     let chosenCitation = (quotes[quoteIndex].citation);
     let chosenYear = (quotes[quoteIndex].year);
     let chosenEpisode = (quotes[quoteIndex].episode);
     
     
     
let chosenQuoteObject = {
  quote: chosenQuote,
  source: chosenSource,
  citation: chosenCitation,
  year: chosenYear,
  episode: chosenEpisode
}


return chosenQuoteObject;
}

console.log(getRandomQuote());


/***
 * `printQuote` function
***/

function printQuote(func) {


let printChosenQuote = document.querySelector('.quote')
let printChosenSource = document.querySelector('.source')

    if (func.year === undefined && func.episode === undefined) {

      printChosenQuote.innerHTML = `${func.quote}`
      printChosenSource.innerHTML = `${func.source}, <i>${func.citation}</i>`

    } else if (func.episode === undefined) {

      printChosenQuote.innerHTML = `${func.quote}`
      printChosenSource.innerHTML = `${func.source}, <i>${func.citation}</i>, ${func.year}`

    } else {

      printChosenQuote.innerHTML = `${func.quote}`
      printChosenSource.innerHTML = `${func.source}, <i>${func.citation}</i>, ${func.year}: ${func.episode}`
    }

}


const randomValue = () => Math.floor(Math.random() * 256);

function colorChange(value) {
  const color = `rgb(${value()}, ${value()}, ${value()})`;
  return color;
}


setInterval(function() {
  document.body.style.backgroundColor = colorChange(randomValue);
  printQuote(getRandomQuote());
}, 5000);


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
