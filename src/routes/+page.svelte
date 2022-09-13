<div id="navbar">
    Xenon Flashcards
</div>
<div id="card"></div>
<div id="answerbar">
    <div id="answerbuttons">
        <button id="wrong">Wrong</button>
        <button id="right">Right</button>
    </div>
</div>

<style>
* {
    font-family: sans-serif;
}

#answerbar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    text-align: center;
    border-top: 2px solid black;
}

#answerbuttons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

#wrong, #right {
    margin: 0px 20px;
    padding: 5px;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 4px;
}

#wrong {
    background-color: firebrick;
}

#right {
    background-color: olivedrab;
}
</style>