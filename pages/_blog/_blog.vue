<template>
  <div>
      {{ list.length }}
    <div class="loading" v-if="loading">loading...</div>
      <div class="country-wrapper" v-else>
          <template v-for="(item, i) in list">
            <div class="card" :key="i"> 
                <img :src="item.flags.png" alt="">
            </div>
          </template>
      </div>
  </div>
</template>

<script>
export default {
    props:[
        'count'
    ],
    data(){
        return{
            list: [],
            loading: false,
            from: ''
        }
    },
    fetch(){
        return this.service()
    },
    methods:{
        service(){

            this.loading++
            return this.$axios
            .$get('https://restcountries.com/v3.1/all')
            .then((res)=>{
                this.list = res.slice(((Math.floor(res.length/this.$route.query.count))*(this.$route.params.blog-1)),Math.floor(((res.length/this.$route.query.count)*(this.$route.params.blog-1)) + (res.length/this.$route.query.count)))
                this.loading--
            })
            .catch((e)=>{
                this.loading--
                console.log(e);
            })
        }
    }
}
</script>

<style>
    .country-wrapper{
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
</style>