<script setup lang="ts">
    const router = useRouter()
    function goToInstruction() {
        router.push({ path: "/match-form/instruction" })
    }

</script>
<template>
    <div class="mf-introduction d-flex flex-column align-items-center gap-60">
        <header-title-one class="max-width-1100 match-form">
            <template #header>
                    SIPS <span class="symbol">&</span> SPARKS
                    <span class="d-block black1">MATCH FORM</span>
            </template>

            <template #sub-header>
                This form is for our in-person singles events that feature mini dates ❤️ and match selections 📝
                <br><br>
                At one of our events now? Click the button below to get sparking!  
            </template>
        </header-title-one>

        <b-button variant="ss-default-button" class="mf-button" @click="goToInstruction">START MARCH FORM</b-button>

    </div>
</template>

<style lang="scss">
.mf-introduction {
    
    .black1 {
        color: $black2;
    }

}
</style>