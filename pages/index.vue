<template>
    <div class="ss-landing-container d-flex flex-column gap-177">
        <div class="d-flex ">
            <div class="d-flex flex-column display-header-container gap-48">
                <div>
                    <div class="small-header display-header-36 font-weight-700 letter-spacing-1">SINGLE EVENTS FOR</div>
                    <div class="big-header display-header-128 font-weight-700 letter-spacing-1">REAL WORLD CONNECTION</div>
                </div>

                <b-button variant="ss-default-button ss-landing-header-button">BUY TICKETS</b-button>
            </div>

            <div class="ss-landing header">
                <img src="~assets/images/landing-header.svg" alt="">
            </div>
        </div>

        <landing-event></landing-event>

        <landing-recent-post></landing-recent-post>

        <landing-spark-connection></landing-spark-connection>
    </div>
</template>

<style lang="scss">
    .ss-landing-container {
        @include mobile-lg {
            gap: 70px !important;
        }
        .display-header-container {
            color: $red1;

            @include mobile-lg {
                .small-header {
                    font-size: 20px !important;
                    line-height: 20px !important;
                }

                .big-header {
                    font-size: 48px !important;
                    line-height: 48px !important;
                }

                gap: 20px !important;
            }
        }

        .ss-landing {
            @include mobile-lg {
                display: none;
            }
        }

        .ss-landing-header-button {
            height: 104px;
            width: 500px;

            @include mobile-lg {
                width: 203px;
                height: 61px;

                font-size: 12px !important;
                line-height: 12px !important;

            }
        }
    }
</style>