<template>
<uni-shadow-root class="iview-action-sheet-index"><view :class="'i-as-mask i-class-mask '+(visible ? 'i-as-mask-show' : '')" @click="handleClickMask"></view>
<view :class="'i-class i-as '+(visible ? 'i-as-show' : '')">
    <view class="i-as-header i-class-header"><slot name="header"></slot></view>
    <view class="i-as-actions">
        <view v-for="(item,index) in (actions)" :key="item.name" class="i-as-action-item">
            <i-button @click="handleClickItem" :data-index="index" :open-type="item.openType" type="ghost" size="large" long>
                <view class="i-as-btn-loading" v-if="item.loading"></view>
                <i-icon v-if="item.icon" :type="item.icon" i-class="i-as-btn-icon"></i-icon>
                <view class="i-as-btn-text" :style="item.color ? 'color: ' + item.color : ''">{{ item.name }}</view>
            </i-button>
        </view>
    </view>
    <view class="i-as-cancel" v-if="showCancel">
        <i-button i-class="i-as-cancel-btn" type="ghost" size="large" long="true" @click="handleClickCancel">{{ cancelText }}</i-button>
    </view>
</view></uni-shadow-root>
</template>

<script>
import IButton from '../button/index.vue'
import IIcon from '../icon/index.vue'
global['__wxVueOptions'] = {components:{'i-button': IButton,'i-icon': IIcon}}

global['__wxRoute'] = 'iview/action-sheet/index'
Component({
    externalClasses: ['i-class', 'i-class-mask', 'i-class-header'],

    options: {
        multipleSlots: true
    },

    properties: {
        visible: {
            type: Boolean,
            value: false
        },
        maskClosable: {
            type: Boolean,
            value: true
        },
        showCancel: {
            type: Boolean,
            value: false
        },
        cancelText: {
            type: String,
            value: '取消'
        },
        actions: {
            type: Array,
            value: []
        }
    },

    methods: {
        handleClickMask () {
            if (!this.data.maskClosable) return;
            this.handleClickCancel();
        },

        handleClickItem ({ currentTarget = {} }) {
            const dataset = currentTarget.dataset || {};
            const { index } = dataset;
            this.triggerEvent('click', { index });
        },

        handleClickCancel () {
            this.triggerEvent('cancel');
        }
    }
});
export default global['__wxComponents']['iview/action-sheet/index']
</script>
<style platform="mp-weixin">
.i-as{position:fixed;width:100%;box-sizing:border-box;left:0;right:0;bottom:0;background:#f7f7f7;transform:translate3d(0,100%,0);transform-origin:center;transition:all .2s ease-in-out;z-index:900;visibility:hidden}.i-as-show{transform:translate3d(0,0,0);visibility:visible}.i-as-mask{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.7);z-index:900;transition:all .2s ease-in-out;opacity:0;visibility:hidden}.i-as-mask-show{opacity:1;visibility:visible}.i-as-action-item{position:relative}.i-as-action-item::after{content:'';position:absolute;top:0;left:0;width:200%;height:200%;transform:scale(.5);transform-origin:0 0;pointer-events:none;box-sizing:border-box;border:0 solid #e9eaec;border-bottom-width:1px}.i-as-header{background:#fff;text-align:center;position:relative;font-size:12px;color:#80848f}.i-as-header::after{content:'';position:absolute;top:0;left:0;width:200%;height:200%;transform:scale(.5);transform-origin:0 0;pointer-events:none;box-sizing:border-box;border:0 solid #e9eaec;border-bottom-width:1px}.i-as-cancel{margin-top:6px}.i-as-btn-loading{display:inline-block;vertical-align:middle;margin-right:10px;width:12px;height:12px;background:0 0;border-radius:50%;border:2px solid #e5e5e5;border-color:#666 #e5e5e5 #e5e5e5 #e5e5e5;animation:btn-spin .6s linear;animation-iteration-count:infinite}.i-as-btn-text{display:inline-block;vertical-align:middle}.i-as-btn-icon{font-size:14px!important;margin-right:4px}@keyframes btn-spin{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}
</style>