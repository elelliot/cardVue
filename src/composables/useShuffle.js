import { ref } from "vue"


//Composable es basicamente un Hook, use y tienes tus reactivos, funciones y lo retornas
const useShuffle = ( rawDeck ) => {

    const deck = ref( rawDeck )

    const setShuffledDeck = (shuffDeck) =>{
        //Shuffle Deck
        let cardsLeft = shuffDeck.length,
        originalIndex,
        randomIndex,
        random;
        for (let i = 1; i <= shuffDeck.length; i++) {
            //Random Index
            random = Math.random() * cardsLeft--;
            randomIndex = Math.floor(random);

            //Building Random Cards
            originalIndex = shuffDeck[cardsLeft]; //Hold last index value in t
            shuffDeck[cardsLeft] = shuffDeck[randomIndex]; //Cambio el valor del ultimo indice del deck por el valor del indice random
            shuffDeck[randomIndex] = originalIndex; //cambio valor del indice random por el Holdeado
            //console.log('Random Card: ',remDeck[cardsLeft]);//Each random card
        }

        deck.value = shuffDeck 
        //console.log(deck.value);
        //setDeck(shuffDeck);
    }

        return {
            deck,
            setShuffledDeck,
        }
}

export default useShuffle