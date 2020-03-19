const mainPage = document.getElementById('mainpage-container')
const searchBar = document.getElementById('search-bar')
const submitBtn = document.getElementById('submit-btn')
const secondPage = document.getElementById('quote-container')
const quoteButton = document.getElementById('quoteBtn')

submitBtn.addEventListener('click', ()=> {
    startFunction();
})




function startFunction(){
    mainPage.classList.add('hide')
    secondPage.classList.remove('hide')
    quoteButton.classList.remove('hide')

    showQuote()
}

function showQuote(){
fetch("https://matchilling-tronald-dump-v1.p.rapidapi.com/random/quote", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "matchilling-tronald-dump-v1.p.rapidapi.com",
		"x-rapidapi-key": "02da8b37c2msh82b095702520360p1ca45bjsnfb930e5f3916",
		"accept": "application/hal+json"
	}
})
.then(res => res.json())
.then(data => {
let quote = document.createElement("div")
quote.setAttribute("class", "quoteClass")

quote.innerHTML = `<div class="div1">Tronald Dump said:</div><br><div class="div2">"${data.value}"</div>`

secondPage.append(quote)

quoteButton.addEventListener('click', ()=>{
    secondPage.removeChild(quote)
    showQuote()
})


})
.catch(err => {
	console.log(err);
});
}