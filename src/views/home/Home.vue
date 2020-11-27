<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <home-swiper :banner="banner"/>
    <recommend-view :recommend="recommend"/>
    <feature-view/>
  </div>
</template>

<script>
  import NavBar from "components/common/narbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView  from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";
  import {getHomeMultidata} from "network/home";

  export default {
    name: "Home",
    components: {
      NavBar,
      HomeSwiper,
      RecommendView,
      FeatureView
    },
    data() {
      return {
        banner: [],
        recommend: []
      }
    },
    created()
    {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    }
  }
</script>


<style scoped>
  .home-nav
  {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  #home
  {
    padding-top: 44px;
  }
</style>
