<template>
    <div id="game">
        <Bin side="left"
            @item-click="onItemClick"
            />
        <Bin side="right"
            @item-click="onItemClick"
            />
    </div>
</template>

<script>
    import Bin from './Bin.vue'

    export default{
        components: {
            Bin
        },
        methods: {
            onItemClick(item) {
                this.$store.dispatch('moveItem', item);
            }
        },
        computed: {
            itemsLeft() {
                return this.$store.getters.itemsLeft
            },
            itemsRight() {
                return this.$store.getters.itemsRight
            },
            isLeftFull() {
                return this.itemsLeft.length === this.maxItemsInBox
            },
            isRightFull() {
                return this.itemsRight.length === this.maxItemsInBox
            },
            isLeftFull() {
                return this.itemsLeft.length === this.maxItemsInBox
            },
            isLeftFull() {
                return this.itemsRight.length === this.maxItemsInBox
            },
            isComplete() {
                const itemsLeftCount = this.itemsLeft.length;
                const whiteItemsCount = this.itemsLeft.filter(item => item.color === 'white').length;
                const blackItemsCount = this.itemsLeft.filter(item => item.color === 'black').length;
                const isComplete = itemsLeftCount === (this.maxItemsInBox-1) && (
                    itemsLeftCount === whiteItemsCount ||
                    itemsLeftCount === blackItemsCount
                );

                return isComplete
            }
        }
    }
</script>
