<script>
    import { page } from '$app/stores';
    
    var card = $page.url.searchParams.has('card') ? $page.url.searchParams.get('card') : "";
</script>

<div id="browser">
    <input id="query">
</div>
<div id="editor">
    {card}
</div>