<template>
  <div id="home">
    <NavBar class="home-nav"><template v-slot:center><span>购物街</span></template>
    </NavBar>
    <Swiper>
      <SwiperItem v-for="itme in banner">
        <a :href="itme.link"><img :src="itme.image"></a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';
  import {getHomeMutidata} from 'network/home';
  import {Swiper, SwiperItem} from "components/common/swiper/index";
  export default {
    name: "Home",
    components: {
      Swiper,
      NavBar,
      SwiperItem

    },
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    created() {
      getHomeMutidata().then(res => {
        this.banner = res.data.data.banner.list
        this.recommend = res.data.data.recommend.list
        console.log(this.banner);
        console.log(this.recommend);

      })

    }
  }

</script>

<style>
  #home {
    height: 100vh;
    position: relative;
  }

  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
  }

  .tab-control {
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
</style>
