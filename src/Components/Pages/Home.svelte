<script>
setTitle(null)
import static_data from '../../Logic/static_data'
import { Link } from "svelte-routing";
import TopContent from '../Content/HomeTopContent.svelte'
import ContentBlock from '../Elements/ContentBlock.svelte'
import ProjectBlock from '../Elements/ProjectBlock.svelte'

const skills = static_data.skills
const projects = static_data.homeProjects
</script>

<div class="root">
    
    <TopContent />

    <ContentBlock title="Skills" text="Over 4 years of experience using these technologies." >
        <div class="skills">
            {#each skills as skill}
                <img class="skill-item" src={'/res/logos/' + skill.image} alt={skill.title} title={skill.title}/>
            {/each}
        </div>
    </ContentBlock>

    <h1 class="separationTitle">My work</h1>

    {#each projects as project, i}
        <ProjectBlock data={project} odd={i % 2} />
    {/each}

    <div class="before-footer">
        <Link to="/portfolio">
            <button class="outlined freed btn before-footer-btn" >See more</button>
        </Link>
    </div>

</div>

<style type="text/scss">
div.root{
    margin-top: 60px;
}
.skills{
    margin-top: 40px;
}
.skill-item{
    height: 34px;
    margin: 0 22px;
}
.before-footer{
    text-align: center;
    margin-bottom: 160px;
    margin-top: -80px;
}
.before-footer-btn{
    font-size: 22px;
}
</style>