<template>
    <div :class="`h-auto max-h-full w-full max-w-full flex justify-center relative mt-10 lg:flex lg:justify-end 
      ${props.isWinner !== '' && 'lg:justify-center' } `">
        <button v-if="props.isStarted"
        :class="`lg:mr-10 rounded-xl border-4 text-yellow-300 border-yellow-300 px-8 py-2 my-3 text-2xl font-alfa animate__animated animate__zoomIn
            ${ props.isWinner!=='' && ' lg:mr-0 '}`"
        @click="$emit('onResetDeck')">
            {{props.isWinner ==="" ? 'Reset' : 'Play Again'}}
        </button>
        <div v-else></div>
    </div>
</template>
  
<script setup>
import 'animate.css';

const emit = defineEmits(['onResetDeck'])

const props = defineProps({
    deck: Array,
    isStarted: Boolean,
    isWinner: [String,Boolean]
})


</script>



<style>
    
</style>
  
  