<script setup>
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'
import { ref, watchEffect } from "vue"

import useShuffle from '@/composables/useShuffle'
import { nanoid } from "nanoid";
import { deck as rawDeck } from "./helpers/deck";
import CardsCounter from "./components/CardsCounter.vue";
import Cards from "./components/Cards.vue";
import DealButton from "./components/DealButton.vue";
import ResetButton from "./components/ResetButton.vue";
//Confetti (Need to find a Vue Confetti library)








//Deck Inicial
  const { deck , setShuffledDeck } = useShuffle(rawDeck);//Composable
  console.log(deck.value);
//Hand
const hand = ref([]);

//Game Started
const isStarted = ref(false)
  
//Is Winner?
const isWinner = ref("")

const handHandler = () => {
  hand.value = deck.value.slice(-5).map( ( deck ) => ({...deck,id:nanoid()}) )

  setShuffledDeck( deck.value.slice(0, deck.value.length - 5))
  isStarted.value = true
}

const resetDeckHandler = () => {
  isStarted.value = false
  isWinner.value = ''
  setShuffledDeck(rawDeck)
}


const loseHandler = () => {
  isWinner.value = false
}

const winHandler = () => {
  isWinner.value = true
}

watchEffect(() => {
    setShuffledDeck(rawDeck);
})

</script>

<template>
  <div className="bg-gradient-to-b from-green-700 to-green-900 h-[896px] w-[414px] mx-auto lg:w-full lg:min-h-screen">
    <CardsCounter :deck="deck" @onLosing="loseHandler" @onWinning= "winHandler"  />
    <Cards :hand="hand" :isStarted="isStarted" :isWinner="isWinner" />
    <DealButton @onGetHand="handHandler" :isStarted="isStarted" :isWinner="isWinner" />
    <ResetButton :deck="rawDeck" @onResetDeck="resetDeckHandler" :isStarted="isStarted" :isWinner="isWinner" /> 
      
    <!-- <Confetti active={isWinner} config={confettiParams} /> -->
    </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
