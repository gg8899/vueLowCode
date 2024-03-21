<template>
    <div class="container">
        <div class="app-info-wrapper">
            <div class="app-logo">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/11.3.0/2/svg/1f469-200d-1f692.svg" />
            </div>
            <h1 class="app-name">lowCode</h1>
        </div>
        <div class="app-navigator-link-wrapper">
            <RouterLink class="app-navigator-link-item" v-for="item in linkItem" :key="item.value"
                :to="`/app/${item.value}`">
                <div :style="{
                lineHeight: 0.7,
                color: activeLink.includes(item.value) ? item.color : 'var(--color-gray-700)'
            }">
                    <Icon :type="item.value" :active="activeLink.includes(item.value)" />
                </div>
                <span class="item-title">
                    {{ item.label }}
                </span>
                <div class="item-border"
                    :style="activeLink.includes(item.value) ? { background: item.borderColor } : {}"></div>
            </RouterLink>
        </div>
        <div class="app-setting-wrapper">
            <div class="opr-btns">
                <div :class="['btns', 'debug: envStore.debug']" @click="envStore.toggle">
                    <Bug />开发模式（{{ envStore.debug ? '开' : '关' }}）
                </div>
                <div :class="['btns', 'publish-btn']">
                    <Share />发布
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { Bug, Data, LayoutThree, Lightning, Share } from '@icon-park/vue-next';
import { computed, defineComponent, h } from 'vue';
import { useEnvStore } from '@/stores/debug';

const route = useRoute();
const activeLink = computed(() => route.path);
const envStore = useEnvStore()

const linkItem = [
    {
        value: 'dataSource',
        label: '数据源',
        bg: `radial-gradient(50% 50% at 50% 100%, rgba(0, 196, 83, 0.2) 0%, rgba(0, 196, 83, 0) 100%)`,
        color: 'rgb(0, 196, 83)',
        borderColor: 'radial-gradient(50% 50%, rgb(0, 196, 83) 0%, rgba(0, 196, 83, 0) 100%)'
    },
    {
        value: 'layout',
        label: '布局',
        bg: `radial-gradient(50% 50% at 50% 100%, rgba(24, 190, 212, 0.2) 0%, rgba(24, 190, 212, 0) 100%)`,
        color: 'rgb(24, 190, 212)',
        borderColor: 'radial-gradient(50% 50%, rgb(24, 190, 212) 0%, rgba(24, 190, 212, 0) 100%)'
    },
    {
        value: 'actions',
        label: '动作',
        bg: `radial-gradient(50% 50% at 50% 100%, rgba(241, 60, 11, 0.2) 0%, rgba(241, 60, 11, 0) 100%)`,
        color: 'rgb(241, 60, 11)',
        borderColor: 'radial-gradient(50% 50%, rgb(241, 60, 11) 0%, rgba(241, 60, 11, 0) 100%)'
    }
];

defineProps<{ msg: string }>();
const Icon = defineComponent({
    setup(props) {
        switch (props.type) {
            case 'dataSource':
                return () => h(Data, { size: 16 });
            case 'layout':
                return () => h(LayoutThree, { size: 16 })
            case 'actions':
                return () => h(Lightning, { size: 16 })

            default:
                return () => h('div')
        }
    },
    props: {
        type: {
            type: String,
            required: true
        }
    }
})

</script>

<style scoped lang="less">
.container {
    width: 100%;
    height: 48px;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;

    .app-info-wrapper {
        width: 200px;
        display: flex;
        align-items: center;

        .app-logo {
            width: 32px;
            height: 32px;
            margin: 10px 8px 10px 18px;
            border-radius: 8px;
            background-color: var(--color-primary);
        }
    }

    .app-setting-wrapper {
        width: 260px;
        display: flex;
        align-items: center;

        .opr-btns {
            width: 100%;
            display: flex;
            justify-content: space-around;

            .btns {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                padding: 6px 8px;
                border-radius: 5px;
                font-size: 14px;
                cursor: pointer;
                vertical-align: middle;
                user-select: none;
                border: 1px solid #ccc;

                &.debug {
                    color: var(--color-primary);
                    box-shadow: var(--color-primary) 0 0 0 1px;
                }

                &.publish-btn {
                    background-color: rgba(0, 0, 0, 0.8);
                    color: white;
                }
            }
        }
    }

    .app-navigator-link-wrapper {
        flex: 1;
        display: flex;
        justify-content: center;

        .app-navigator-link-item {
            position: relative;
            display: flex;
            align-items: center;
            padding: 0 8px;
            margin: 0 24px;
            align-self: stretch;
            background-color: var(--color-white);
            color: var(--color-text);
            font-size: var(--font-size-normal);
            font-weight: var(--font-weight-bold);

            .item-title {
                margin-left: 8px;
                color: var(--color-black);
            }
        }

    }
}
</style>