<template>
	<div class="container">
		<!-- {{posts}} -->
		{{ error }}
		<div>
			<ul>
				<li v-for="post in posts" v-bind:key="post.id">
					<img :src="post.imageURL" alt="" />
					{{ post.name }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import PostService from "../PostService";
export default {
	name: "PostComponent",
	data() {
		return {
			posts: [],
			error: "",
			text: "",
		};
	},
	async created() {
		try {
			this.posts = await PostService.getPost();
		} catch (err) {
			this.error = err.message;
		}
	},

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
