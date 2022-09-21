<script>
    import { cards } from "../dbstore.js";

    var card = null;
    if ($cards != null && Object.keys($cards).length > 0) {
        card = $cards[Object.keys($cards)[0]];
    }

    var flipped = false;
</script>

<div id="card">
    {#if card != null}
        {#if !flipped}
            {card.front}
        {:else}
            {card.back}
        {/if}
    {:else}
        <h2>There are no cards available for review.</h2>
    {/if}
</div>
<div id="answerbar">
    <a href={"/edit" + (card ? "?card=" + card : "")}>
        <button id="edit">Edit</button>
    </a>
    <div id="answerbuttons">
        {#if !flipped}
            <button
                id="flip"
                on:click={() => {
                    flipped = true;
                }}>Flip</button
            >
        {:else}
            <button id="wrong">Wrong</button>
            <button id="right">Right</button>
        {/if}
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
        top: 50%;
        transform: translateY(-50%);
    }

    #wrong,
    #right,
    #edit,
    #flip {
        margin: 0px 20px;
        padding: 5px;
        font-size: 20px;
        border: 2px solid black;
        border-radius: 4px;
        cursor: pointer;
    }

    #edit:active,
    #flip:active {
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
