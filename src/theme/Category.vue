<template>
        <div class="columns">
          <div class="column is-one-third" v-for="(post, title) in posts" v-bind:key="post.id">
            <app-post :link="post.link">
                    <h3 slot="title">{{ post.title }}</h3>
                    <span slot="content">{{ post.content }}</span>
            </app-post>
          </div>
        </div>
</template>
<script>

import Post from './Post.vue'
import firebaseDB from '../service/firebaseDB.js'

export default {
  components: {
    'app-post': Post
  },
  data () {
    return {
      posts: []
    }
  },
  firebase: {
    posts: firebaseDB
  }
}
</script>

