<script>
export let title = ''
export let text = ''
</script>

<div class="root">
    <h1>{title}</h1>
    <p>{text}</p>
    <slot></slot>
</div>

<style>
div.root{
    margin-top: 160px;
    padding: 50px;
    text-align: center;
}
h1{
    font-size: 34px;
}
p{
    font-size: 20px;
}
</style>