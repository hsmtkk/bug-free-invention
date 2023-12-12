export const useCounterState = function () {
    const count = useState<number>("count", () => 0)
    return {
        counter: readonly(count),
        increment: increment(count),
        decrement: decrement(count),
        reset: reset(count),
    }
}

const increment = (count: Ref<number>) => () => {
    count.value++
}

const decrement = (count: Ref<number>) => () => {
    if (count.value > 0) {
        count.value--
    }
}

const reset = (count: Ref<number>) => () => {
    count.value = 0
}
