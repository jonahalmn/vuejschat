<template>
    <transition name="connect">
        <li :class="{ inactive : !user.isActive }" :style="listStyle">{{ user.username }}</li>
    </transition>
</template>


<script>
    export default {
        name: 'UserStatus',
        data() {
            return {
                
            }
        },
        computed: {
            listStyle: function(){
                return { borderLeft: '3px solid' + this.user.color,
                color: this.user.color }
            }
        },
        props: ['user'],
    }
</script>

<style lang="css" scoped>
    li {
        padding: 15px;
        text-align: left;
        text-transform: uppercase;
        font-weight: 700;
        transition: opacity .3s;
    }

    li.inactive{
        border-color: #EEEEEE;
        opacity: 0.3;
    }

    .connect-enter{
        transform: translateX(-100px);
        opacity: 0;
    }

    .connect-enter-to{
        opacity: 1;
        transform: translateX(0px);
    }

    .connect-enter-active{
        transition: all .3s;
    }
</style>