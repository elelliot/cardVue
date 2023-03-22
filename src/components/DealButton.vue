<template>
    <div class="h-auto max-h-full w-auto max-w-full flex justify-center relative mt-10">
        <button v-if="props.isWinner===''" @click="$emit('onGetHand')" class="rounded-xl transition duration-150 ease-in-out bg-yellow-300 px-14 py-5 my-3 text-4xl font-alfa"  >
            {{props.isStarted ? 'DEAL' : 'Start Game'}}
        </button>
        <div v-else></div>
    </div>
</template>
  
<script setup>


const emit = defineEmits(['onGetHand'])

const props = defineProps({
    isStarted: Boolean,
    isWinner: [String,Boolean]
})


</script>



<style>
    
</style>
  
  