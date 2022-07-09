<script>
import { Link } from "svelte-routing";
export let odd = false;
export let data = {}
</script>

<div class="root" class:odd={odd}>
    <img class:odd={odd} src={data.image} alt="{data.title}"/>
    <div class:odd={odd} class="content">
        <h1>{data.title}</h1>
        <p>{@html data.description}</p>
        <div class="linkParent">
            <Link to={'portfolio/' + data.slug}>
                <span class="txt btn">More information</span>
            </Link>
        </div>
    </div>
</div>

<style lang="scss">
div.root{
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 160px;
    margin-bottom: 240px;
    padding: 1rem;
    text-align: left;
    box-sizing: border-box;
    justify-content: space-between;
    max-height: 380px;
    @media (max-width: 600px){
        margin-top: 100px;
        margin-bottom: 0px;
    }
    img{
        border: 2px solid white;
        border-radius: 4px;
        box-shadow: 0 0 20px #f2f2f2;
    }

    @media (min-width: 480px){
        height: calc(100vw / 3);
    }
    &.odd{
        .content{
            text-align: right;
            padding-left: 1rem;
        }
    }
    &:not(.odd){
        flex-direction: row-reverse;
        .content{
            padding-right: 1rem;
        }
    }
    @media (max-width: 600px) {
        &, &.odd {
            flex-direction: column !important;
            img{
                width: 100%;
                height: auto;
            }
            div.content{
                max-width: 100%;
                padding-top: 1rem;
            }
        }
    }
}
div.content{
    max-width: 45%;
}
h1{
    font-size: 34px;
    margin-top: 0;
}
p{
    font-size: 20px;
}
@media (max-width: 900px){
    h1{
        font-size: 26px;
    }
    p{
        font-size: 16px;
    }
}
@media (max-width: 700px){
    h1{
        font-size: 22px;
    }
    p{
        font-size: 14px;
    }
}

.linkParent{
    margin-left: -10px;
}
</style>