<script>
import { Link } from "svelte-routing";
export let image = ''
export let title = ''
export let link = ''
</script>

<Link to={link}>
    <div class="root">
        <img src={image} alt=title>
        <span>{ title }</span>
    </div>
</Link>

<style type="text/scss">
div.root{
    display: inline-block;
    width: 280px;
    height: 200px;
    padding: 25px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.3s;
    &:hover{
        transform: scale(1.02);
    }
    &:active{
        transform: scale(0.95);
    }
    &:hover > img{
        box-shadow: 2px 2px 20px #e2e2e2;
    }
    img{
        box-sizing: border-box;
        width: 100%;
        height: 160px;
        border: 2px solid white;
        box-shadow: 0 0 10px #f2f2f2;
        margin-bottom: 10px;
        border-radius: 4px;
        transition: box-shadow 0.3s;
    }
    span{
        display: inline-block;
        max-width: 100%;
        padding-left: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #17181B;
    }
    @media (max-width: 600px){
        &{
            width: 100%;
            box-sizing: border-box;
            padding: 5px;
            margin-bottom: 3rem;
        }
        img{
            height: auto;
        }
    }
}
</style>