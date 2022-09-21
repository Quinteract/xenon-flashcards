<script>
    import { cards } from "../dbstore.js";
    import { onMount } from "svelte";

    var cardid = null;

    function selectRandomCard() {
        if ($cards != null && Object.keys($cards).length > 0) {
            var cardids = Object.keys($cards);
            cardid = cardids[Math.floor(cardids.length * Math.random())];
        }
    }

    var flipped = false;

    function wrongAnswer() {
        flipped = false;
        selectRandomCard();
    }

    function rightAnswer() {
        flipped = false;
        selectRandomCard();
    }

    onMount(() => {
        selectRandomCard();
    });
</script>

<div id="card">
    {#if cardid !== null}
        {#if !flipped}
            {$cards[cardid].front}
        {:else}
            {$cards[cardid].back}
        {/if}
    {:else}
        <h2>There are no cards available for review.</h2>
    {/if}
</div>
<div id="answerbar">
    <a href={"/edit" + (cardid ? "?card=" + cardid : "")}>
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
            <button id="wrong" on:click={wrongAnswer}>Wrong</button>
            <button id="right" on:click={rightAnswer}>Right</button>
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

    #card {
        text-align: center;
        padding: 20px;
        font-size: 20px;
    }
</style>
