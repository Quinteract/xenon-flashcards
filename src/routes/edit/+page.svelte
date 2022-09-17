<script>
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import { cards, notes } from '../../dbstore.js';
    
    var noteid = $page.url.searchParams.has('note') ? $page.url.searchParams.get('note') : null;
    var note = null;
    $: if (noteid in $notes) {
        note = $notes[noteid]
    } else if (browser && noteid !== null) {
        location.href = '/edit';
    }

    var notetext = "";

    function genid() {
        var id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 20; i++) {
            id += chars[Math.floor(Math.random() * chars.length)];
        }
        return id;
    }
</script>

<div id="browser">
    <input id="query" autocomplete="off">
    <div id="notelist">
        {note}
        {#each Object.entries($notes) as [id, note]}
            <p>{id}</p>
        {/each}
    </div>
</div>
<div id="editor">
    <div id="notecontainer">
        {#if noteid !== null}
            <textarea id="note" bind:value={notetext}></textarea>
        {:else}
            <h2 id="nonote">No note is selected.</h2>
        {/if}
    </div>
    <div id="toolbar">
        <div>
        <a href={"/edit?card=" + genid()}>
            <button id="new">New Note</button>
        </a>
        </div>
        <a href="/">
            <button id="study">Study</button>
        </a>
    </div>
</div>

<style>
    * {
        font-family: sans-serif;
    }

    #browser {
        position: absolute;
        left: 0;
        width: 50%;
        height: 100%;
        border-right: 2px solid black;
        text-align: center;
    }

    #query {
        width: 90%;
        font-size: 20px;
        border: 2px solid black;
        border-radius: 4px;
        margin-top: 10px;
        text-align: left;
        padding: 5px;
    }

    #editor {
        position: absolute;
        right: 0;
        width: 50%;
        height: 100%;
    }

    #notecontainer {
        position: absolute;
        width: 100%;
        top: 0px;
        bottom: 60px;
        border-bottom: 2px solid black;
        text-align: center;
    }

    #note {
        resize: none;
        position: absolute;
        width: 90%;
        height: 90%;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 16px;
        border: 2px solid black;
        border-radius: 4px;
        padding: 5px;
    }

    #nonote {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    #toolbar {
        position: absolute;
        width: 100%;
        height: 60px;
        bottom: 0px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    #study, #new {
        font-size: 20px;
        border: 2px solid black;
        border-radius: 4px;
        padding: 5px;
        background: white;
    }

    #study:active, #new:active {
        background: gray;
    }
</style>