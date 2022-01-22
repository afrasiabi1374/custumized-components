<template>
  <div>
    <h3>
      <nuxt-link :to="{name: 'blog-blog' , params:{blog:1}, query:{count: 15, route_param: 'blog-blog'} }" >blogs</nuxt-link>
    </h3>
  </div>
</template>
<script>
import Pagination from '~/components/Pagination'
export default {
  name: 'IndexPage',
  components: { Pagination }
}
</script>
<style scoped>

</style>