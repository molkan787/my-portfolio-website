<script>
export let id = ''
import static_data from '../../Logic/static_data'
const data = static_data.mappedProjects[id]
setTitle(data.title)
</script>

<div class="root">
    <img src={data.image} alt="{data.title}"/>
    <div class="content">
        <h1>{data.title}</h1>
        <p>{@html data.description}</p>
        <div class="tags">
            {#each data.tags as tag}
                <label class="tag">{ tag }</label>
            {/each}
        </div>
        {#if data.button }
            <a href={data.button.link} target={data.button.sameWindow ? '_self' : '_blank'}>
                <button class="outlined btn">{ data.button.text }</button>
            </a>
        {/if}
    </div>
</div>

<style type="text/scss">
div.root{
    margin-bottom: 240px;
    padding: 20px;
    text-align: left;
    height: 300px;
}
div.content{
    float: left;
    max-width: 320px;
}
h1{
    font-size: 34px;
    margin-top: 0;
}
p{
    font-size: 18px;
    line-height: 1.4;
}
img{
    width: 600px;
    margin-left: -600px;
    float: right;
    border: 2px solid white;
    box-shadow: 0 0 20px #f2f2f2;
}
.tags{
    width: 320px;
}
.tag{
    display: inline-block;
    background-color: #eee;
    padding: 6px 10px;
    border-radius: 6px;
    margin-right: 5px;
    margin-bottom: 5px;
    white-space: nowrap;
}
.btn{
    width: 100%;
    margin-top: 20px;
}
</style>