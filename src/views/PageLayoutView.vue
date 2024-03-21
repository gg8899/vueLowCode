<script setup lang="ts">
import AppLeftPanel from '@/components/AppLeftPanel/AppLeftPanel.vue'
import AppEditorRenderer from '@/components/AppEditorRenderer/AppEditorRenderer.vue'
import AppRightPanel from '@/components/AppRightPanel/AppRightPanel.vue'
</script>

<template>
    <div class="layout-wrapper">
        <AppLeftPanel />
        <AppEditorRenderer />
        <AppRightPanel />
    </div>
</template>

<style scoped>
.layout-wrapper {
    display: flex;
    width: 100%;
}
</style>
