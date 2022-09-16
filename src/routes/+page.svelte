<script>
    import { cards } from '../dbstore.js';

    var card;
    if ($cards.length > 0) {
        card = $cards[0];
    } else {
        card = "";
    }
</script>

<div id="navbar"></div>
<div id="card">
    {#if card}
        {card}
    {:else}
        <h2>There are no cards available for review.</h2>
    {/if}
</div>
<div id="answerbar">
    <a href={"/edit" + ((card) ? ("?card=" + card) : "")}>
        <button id="edit">Edit</button>
    </a>
    <div id="answerbuttons">
        <button id="wrong">Wrong</button>
        <button id="right">Right</button>
    </div>
</div>

<style>
* {
    font-family: sans-serif;
}

h2 {
    text-align: center;
    margin-top: 5vh;
}

#answerbar {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 2px solid black;
}

#answerbuttons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}

#edit {
    position: absolute;
    top:50%;
    transform: translateY(-50%);
}

#wrong, #right, #edit {
    margin: 0px 20px;
    padding: 5px;
    font-size: 20px;
    border: 2px solid black;
    border-radius: 4px;
}

#edit:active {
    background-color: gray;
}

#wrong {
    background-color: red;
}

#wrong:active {
    background-color: darkred;
}

#right {
    background-color: green;
}

#right:active {
    background-color: darkgreen;
}
</style>