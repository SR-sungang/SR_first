<template>
<uni-shadow-root class="iview-checkbox-group-index"><i-cell-group class="i-class">
    <slot></slot>
</i-cell-group></uni-shadow-root>
</template>

<script>
import ICellGroup from '../cell-group/index.vue'
global['__wxVueOptions'] = {components:{'i-cell-group': ICellGroup}}

global['__wxRoute'] = 'iview/checkbox-group/index'
Component({
    externalClasses: ['i-class'],
    relations: {
        '../checkbox/index': {
            type: 'child',
            linked() {
                this.changeCurrent();
            },
            linkChanged() {
                this.changeCurrent();
            },
            unlinked() {
                this.changeCurrent();
            }
        }
    },
    properties: {
        current: {
            type: Array,
            value: [],
            observer: 'changeCurrent'
        },
    },
    methods: {
        changeCurrent(val = this.data.current) {
            let items = this.getRelationNodes('../checkbox/index');
            const len = items.length;
            if (len > 0) {
                items.forEach(item => {
                    item.changeCurrent(val.indexOf(item.data.value) !== -1);
                });
            }
        },
        emitEvent(current) {
            this.triggerEvent('change', current);
        }
    }
});
export default global['__wxComponents']['iview/checkbox-group/index']
</script>
<style platform="mp-weixin">

</style>