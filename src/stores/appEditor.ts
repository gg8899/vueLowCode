import { defineStore } from 'pinia';
import { ref } from 'vue';

import { blocks as blocksData } from '@/mocks/blocks'
import type { BlockInfo } from '@/types/block';

export const useAppEditorStore = defineStore('appEditor', () => {
    const currentBlockId = ref<string | null>(null);
    const blocks = ref(blocksData);

    function selectBlock(id: string) {
        currentBlockId.value = id;
    }

    function updateBlocks(newBlock: typeof blocksData) {
        blocks.value = newBlock;
    }

    function updateBlock(id: string, newBlock: BlockInfo) {
        for (const block of blocks.value) {
            if (block.id === id) {
                Object.assign(block, newBlock)
                return;
            }
        }
    }
    return {
        currentBlockId, blocks, selectBlock, updateBlock, updateBlocks
    }
})