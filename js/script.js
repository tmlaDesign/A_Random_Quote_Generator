/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat


/*** 
 * `quotes` array - stores 9 objects containing varying amounts of properties and values pertaining to the anime Demon Slayer
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
// The following code stores a random RGB value to be used inside the printQuote function and the setInterval function 
const randomValue = () => Math.floor(Math.random() * 256);

function colorChange(value) {
  const color = `rgb(${value()}, ${value()}, ${value()})`;
  return color;
}

/***
 * `getRandomQuote` function identifies a random number that is stored inside a variable, which is used to identify an object position in the quotes array
 * Then dot notation is used to store property values inside new variables making up a new object which is the returned value of the getRandomQuote function
***/

const getRandomQuote = () => {
  
      let quoteIndex = (Math.floor(Math.random() * quotes.length));
      let chosenQuoteObject = quotes[quoteIndex];
      return chosenQuoteObject;
};

console.log(getRandomQuote());



/***
 * `printQuote` function calls randomQuote function to use the random object stored inside var chosenQuoteObject.
 * Three conditional statements are used to print out the supplied property values depending on which object properties exist
***/

function printQuote() {

let randomObject = getRandomQuote();

let insertQuote = `<p class="quote">${randomObject.quote}</p>
      <p class="source">${randomObject.source}<span class="citation">${randomObject.citation}</span>`;


    if (randomObject.episode) {

      insertQuote += `<span class="year">${randomObject.year}</span><span class="year">${randomObject.episode}</span>`


    } else if (randomObject.year) {


      insertQuote += `<span class="year">${randomObject.year}</span>`
     
    }

    insertQuote += `</p>`

    document.getElementById('quote-box').innerHTML = insertQuote;
    document.body.style.backgroundColor = colorChange(randomValue);

}


// The following code changes the background color and inserts a new quote every 5 seconds 
setInterval(function() {
  document.body.style.backgroundColor = colorChange(randomValue);
  printQuote();
}, 5000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
