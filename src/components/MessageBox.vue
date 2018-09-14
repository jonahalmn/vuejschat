<template>
    <transition name="fade">
        <li :class="currentUser === message.sender ? 'from-me' : 'other'" class="message-element"><div class="inside-message-element"><p :style="listStyle" class="sender">{{ message.sender }}</p><p :class="{white: isWhite}" class="message-content">{{ message.message }}</p></div></li>
    </transition>
</template>

<script>
    import Vuex from 'vuex'
    
    export default {
        name: 'MessageBox',
        props: ['message'],
        data() {
            return{
            }
        },
        computed: {
            ...Vuex.mapGetters(['currentUser', 'users', 'isWhite']),

            color : function() {
                const curUser = this.users.find((user) => {
                        return user.username.toUpperCase() == this.message.sender.toUpperCase()
                })
                return curUser === undefined ? '#FFFFFF' : curUser.color
                //return this.message
            },
            listStyle: function(){
                return { color: this.color }
            }
        },
        watch:{
            messages() {
                
            }
        }
    }

</script>

<style lang="css" scoped>
    .message-element{
        display: flex;
        margin: 30px 0px;
    }

    .inside-message-element{
        display: flex;
        flex-direction: column;
    }

    .message-content{
        background: #1f1f1f;
        padding: 10px 15px;
        border-radius: 5px;
        font-family: 'Roboto Mono';
        font-size: 13px;
        word-break: break-all;
    }

    .white.message-content{
        background: #dfdfdf;
        font-family: serif;
        color: #000;
    }


    .from-me{
        justify-content: flex-end;
        text-align: right;
    }

    .other{
        justify-content: flex-start;
        text-align: left;
    }

    .sender{
        font-weight: 700;
        margin-bottom: 5px;
        text-transform: uppercase;
        font-size: 13px;
    }

    .fade-enter{
        opacity: 0;
    }

    .fade-enter-to{
        opacity: 1
    }

    .fade-enter-active{
        transition: all .8s;
    }
</style>