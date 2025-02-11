<script setup>
    
</script>
<template>
    <div class="header-title-one-container">
        <div>
            <h1 class="header text-center">
                <slot name="header">HEADER 1</slot>
            </h1>
        </div>

        <div>
            <p class="sub-header">
                <slot name="sub-header">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                </slot>
            </p>
        </div>
    </div>
</template>

<style lang="scss">
.header-title-one-container {
    .header {
        @include bugaki-font(68px, 71.4px, 400, $red) {
            margin-bottom: 30px;
        }

        @include mobile-lg {
            font-size: 48px !important;
            line-height: 50.4px !important;
            text-align: left !important;
            .small-title {
                font-size: 24px !important;
                line-height: 25.2px !important;
            }
        }
    }

    .sub-header {
        @include font-custom(22px, 30.8px, 400, $red1) {
            margin-bottom: 0;
        }

        @include mobile-lg {
            font-size: 16px !important;
            line-height: 22.4px !important;
        }
    }
}

</style>