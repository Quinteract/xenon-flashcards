<script>
    import { page } from '$app/stores';
    import { cards, notes } from '../../dbstore.js';
    
    var noteid = $page.url.searchParams.has('note') ? $page.url.searchParams.get('note') : null;

    function genId() {
        var id = '';
        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 20; i++) {
            id += chars[Math.floor(Math.random() * chars.length)];
        }
        return id;
    }

    function createNote() {
        var newnoteid = genId();
        var newnote = {
            id: newnoteid,
            text: "",
            cards: []
        };
        $notes[newnoteid] = newnote;
        changeNote(id);
    }

    function changeNote(id) {
        noteid = id;
        history.pushState({}, "", "/edit?note=" + id);
    }

    function deleteNote(id) {
        for (cardid of $notes[id].cards) {
            delete $cards[cardid]
        }
        delete $notes[id]
    }
</script>

<div id="browser">
    <input id="query" autocomplete="off">
    <div id="notelist">
        {#each Object.entries($notes) as [id, note]}
            <div class="notelistentry" id={ (id === noteid) ? "selected" : "" } on:click={ changeNote(id) }>{id}</div>
        {/each}
    </div>
</div>
<div id="editor">
    <div id="notecontainer">
        {#if noteid in $notes}
            <textarea id="note" bind:value={$notes[noteid].text}></textarea>
        {:else if noteid}
            <h2 id="nonote">The selected note does not exist.</h2>
        {:else}
            <h2 id="nonote">No note is selected.</h2>
        {/if}
    </div>
    <div id="toolbar">
        <div>
            <button id="new" on:click={ createNote }>New Note</button>
        </div>
        <div>
            <button id="delete" on:click={ () => {if (confirm("Delete note?")) {deleteNote(noteid); noteid = null;}} }>Delete Note</button>
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
        width: 100%;
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

    #study, #delete, #new {
        font-size: 20px;
        border: 2px solid black;
        border-radius: 4px;
        padding: 5px;
        background: white;
        cursor: pointer;
    }

    #study:active, #delete:active, #new:active {
        background: gray;
    }

    #notelist {
        border-top: 2px solid black;
        margin-top: 10px;
    }

    .notelistentry {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid gray;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }

    .notelistentry:hover {
        background-color: lightgray;
    }

    #selected {
        background-color: darkgray;
    }
</style>