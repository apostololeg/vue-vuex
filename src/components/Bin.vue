<template>
    <div id="bin">
        <ul class="list-group">
            <li class="item"
                v-for="item in items"
                v-if="item.side === side"
                :class="{
                    [item.side]: item.side,
                    [item.color]: item.color
                }"
                @click="onItemClick(item)"
                ></li>
        </ul>
    </div>
</template>

<script>
export default{
    props: [
        'side'
    ],
    methods: {
        onItemClick(item){
            this.$emit('item-click', item);
        }
    },
    computed: {
        items() {
            return this.$store.getters.items
        }
    }
}
</script>

<style>
    #bin {
        display: inline-block;
        height: 132px;
        width: 132px;
        padding: 10px;
        margin: 10px;
        transition: opacity .1s ease-out;
        border: 2px dashed;
        transform: rotateX(180deg);
    }

    #bin.full {
        border-style: solid;
    }

    #bin.locked {
        opacity: .6;
        pointer-events: none;
    }

    #bin.completed {
        border-style: solid;
        border-color: #34d274;
        background-color: #ccffe1;
    }

    .list-group {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .item {
        display: inline-block;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        border: 2px solid #000;
        margin: 3px 5px;
        cursor: pointer;
    }

    .item.black {
        background-color: #000;
    }

    .item:hover {
        box-shadow: 0 0 0 2px #36d1dd;
    }
</style>
