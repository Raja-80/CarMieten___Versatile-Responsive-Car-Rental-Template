<template>
    <div class="container flex flex-col items-center my-12 bg-white px-32">
        <div v-if="loading" class="flex items-center justify-center my-5">
            <si-loader></si-loader>
        </div>

        <div v-if="this.item" class="flex flex-row w-full">

            <div>
                <div class="flex flex-col justify-between items-start w-full">
                    <div data-aos="fade-up" class="flex justify-center items-start pt-10 w-full">

                        <nuxt-img class="h-full "
                            :src="item.image && item.image.url ? item.image.url : $store.state.defaults.logo"
                            alt="customer profile" />

                    </div>

                    <div data-aos="fade-up" class="my-6 flex flex-row justify-start items-center w-full">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" class="pr-3" viewBox="0 0 448 512">
                            <path fill="#dc2626"
                                d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                        </svg>
                        <div class=" text-xs">
                            {{ formatDate(item.createdAt) }}
                        </div>
                    </div>
                    <div data-aos="fade-up" class="pb-6 font-semibold text-lg w-full">

                        <div class=" text-black">
                            {{ item.title }}
                        </div>

                        <div class="border-b-4 border-primary w-8 mt-3">
                        </div>
                    </div>
                    <div data-aos="fade-up" class="font-light pb-4 leading-loose w-full">
                        <div v-html="item.content" class="text-black"></div>
                    </div>

                </div>
            </div>

        </div>
        <!-- <div v-if="share_buttons.show_share_buttons" class="flex flex-col justify-center w-full pt-32">
            <div v-if="share_buttons.show_title && this.item" class="text-black text-base font-normal text-center pb-7">
                {{ share_buttons.title }}
            </div>

            <div class="flex flex-row jus items-center">
                <div v-for="item in socialMedia" :key="item.name" class="flex items-center justify-around h-12 py-2 px-20">
                    <a class="flex h-full" :href="item.url" target="_blank" rel="noopener noreferrer">
                        <si-image class="w-10 h-10" width="40" height="40" :src="item.image" :alt="item.name" />
                    </a>
                </div>
            </div>
        </div> -->

    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: true,
            item: null,
            share_buttons: this.$settings.sections.blog.share_buttons,
            socialMedia: [
                {
                    name: 'whatsapp',
                    url: 'https://api.whatsapp.com/send?text={title}%20{url}',
                    image: 'https://storeno.b-cdn.net/themes/palest/whatsapp.png'
                },
                {
                    name: 'facebook',
                    image: 'https://storeno.b-cdn.net/themes/palest/facebook.png',
                    url: 'https://www.facebook.com/sharer.php?u={url}'
                },
                {
                    name: 'twitter',
                    url: 'https://twitter.com/intent/tweet?url={url}&text={title}',
                    image: 'https://storeno.b-cdn.net/themes/palest/twitter.png'
                },
                {
                    name: 'linkedin',
                    url: 'https://www.linkedin.com/sharing/share-offsite/?url={url}',
                    image: 'https://storeno.b-cdn.net/themes/palest/linkedin.png'
                }
            ]
        }
    },
    async mounted() {
        try {
            const { slug } = this.$route.params;
            const { data } = await this.$storeino.pages.get({ slug, type: 'POST' })
            this.item = data;

            console.log('API Response:', data);

            this.$store.state.seo.title = this.item.title + ' - ' + this.$settings.store_name;
            this.$store.state.seo.description = this.item.excerpt || this.$settings.store_description;

            let url = `https://${this.$store.state.domain}/blog/${this.item.slug}`;
            for (const button of this.socialMedia) {
                button.url = button.url.replace(/\{title\}/gi, this.item.title).replace(/\{url\}/gi, url);
            }
            this.loading = false;
        } catch (e) {
            console.log({ e });
            this.$nuxt.error({ statusCode: 404, message: 'post_not_found' })
        }

        this.$storeino.fbpx('PageView')
    },
    
    methods: {
        formatDate(dateString) {
            const options = { month: 'long', day: 'numeric', year: 'numeric' };
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', options).toUpperCase();
        },
    },
}
</script>
