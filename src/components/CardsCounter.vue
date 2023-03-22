<template>
  <div className="bg-black h-[120px] w-[200px] max-w-full mx-auto relative top-[5%] border-2 border-yellow-300">
      <div className="flex justify-center ">
        <div className="text-center">
          <h2 className="text-white font-neuton text-4xl font-extrabold ">{{ props.deck.length }}</h2>
          <h2 className="text-white font-neuton text-3xl font-semibold">Cards Left</h2>
        </div>
        <div className="text-center">
          <h2 className="text-white font-neuton text-4xl font-extrabold ">{{ aces.length }}</h2>
          <h2 className="text-white font-neuton text-3xl font-semibold">Aces Left</h2>
        </div>
      </div>
    </div>
</template>

<script setup>
import {computed ,watchEffect} from 'vue'

const emit = defineEmits(['onLosing','onWinning'])

const props = defineProps({
  deck: Array
})


const aces =computed(()=> props.deck.filter(as => as.number === 'A' ));


watchEffect(() => {
  
    //[Array] of aces remaining 
    if(aces.value.length === 0 && props.deck.length !== 0){
      emit('onLosing', false);
      console.log('LOSER');
    } else if (aces.value.length === 0 && props.deck.length === 0){
      emit('onWinning',true);
      console.log('WINNER');
    }
})
</script>

<style>
    
</style>