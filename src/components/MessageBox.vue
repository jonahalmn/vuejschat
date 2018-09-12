<template>
    <li><p>{{ message.sender }}</p><p>{{ message.message }}</p></li>
</template>

<script>
    
    export default {
        name: 'MessageBox',
        props: ['message'],
        data() {
            return{
                
            }
        }
    }

</script>