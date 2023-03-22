<template>
    
    <div :class="`bg-white rounded-xl h-32 max-h-full w-24 max-w-full mb-3 relative lg:h-56 lg:w-44 animate__animated animate__flipInY
        ${ ( props.isFiveHand===5 && props.cardPos===0 ) && ' lg:rotate-[10deg] lg:bottom-10 ' }
        ${ ( props.isFiveHand===5 && props.cardPos===1 ) && ' lg:rotate-[5deg] lg:bottom-2 '}
        ${ ( props.isFiveHand===5 && props.cardPos===2 ) && ' lg:rotate-[0deg] '}
        ${ ( props.isFiveHand===5 && props.cardPos===3 ) && ' lg:rotate-[-5deg] lg:bottom-2 '}
        ${ ( props.isFiveHand===5 && props.cardPos===4 ) && ' lg:rotate-[-10deg] lg:bottom-10 '}`"
    >
      <div class="inline-block">
        
        <h3 :class="`ml-3 mt-2 text-2xl font-bold lg:text-7xl lg:ml-7 ${ ( isRed ) && ' text-red-600 ' }`">
            {{props.card.number}}
        </h3>
        <h3 :class="`ml-3 text-2xl lg:text-6xl lg:ml-7 ${ ( isRed ) && ' text-red-600 ' }`">{{props.card.shape}}</h3>
        <div class="text-right">
            <h3 :class="`ml-9 text-6xl leading-3 lg:text-[7rem] lg:ml-20 ${ ( isRed ) && ' text-red-600 ' }`">
                {{props.card.shape}}
            </h3>
        </div>
      </div>
    </div>
</template>

<script setup>
import 'animate.css';

const isRed = props.card.shape==='♦' || props.card.shape==='♥';

const props = defineProps({
  card: Object,
  isFiveHand: Number,
  cardPos: Number
  
})
//console.log('five hand...',props.isFiveHand);


</script>

<style>
    
</style>
