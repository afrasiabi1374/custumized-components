<template>
  <div>
      type of countries 
      <Pagination :count="15" :totalvisible="7" route_param="blog-blog" />
      <nuxt-child></nuxt-child>
  </div>
</template>

<script>
import Pagination from '~/components/Pagination.vue'
export default {
    components: {
        Pagination
    }
}
</script>

<style>

</style>