<template>
  <div class="wrapper">

      <div :class="['content', toggle ? 'move-right' : 'no-move']">
          <div class="btns">
              <button @click="toggler" :class="['toggler', toggle ? 'rotation' : 'no-rotation']"></button>
          </div>
          <div class="menu">
              <h3>mobile-menu!</h3>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    data(){
        return {
            toggle: false
        }
    },
    methods: {
        toggler() {
            this.toggle = !this.toggle
        }
    }
}
</script>

<style lang="scss">
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    .content {
        position: relative;
        width: 100;
        background-color: cornflowerblue;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        .btns{
            background-color: cyan;
            width: 30%;
            height: 200px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            border: 1px solid palevioletred;
            transition: all 1s;
            &:hover{
                background-color: palevioletred;
                transition: all 1s;
            }
            .toggler{
                width: 100px;
                height: 100px;
                background: {
                    image:url('~/assets/img/menu.svg');
                    color: transparent;
                }
                border: none;
                cursor: pointer;
                position: absolute
            }
            .rotation {
                transform: rotate(90deg);
                transition: all 1s;
                
            }
            .no-rotation {
                transform: rotate(0deg);
                transition: all 1s;
            }

        }
    }
    .move-right {
        transform: translateX(300px);
        transition: all 1s;
    }
    .no-move {
        transform: translateX(0px);
        transition: all 1s;
    }
    .wrapper{
        overflow: hidden;
    }
    .menu {
        width: 300px;
        min-height: 100vh;
        background-color: pink;
        position: absolute;
        left: -300px;
    }
</style>