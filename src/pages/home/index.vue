<template>
  <div class="home-box">
    主页123213
    <h1>
      <router-link :to="{name:'cc', params: {id:1}}">
        tiaozhasdasd
      </router-link>
    </h1>
  </div>
</template>

<script>
import CarModelList from '../login/index'
  export default {
    name: 'Home',
    created() {
      console.log('home');
      const aaa ='123123123'
      let modal = this.$openModal({
    customClass: 'car-model-list-modal',
    maskClosable: true,
    position: 'bottom',
    showCloseBtn:false,
    content: <CarModelList/>
});
modal.$on('maskClick', () => {
    // DC.click('TM13');
    console.log('789')
});
    },
  };
</script>

<style scoped lang="less">
  .home-box {}
</style>
