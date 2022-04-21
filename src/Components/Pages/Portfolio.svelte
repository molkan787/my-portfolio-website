<script>
setTitle('Portfolio')
import Gallery from '../Elements/Gallery.svelte'
import static_data from '../../Logic/static_data'
const items = static_data.projects;
</script>

<div class="root">
    <Gallery {items} urlPrefix="/portfolio/" />
</div>

<style>
div.root{
    padding-bottom: 160px;
}
</style>