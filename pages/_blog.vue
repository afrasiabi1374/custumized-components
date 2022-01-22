<template>
  <div>
      type of countries 
      <nuxt-child></nuxt-child>
      <Pagination :count="10" route_param="blog-blog" />
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