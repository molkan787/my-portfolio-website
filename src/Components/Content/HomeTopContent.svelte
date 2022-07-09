<script>
import JSLogo from '../Elements/JSLogo.svelte'
</script>

<div class="home-top-content">
    <div class="jslogo-wrapper">
        <JSLogo />
    </div>
    <h1>Dahmane Seghier.</h1>
    <p>
        Hello, my name is <u>Dahmane Seghier</u>. <br>
        As a <span class="accent color">Software Engineer</span>
        with experience in full-stack web development for
        businesses of all sizes as well as custom Desktop software creation
        I can help you build your next product or project!
    </p>
</div>

<style>
h1{
    font-size: 44px;
    margin-bottom: 0;
    font-family: "CircularStd Bold";
}
p{
    font-size: 1.2rem;
    max-width: 34rem;
    line-height: 1.8rem;
}
.jslogo-wrapper{
    float: right;
    width: 200px;
    margin: 6px;
}
@media (max-width: 600px){
    .jslogo-wrapper{
        position: absolute;
        right: -39px;
        top: 137px;
        z-index: -1;
        opacity: 0.2;
        transform: rotate(35deg);
    }
    p{
        text-shadow: 1px 0px 1px white;
    }
}
@media (max-width: 1200px){
    .home-top-content{
        padding: 1rem;
    }
}
</style>