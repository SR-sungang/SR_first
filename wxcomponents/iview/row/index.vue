<template>
<uni-shadow-root class="iview-row-index"><view class="i-class i-row"><slot></slot></view></uni-shadow-root>
</template>

<script>

global['__wxRoute'] = 'iview/row/index'
Component({
    externalClasses: ['i-class'],

    relations: {
        '../col/index': {
            type: 'child'
        }
    }
});
export default global['__wxComponents']['iview/row/index']
</script>
<style platform="mp-weixin">
.i-row:after{content:"";display:table;clear:both}
</style>