<script>
setTitle('Contact')
import { fade } from 'svelte/transition'
import Logic from '../../Logic'
import config from '../../config'
import utils from '../../Logic/utils'
const email = config.ContactEmail

const form = {
    fullname: '',
    email: '',
    message: ''
}
function validateForm(){
    if(form.fullname.length < 2)
        alert('Please enter your name.')
    else if(!utils.ValidateEmail(form.email))
        alert('Please enter a valid email address.')
    else if(form.message.length < 10)
        alert('Please enter at least a short message.')
    else
        return true

    return false
}
async function submit(e){
    e.preventDefault()
    if(loading) return
    if(!validateForm()) return

    loading = true
    try {
        await Logic.postMessage(form)
        loading = false
        success = true
    } catch (error) {
        console.error(error)
        loading = false
        alert('We could not send your message, Please try again.')
    }
}

let loading = false
let success = false

</script>

<div class="root">
    <h1>Contact</h1>
    <form method="POST" class:transparent={success}>
        <label for="name">Your name</label> <br>
        <input bind:value={form.fullname} disabled={loading || success} class="input autoCap" type="text" name="name" placeholder="John Smith">
        <label for="email">Your email address</label> <br>
        <input bind:value={form.email} disabled={loading || success} class="input" type="text" name="email" placeholder="Name@domain.com">
        <label for="message">Message</label> <br>
        <textarea bind:value={form.message} disabled={loading || success} class="input" name="message" cols="30" rows="10" placeholder="Your message"></textarea>
        <button on:click={submit} class="outlined btn" disabled={loading || success}>
            {#if loading}
                <i class="fas fa-circle-notch rotating"></i> Sending...
            {:else}
                Send
            {/if}
        </button>
    </form>
    <h4>You can also send me an email to <a href="mailto:{ email }">{ email }</a></h4>
    {#if success}
        <div transition:fade class="success">
            <i class="fas fa-check-circle"></i> <br>
            Your message was successfully sent!
        </div>
    {/if}
</div>

<style lang="scss">
div.root{
    text-align: center;
    padding-bottom: 100px;
}
h1{
    margin-top: 0;
    margin-bottom: 0;
}
form{
    width: 500px;
    margin: auto;
    text-align: left;
    transition: opacity 0.3;
    @media (max-width: 600px){
        width: 100%;
        margin: none;
    }
}
form.transparent{
    opacity: 0.2;
}
input, textarea{
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 10px;
}
textarea{
    height: 100px;
    resize: none;
}
label{
    font-size: 14px;
    margin: 6px;
    display: inline-block;
    color: #888;
}
button{
    width: 100%;
    box-sizing: border-box;
}
div.success{
    margin-top: -290px;
    margin-bottom: 290px;
    font-size: 18px;
    color: #52C778;
    position: relative;
    z-index: 1;
}
div.success i{
    font-size: 32px;
    margin-bottom: 10px;
}
</style>