<template>
  <Layout>
    <h1>{{ $page.blogPost.title }}</h1>
    <p class="intro">{{ $page.blogPost.excerpt }}</p>
  	{{ $page.blogPost.slug }}
  	<ul>
  		<li v-for="category in $page.blogPost.categories">{{ category }}</li>
  	</ul>    
    <VueRemarkContent />
    <div class="content" v-html="$page.blogPost.content" />
  </Layout>	
</template>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.blogPost.title
    };
  }
};
</script>

<page-query>
query BlogPost ($id: ID!) {
  blogPost(id: $id) {
    title
    slug
    categories
    content
  }
}
</page-query>