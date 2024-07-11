// Task 6/7



// Task 8
const jsBooks = [
    'A Smarter Way to Learn JavaScript',
    'Eloquent JavaScript',
    'JavaScript & JQuery',
    'JavaScript',
    'Learn JavaScript VISUALLY',
    'Learn JavaScript',
    'JavaScript: The Definitive Guide',
    'Effective JavaScript',
    'JavaScript for Kids',
    'Programming JavaScript Applications',
    'High-Performance Browser Networking',
    'You Don’t Know JS',
    'JavaScript Allongé, the “Six” Edition',
    'Beginning JavaScript',
    'Composing Software'
];
const keyword = 'JavaScript';
let javascriptBooks = [];
for (js of jsBooks) {
    if (js.toLowerCase().includes(keyword.toLowerCase())) {
        javascriptBooks.push(js);
    }
}
console.log('JavaScript Books = ', javascriptBooks)



// Task 9
const number = [24, 56, 84, 64, 21, 125, 2, 57, 154, 6, 75, 21, 9458];
const sortedNumber = number.sort(function (a, b) {
    return a - b;
});
console.log('Shorted Number  = ', sortedNumber);




