<script>
export let id = ''
import static_data from '../../Logic/static_data'
const data = static_data.mappedProjects[id]
setTitle(data.title)
</script>

<div class="root">
    <div class="content">
        <h1>{data.title}</h1>
        <p>{@html data.description}</p>
        <div class="tags">
            {#each data.tags as tag}
                <span class="tag">{ tag }</span>
            {/each}
        </div>
        {#if data.button }
            <a href={data.button.link} target={data.button.sameWindow ? '_self' : '_blank'}>
                <button class="outlined btn">{ data.button.text }</button>
            </a>
        {/if}
    </div>
    <div class="spacer"></div>
    <img src={data.image} alt="{data.title}"/>
</div>

<style type="text/scss">
div.root{
    display: flex;
    flex-direction: row;
    padding: 20px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    @media (max-width: 600px){
        padding: 0;
        flex-direction: column-reverse;
    }
    div.content{
        flex: 1;
        max-width: 320px;
        h1{
            font-size: 34px;
            margin-top: 0;
        }
        p{
            font-size: 18px;
            line-height: 1.4;
        }
    }
    .spacer{
        width: 6rem;
        min-width: 6rem;
        max-width: 6rem;
    }
    img{
        flex: 1;
        width: 100%;
        max-width: 600px;
        border: 2px solid white;
        box-shadow: 0 0 20px #f2f2f2;
        @media (max-width: 600px){
            margin-bottom: 1rem;
        }
    }
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