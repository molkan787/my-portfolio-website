<script>
import GalleryItem from './GalleryItem.svelte'
export let items = []
export let urlPrefix = '';

</script>

<div class="gallery">
{#each items as item}
    <GalleryItem image={item.thumbnail} title={item.title} link={urlPrefix + item.slug} />
{/each}
</div>
