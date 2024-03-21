<script setup lang="ts">
import FlowEditor from '@/components/FlowEditor/FlowEditor.vue'
</script>

<template>
    <div class="action-container">
        <FlowEditor />
    </div>
</template>

<style scoped>
.action-container {
    /* 无语 要有空格。。。。 */
    height: calc(100vh - 48px);
}
</style>
