<template>
  <div class="home-box">
    主页123213
    <cube-button   :primary="true">show dialog</cube-button>
    <h1>
      <router-link :to="{name:'cc', params: {id:1}}">
        tiaozhasdasd
      </router-link>
    </h1>
  </div>
</template>

<script>
// import {
//   /* eslint-disable no-unused-vars */
//   Style,
//   Button,Loading,Toast
// } from 'cube-ui'
// console.log(Button)
import CarModelList from '../login/index'
  export default {
    name: 'Home',
    // components:{
    //   Button
    // },
    created() {
      //   const toast = this.$createToast({
      //   time: 1000,
      //   txt: 'Toast time 1s'
      // })
      // toast.show()
      // console.log()
      // console.log('home');
//       const aaa ='123123123'
//       let modal = this.$openModal({
//     customClass: 'car-model-list-modal',
//     maskClosable: true,
//     position: 'bottom',
//     showCloseBtn:false,
//     content: <CarModelList/>
// });
// modal.$on('maskClick', () => {
//     // DC.click('TM13');
//     console.log('789')
// });
    },
  };
</script>

<style scoped lang="less">
  .home-box {}
</style>
