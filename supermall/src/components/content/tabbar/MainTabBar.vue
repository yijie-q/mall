<template>
    <TabBar>
        <TabBarItem path="/home">
            <template v-slot:item-icon>
                <img src="~assets/img/tabbar/home.svg">
            </template>
            <template v-slot:item-active-icon>
                <img src="~assets/img/tabbar/home_active.svg">
            </template>
            <template v-slot:item-text>
                <span>首页</span>
            </template>
        </TabBarItem>
        <TabBarItem path="/category">
            <template v-slot:item-icon>
                <img src="~assets/img/tabbar/category.svg">
            </template>
            <template v-slot:item-active-icon>
                <img src="~assets/img/tabbar/category_active.svg">
            </template>
            <template v-slot:item-text>
                <span>分类</span>
            </template>
        </TabBarItem>
        <TabBarItem path="/cart">
            <template v-slot:item-icon>
                <img src="~assets/img/tabbar/shopcart.svg">
            </template>
            <template v-slot:item-active-icon>
                <img src="~assets/img/tabbar/shopcart_active.svg">
            </template>
            <template v-slot:item-text>
                <span>购物车</span>
            </template>
        </TabBarItem>
        <TabBarItem path="/profile">
            <template v-slot:item-icon>
                <img src="~assets/img/tabbar/profile.svg">
            </template>
            <template v-slot:item-active-icon>
                <img src="~assets/img/tabbar/profile_active.svg">
            </template>
            <template v-slot:item-text>
                <span>我的</span>
            </template>
        </TabBarItem>
    </TabBar>
</template>

<script>
    import TabBar from "components/common/tabbar/TabBar";
    import TabBarItem from "components/common/tabbar/TabBarItem";

    export default {
        name: "MainTabBar",
        components: {
            TabBar,
            TabBarItem
        }
    }
</script>

<style>

</style>
