<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./Pages/Home.svelte";
	import Contact from './Pages/Contact.svelte';
	import Portfolio from './Pages/Portfolio.svelte';
	import ProjectInfo from './Pages/ProjectInfo.svelte';

	import Footer from './Elements/Footer.svelte';

	export let url = "";
</script>

<div class="corp">
	<Router {url}>
		<nav class="nav">
			<Link to="contact">
				<i class="fas fa-comment"></i> Contact Me
			</Link>
			<Link to="/">
				<i class="fas fa-home"></i> Home
			</Link>
			<Link to="portfolio">
				<i class="fas fa-th-large"></i> Portfolio
			</Link>
		</nav>
		<div>
			<Route path="contact" component={Contact} />
			<Route path="portfolio" component={Portfolio} />
			<Route path="portfolio/:id" component={ProjectInfo} />
			<Route path="/">
				<Home />
			</Route>
		</div>

		<Footer />

	</Router>
</div>
