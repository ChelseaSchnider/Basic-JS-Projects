const quotes = [
    {
        name : '– Dr. Suess',
        quote: 'You know you’re in love when you can’t fall asleep because reality is finally better than your dreams.'
    },
    {
        name : '– Marilyn Monroe',
        quote: 'I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.'
    },
    {
        name : ' – John Lennon',
        quote: 'Life is what happens when you’re busy making other plans.'
    },
    {
        name : '– Stephen King',
        quote: 'Get busy living or get busy dying.'
    },
    {
        name : 'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',
        quote: '– Mark Caine'
    },
    {
        name : '– Helen Keller',
        quote: 'When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us.'
    },
    {
        name : '– Mark Twain',
        quote: 'Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.'
    },
    {
        name : '– Audre Lorde',
        quote: 'When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.'
    },
    {
        name : '– William Shakespeare',
        quote: 'A friend is one that knows you as you are, understands where you have been, accepts what you have become, and still, gently allows you to grow'
    },
    {
        name : '– Eleanor Roosevelt',
        quote: 'Great minds discuss ideas; average minds discuss events; small minds discuss people'
    },
    {
        name : '– David Brinkley',
        quote: 'A successful man is one who can lay a firm foundation with the bricks others have thrown at him'
    },
    {
        name : '– John F. Kennedy',
        quote: 'Those who dare to fail miserably can achieve greatly'
    },
    {
        name : '-Herbert Bayard Swope',
        quote: 'I can’t give you a sure-fire formula for success, but I can give you a formula for failure: try to please everybody all the time.'
    },
    {
        name : ' – Mae West',
        quote: 'You only live once, but if you do it right, once is enough.'
    },
    {
        name : '– Thomas J. Watson',
        quote: 'Would you like me to give you a formula for success? It’s quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn’t at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that’s where you will find success'
    },
    {
        name : '– Theodore Roosevelt',
        quote: 'It is hard to fail, but it is worse never to have tried to succeed.'
    },
    {
        name : '– Abraham Lincoln',
        quote: 'I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down.'
    },
    {
        name : '– Thomas A. Edison',
        quote: 'Many of life’s failures are people who did not realize how close they were to success when they gave up.'
    },
    {
        name: '– Dax Shepard',
        quote: 'Success is just a war of attrition. Sure, there’s an element of talent you should probably possess. But if you just stick around long enough, eventually something is going to happen.'
    },
    {
        name : '– Harriet Tubman',
        quote: 'Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world'
    },
    {
        name: '– Babe Ruth',
        quote: 'Never let the fear of striking out keep you from playing the game.'
    },
    {
        name : '– Napoleon Hill',
        quote : 'The No. 1 reason people fail in life is because they listen to their friends, family, and neighbors.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote')

quoteBtn.addEventListener('click', displayQuote)

function displayQuote() {
    let number = Math.floor(Math.random()*quotes.length);
    //console.log(number)
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote; 
}