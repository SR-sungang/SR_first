<template>
<uni-shadow-root class="iview-grid-label-index"><view class="i-class i-grid-label"><slot></slot></view></uni-shadow-root>
</template>

<script>

global['__wxRoute'] = 'iview/grid-label/index'
Component({
    externalClasses: ['i-class'],

    relations: {
        '../grid-item/index': {
            type: 'parent'
        }
    },

});
export default global['__wxComponents']['iview/grid-label/index']
</script>
<style platform="mp-weixin">
.i-grid-label{margin-top:5px;display:block;text-align:center;color:#1c2438;font-size:14px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}
</style>