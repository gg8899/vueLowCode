<script setup lang="ts">
import DataSourceLeftPanel from '@/components/DataSourceLeftPanel.vue'
</script>

<template>
	<div class="ds-wrapper">
		<DataSourceLeftPanel />
		<RouterView />
	</div>
</template>

<style scoped>
.ds-wrapper {
	display: flex;
	height: calc(100vh - 48px);
	overflow: hidden;
}
</style>
