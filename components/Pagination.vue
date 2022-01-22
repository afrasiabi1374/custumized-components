<template>
  <div class="paginate-wrapper">
    <nuxt-link    :class="['prev', $route.params.blog <= $route.query.count ? 'disable' : '']" :to="{name: route_param , params:{blog:($route.params.blog)-1}, query:{count: count, route_param: route_param} }" >prev</nuxt-link>
    <template v-for="(item, i) in calcPaginate">
     <nuxt-link :class="[ item === '...' ? 'disable' : '']" :to="{name: route_param , params:{blog:item}, query:{count: count, route_param: route_param} }" :key="i">{{ item }}</nuxt-link>
    </template>
    <nuxt-link  :class="['next', $route.params.blog >= $route.query.count ? 'disable' : '']" :to="{name: route_param , params:{blog:($route.params.blog)+1}, query:{count: count, route_param: route_param} }" >next</nuxt-link>
    {{ calcPaginate }}
  </div>
</template>

<script>
export default {
    name:'PaginateCMP',
    props:{
      count:{
          default: 3,
          type: Number
      },
    route_param: {
      default: null,
      type: String
    }
  },
  data(){
    return{
      disPrev: false,
      disNext: false
    }
  },
  computed:{
    calcPaginate(){
      let initPaginate = []
      for (let i = 0; i < this.count; i++) {
        
        initPaginate.push(i+1) 

      }
      return  initPaginate

    }
  }
  }

</script>

<style scoped>
    .paginate-wrapper {
        display: flex;
        gap: 1%;
        justify-content: center;
    }
    a{
      text-decoration: none;
      background-color: cadetblue;
      color: white;
      width: 30px;
      height: 30px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .router-link-active{
      background-color: brown;
    }
    /* .disable{
      pointer-events: none;
    } */
</style>
