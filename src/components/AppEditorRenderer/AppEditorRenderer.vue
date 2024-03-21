<script setup lang="ts">
import { ref } from 'vue';
import LaptopPreviewer from './LaptopPreviewer.vue';
import MobilePreviewer from './MobilePreviewer.vue';

import { PreviewType } from './type';

const previewMode = ref<PreviewType>('laptop');

const handleModeChange = (mode: PreviewType) => {
    previewMode.value = mode;
}

</script>

<template>
    <!-- PC 端模式和 手机端模式 -->
    <div class="layout-content">
        <KeepAlive>
            <component :is="previewMode === 'laptop' ? LaptopPreviewer : MobilePreviewer" :preview-mode="previewMode"
                @preview-mode-change="handleModeChange" />
        </KeepAlive>
    </div>
</template>

<style scoped>
.layout-content {
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 2;
    flex: 1;
    background-color: var(--color-gray-100);
}
</style>
