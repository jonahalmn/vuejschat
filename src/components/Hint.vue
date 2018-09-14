<template>
        <div class='hint'>
            <h2>Bienvenue {{name}}</h2>
            <p>{{message}}</p>
        </div>
</template>

<script>
    export default {
        name: 'Hint',
        props: ['name', 'message']
    }
</script>

<style lang="css" scoped>
    .hint{
        position: absolute;
        bottom: 20px;
        right: 20px;
        min-height: 100px;
        min-width: 500px;
        background: #141414;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        padding: 20px;
    }

    .hint h2{
        font-size: 25px;
        font-weight: 700;
        margin-bottom: 20px;
    }

    .hint p{
        font-family: 'Roboto Mono'
    }
</style>