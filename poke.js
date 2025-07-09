// https://pokeapi.co/api/v2/pokemon?limit=30&offset=0

fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0')
.then(function (res) {
    return res.json()
})
.then(function (res) {
   for (let index = 0; index < res.results.length; index++) {
    const element = res.results[index];
    console.log(element)
    document.getElementById('output').innerHTML +=`<a href="poki.html?name=${element.name}"> ${element.name}</a>`
  }})
  
  