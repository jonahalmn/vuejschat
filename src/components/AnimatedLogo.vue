<template>
    <img :src="url" />
</template>


<script>
    export default {
        name: 'AnimatedLogo',
        data() {
            return{
                curframe: 0
            }
        },
        props: ['baseUrl', 'frames', 'format'],
        computed: {
            url(){
                let baseString = "00000"
                requestAnimationFrame(this.url)
                if(this.frames > 10){
                    baseString = "0000"
                }

                if(this.frames > 100){
                    baseString = "000"
                }
                this.url = baseString + this.animate + ".png"
                this.curframe++

                if(this.frames > 179){
                    this.frames = 0
                }
            }
        },
        mounted() {
            this.animate()
        },
    }
</script>