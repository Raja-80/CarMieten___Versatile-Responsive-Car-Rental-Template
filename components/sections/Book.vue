<template>
    <div :style="{ backgroundImage: 'url(' + background_img + ')' }" class="parallax-container lg:pb-0 pb-96">
        <div data-aos="fade-up" class="content flex lg:flex-row flex-col justify-center items-center text-3xl font-light ">
            {{ booking.title }}
            <nuxt-img data-aos="fade-up" v-if="booking.show_icon" class="h-10 mb-6 pl-8"
                :src="booking.icon ? booking.icon.src : $store.state.defaults.logo" alt="company logo" />

            <span data-aos="fade-up" class=" text-4xl font-semibold pl-2 pr-4">
                {{ booking.number }}
            </span>

            {{ booking.availability }}

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            booking: this.$settings.sections.booking,
            background_img: this.$settings.sections.booking.background_img ? this.$settings.sections.booking.background_img.src : 'https://storeno.b-cdn.net/stores/1-2024/1705581973215.jpeg',
        }
    },
}
</script>

<style >
.parallax-container {
    height: 200px;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;

}

.content {
    color: white;
    text-align: center;
    padding: 50px;
}
</style>