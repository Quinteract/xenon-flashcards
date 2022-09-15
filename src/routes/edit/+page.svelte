<script>
    import { page } from '$app/stores';
    
    var card = $page.url.searchParams.has('card') ? $page.url.searchParams.get('card') : "";
</script>

<div id="browser">
    <input id="query" autocomplete="off">
</div>
<div id="editor">
    <div id="notecontainer">
        <textarea id="note"></textarea>
    </div>
    <div id="toolbar">
        <a href="/">
            <button id="study">Study</button>
        </a>
    </div>
</div>

<style>
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

    #toolbar {
        position: absolute;
        width: 100%;
        height: 60px;
        bottom: 0px;
    }

    #study {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        font-size: 20px;
        border: 2px solid black;
        border-radius: 4px;
        padding: 5px;
        background: white;
    }

    #study:active {
        background: gray;
    }
</style>