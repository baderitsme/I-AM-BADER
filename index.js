let numberOfClick = 0
let numberOfReset = 0

function updateNumberOfClick() {
    document.getElementById('output').innerText = 'No. of Clicks: ' + numberOfClick
}

document.getElementById('click-me').addEventListener('click', function () {
    console.log('Hello There');
    document.querySelector('h1').innerText = 'General kenobi ' + Math.random() * 1000;

    numberOfClick = numberOfClick + 1;
    updateNumberOfClick();

    if (numberOfClick >= 10) {
        document.getElementById('output').style.background = 'rgb(75, 189, 215)';
    }

    const li = document.createElement('li')
    li.innerText = 'this is a consequence of click no. ' + numberOfClick;
    document.querySelector('ol').appendChild(li);
})

document.getElementById('reset-clicks').addEventListener('click', function () {
    numberOfClick = 0;
    updateNumberOfClick();
    document.getElementById('output').style.background = 'rgba(231, 33, 33, 0.849)';
    numberOfReset = numberOfReset + 1
    document.getElementById('output-2').innerText = 'No. of resets: ' + numberOfReset
    const li = document.createElement('li')
    li.innerText = 'this is a consequence of reseting your consequences this many times: ' + numberOfReset
    document.querySelector('ol').appendChild(li);
})