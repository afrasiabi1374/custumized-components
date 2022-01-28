<template>
  <div>
    <nuxt-child></nuxt-child>
    <Pagination page="/blog/page/" :length="length"  v-model="page"/>
    
  </div>
</template>
<script>
import Pagination from '~/components/Pagination'
export default {
  name: 'IndexPage',
  components: { Pagination },
  data(){
    return {
      length: 113,
      page:1
    }
  }
}
</script>

<style>

</style>