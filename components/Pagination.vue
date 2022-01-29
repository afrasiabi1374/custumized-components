<template>
  <div class="pagination-wrapper">
    <nuxt-link  class="pagination-link-prev"  :class="[value <= 1?'disable':'']"  :to="page+(value - 1)" @click.native="prev">Prev</nuxt-link>
    <template v-for="(item, i) in compPaginate">
      <nuxt-link @click.native="$emit('input', item)" v-if="item !== '...'" class="pagination-link" :to="page+(item)"  :key="'btn'+item">{{ item }}</nuxt-link>
      <span v-if="item === '...'" :key="'dot'+i" class="pagination-link">...</span>
    </template>
    <nuxt-link class="pagination-link-next" :class="[value >= length ?'disable':'']" :to="page+(value + 1)"  @click.native="$emit('input', value + 1)">Next</nuxt-link>
  </div>
</template>
<script>
export default {
  props:{
    value:{
      type:Number,
      default:1,
    },
    length:{
      type:Number,
    },
    page:{
      type:String,
    },

  },
  data(){
    return {
      totalVisible: 10,
      disable: false
    }
  },
  computed:{
    compPaginate(){
      let pagination = []
      for (let i = 1; i <= this.totalVisible; i++) {
        pagination.push(i)
      }
      if (this.length > this.totalVisible) {
        pagination[pagination.length-1] = this.length
        pagination[pagination.length-2] = '...'
      }
      if ((this.value >= 5) && (this.value < this.length-4 )) {
        pagination[1] = '...'
        pagination[2] = this.value - 2
        pagination[3] = this.value - 1
        pagination[4] = this.value
        pagination[5] = this.value + 1
        pagination[6] = this.value + 2
        pagination[7] = this.value + 3
      }
      if ((this.value >= this.length-4 )) {
        pagination[0] = 1
        pagination[1] = '...'
        pagination[pagination.length-2] = this.length-1
        for (let i = 2; i < 8; i++) {
          pagination[i] = (this.length-9)+i
        }
      }
      return pagination
    }
  },
  methods:{
    prev(){
      if (this.value >= 1) {
        this.$emit('input', this.value - 1)
      }
    },
    next(){
      if (this.value <= length) {
        this.$emit('input', this.value + 1)
      }
    }
  }
}
</script>

<style>
  .pagination-wrapper{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
  .pagination-link,.pagination-link-prev,.pagination-link-next{
    text-decoration: none;
    background-color: transparent;
    color: black;
    padding: 10px;
    border-radius: 5px;
  }
  .pagination-link:hover{
    background-color: rgb(173, 173, 173);
    color: black;
    transition: all .2s;
  }
  .nuxt-link-exact-active{
    background-color: rgb(204, 204, 204);
    color: black;
    transition: all .7s;
  }
  .nuxt-link{
    transition: all .7s;
  }
  .disable{
    pointer-events: none;
  }
</style>
