const poki = new URLSearchParams(window.location.search).get("name")

fetch('https://pokeapi.co/api/v2/pokemon/' + poki)
.then(function (res) {
    return res.json()
})
.then(function (res) {
    document.getElementById("poki-name").innerText = res.name;
    document.getElementById("poki-image").src = res.sprites.front_default;
})