<template>
  <div>
    <nuxt-link to="/blog/page/1">Blog</nuxt-link>
  </div>
</template>

<script>
import Pagination from '~/components/Pagination.vue'
export default {
  components: { Pagination },
  data(){
    return{
      p:1
    }
  }
}
</script>

<style>

</style>