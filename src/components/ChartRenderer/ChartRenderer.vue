<template>
    <component :is="render" class="chart-container" :block-info="blockInfo" />
</template>

<script setup lang="ts">
import type { ChartBlockInfo } from '@/types/block';
import CanvasChartRenderer from './CanvasChartRenderer/CanvasChartRenderer.vue'
import EchartsRenderer from './EchartsRenderer/EchartsRenderer.vue'
import SVGChartRenderer from './SVGChartRenderer/SVGChartRenderer.vue'
import { computed } from 'vue';
const props = defineProps<{
    blockInfo: ChartBlockInfo
}>();

const render = computed(() => {
    if (!props.blockInfo) return;

    switch (props.blockInfo.props.chartType) {
        case 'echarts': {
            return EchartsRenderer
        }
        case 'canvas': {
            return CanvasChartRenderer
        }
        case 'svg': {
            return SVGChartRenderer
        }
        default:
            return '';
    }

})

</script>
