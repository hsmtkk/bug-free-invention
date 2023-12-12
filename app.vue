<template>
  <p>count {{ counterState.counter }}</p>
  <button v-on:click="counterState.increment">+</button>
  <button v-on:click="counterState.decrement">-</button>
  <button v-on:click="counterState.reset">reset</button>
</template>

<script setup lang="ts">
import { useCounterState } from './composables';
const counterState = useCounterState()
</script>