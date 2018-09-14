<template>
    <div :class="{white: isWhite}" class="main-div">
        <div class="messages">
            <div class="gradient"></div>
            <ul class="messages-list">
                    <div id='scrollable-index'>
                        <MessageBox 
                            v-for="message in messages"
                            v-bind:message="message" />
                    </div>
            </ul>
            <MessageForm />
        </div>
        <div class="sidebar">
            <div class="img-sidebar-container">
                <img class="img-sidebar" src="../assets/anim.gif">
            </div>
        </div>
    </div>
</template>


<script>
    import Vuex from 'vuex'
    import MessageBox from '@/components/MessageBox'
    import MessageForm from '@/components/MessageForm'

    export default {
        name: 'MessageBoxIndex',
        data() {
            return {

            }
        },
        components: { MessageBox, MessageForm },
        methods: {
            ...Vuex.mapActions({
                
            })
        },
        computed: {
            ...Vuex.mapGetters([
                'messages',
                'isWhite'
            ])
        },
        watch: {
            messages () {
                setTimeout(() => {
                    var index = this.$el.querySelector("#scrollable-index");
                    index.scrollTop = index.scrollHeight
                    console.log('message')
                },200)
            }
        }
    }
</script>

<style lang="css" scoped>
    .main-div{
        width: 100%;
        background: #3d3939;
        display: flex;
        justify-content: flex-start;
    }

    .gradient{
        position: absolute;
        /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#2e2e2e+0,2e2e2e+100&1+0,1+67,0+100 */
        background: -moz-linear-gradient(top, rgba(61,57,57,1) 0%, rgba(61,57,57,0.9) 50%, rgba(61,57,57,0) 100%);
        background: -webkit-linear-gradient(top, rgba(61,57,57,1) 0%,rgba(61,57,57,0.9) 50%,rgba(61,57,57,0) 100%);
        background: linear-gradient(to bottom, rgba(61,57,57,1) 0%,rgba(61,57,57,0.9) 50%,rgba(61,57,57,0) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2e2e2e', endColorstr='#002e2e2e',GradientType=0 );
        height: 28vh;
        width: 100%;
        left: 0;
        top: 0;
    }

    .white .gradient{
        background: -moz-linear-gradient(top, rgba(206,206,206,1) 0%, rgba(206,206,206,0.9) 50%, rgba(206,206,206,0) 100%);
        background: -webkit-linear-gradient(top, rgba(206,206,206,1) 0%,rgba(206,206,206,0.9) 50%,rgba(206,206,206,0) 100%);
        background: linear-gradient(to bottom, rgba(206,206,206,1) 0%,rgba(206,206,206,0.9) 50%,rgba(206,206,206,0) 100%);
    }

    .white.main-div{
        background: #d1d1d1;
    }

    .messages-list{
        height: 100%;
        overflow: scroll;
        display:flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 0px 15px;
    }

    .messages{
        width: 70%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .sidebar{
        width: 30%;
        position: relative;
        overflow: visible;
    }

    .img-sidebar{
        right: 0;
        top: 0;
        width: 100%;
        overflow: visible;
    }

    .img-sidebar-container{
        height: 100vh;
        display: flex;
        align-items:center;
    }

    .sidebar h3{
        position: absolute;
        font-weight: 900;
        letter-spacing: 10px;
        font-size: 101px;
        transform: rotate(180deg);
        /* transform-origin: top center; */
        right: 0;
        writing-mode: tb;
        opacity: 0.1;
        font-style: italic;
    }

    #scrollable-index{
        overflow:scroll;
        scroll-behavior: smooth;
    }
</style>