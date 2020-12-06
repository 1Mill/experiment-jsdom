<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/about">About</router-link> |
		<router-link to="/editor">Editor</router-link>
	</div>
	<router-view/>
</template>

<style>
	#app {
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		color: #2c3e50;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		text-align: center;
	}
	#nav {
		padding: 30px;
	}
	#nav a {
		color: #2c3e50;
		font-weight: bold;
	}
	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
