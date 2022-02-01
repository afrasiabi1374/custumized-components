<template>
  <div class="container">
    <h1> page =>{{ typeof page   }}</h1>
    <Pagination page="/blog/page/" :length="compLength"  v-model="page"/>
    <h3 v-if="loading">loading...</h3>
    <div v-else class="flags" >
      <template v-for="(item, i) in compList">
        <div class="card" :key="'country' + i">
          <p>{{ item.name.common + (i+1)}}</p>
          <img :src="item.flags.png" width="100%" height="60%" draggable="false" alt="">
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import Pagination from '~/components/Pagination'
export default {
  components: { Pagination },
  data(){
    return{
      page: Number(this.$route.params.page)
    }
  },
    async asyncData({$axios}){
        const list = await $axios.$get('https://restcountries.com/v3.1/all')
        return {
          list: list,

        }
    },
    computed:{
      compLength(){
        let len = this.list.length
        let twelveTwelve = Math.ceil(len/12)
        return twelveTwelve
      },
      compList(){
        return this.list.slice((this.$route.params.page-1)*12,(this.$route.params.page*12))
      }
    }
}
</script>

<style>
  .flags{
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .card{
    width: 20%;
    height: 200px;
    border: 1px solid purple;
    background-color: rgba(102, 51, 153, 0.329);
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

  }
  .card > p {
    text-align: center;
    vertical-align: center;
  } 
  .card > img {
    border-radius: 10px;
  }
  .container{
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>