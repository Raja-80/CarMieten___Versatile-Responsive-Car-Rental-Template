<template>
    <div class="relative">

        <div class="border-b border-gray-200 absolute top-0 left-0 right-0">

            <nav class="container flex justify-between items-center p-2 text-white">
                <div class="cursor-pointer flex items-center lg-pl-0 pl-6">
                    <nuxt-img :to="`/`" class="h-10 " :src="logo ? logo.src : $store.state.defaults.logo"
                        alt="company logo" />
                    <nuxt-link :to="`/`" class="cursor-pointer text-lg font-semibold ml-3">
                        {{ nav.name }}
                    </nuxt-link>
                </div>

                <!-- Responsive Menu -->
                <div v-if="nav.active_menu" class="lg:hidden">

                    <button @click="toggleMenu" class=" p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    </button>

                    <!-- Responsive menu items -->
                    <div v-if="isOpen" class="absolute top-20 right-0 bg-black p-4 pb-40 shadow-md">
                        <div v-for="(link, index) in nav.menu.items" :key="index"
                            class="text-prm duration-10 text-base mb-2">
                            <nuxt-link :to="link.url" @click="closeMenu">
                                {{ link.text }}
                            </nuxt-link>
                        </div>
                        <div>
                            <ul v-for="(item, i) in otherMenu" :key="i" class="flex flex-col">
                                <li class="flex flex-row text items-center mb-1 justify-between w-full rounded-md ">
                                    <a class="p-2 m-1 w-full flex text-prm" :href="item.url">
                                        {{ item.text }}
                                    </a>
                                    <button class=" p-2 mx-1" @click="activeId = activeId != item._id ? item._id : null">
                                        <svg v-if="item.childrens && item.childrens.length > 0" class="w-3 transform"
                                            :class="activeId == item._id ? 'rotate-180' : ''"
                                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            version="1.1" x="0px" y="0px" viewBox="0 0 330 330"
                                            style="enable-background:new 0 0 330 330;" xml:space="preserve">
                                            <path fill="white"
                                                d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                        </svg>
                                    </button>
                                </li>
                                <transition name="slide">
                                    <div v-if="item._id == activeId">
                                        <div v-for="(item, i) in item.childrens" :key="i"
                                            class="pr-10 bg-gray-50 rounded-md">
                                            <a class="p-1 mx-1 text-gray-400 rounded-md text-base mb-2 hover:bg-gray-50 text-navlink duration-10 flex"
                                                :href="item.url">{{ item.text }}</a>
                                            <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                                                <li v-for="(child, ii) in item.childrens" :key="ii">
                                                    <a class="p-1 mx-1 text-gray-400 rounded-md text-base mb-2 hover:bg-gray-50 text-navlink duration-10 flex"
                                                        :href="child.url">
                                                        {{ child.text }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </transition>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- <div v-if="nav.active_menu" class="lg:hidden">
    
    
                    <button @click="toggleMenu" class="text-white p-4" style="z-index: 1000; margin-right: 20px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>                        
                    </button>
    
                    Responsive menu items
                    <transition name="slide">
                        <div v-if="isOpen" class="overlay pt-24" style="z-index: 999;">
                            <div class="fixed inset-y-0 right-0 w-64 bg-black p-4 pb-40 shadow-md">
                                <div v-for="(link, index) in nav.menu.items" :key="index"
                                    class="text-prm duration-10 text-base mb-2">
                                    <nuxt-link :to="link.url" @click="closeMenu">
                                        {{ link.text }}
                                    </nuxt-link>
                                </div>
                                <div>
                                    <ul v-for="(item, i) in otherMenu" :key="i" class="flex flex-col">
                                        <li class="flex flex-row text items-center mb-1 justify-between w-full rounded-md ">
                                            <a class="p-2 m-1 w-full flex text-prm" :href="item.url">
                                                {{ item.text }}
                                            </a>
                                            <button class=" p-2 mx-1"
                                                @click="activeId = activeId != item._id ? item._id : null">
                                                <svg v-if="item.childrens && item.childrens.length > 0" class="w-3 transform"
                                                    :class="activeId == item._id ? 'rotate-180' : ''"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                                    viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;"
                                                    xml:space="preserve">
                                                    <path fill="white"
                                                        d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                                </svg>
                                            </button>
                                        </li>
                                        <transition name="slide">
                                            <div v-if="item._id == activeId">
                                                <div v-for="(item, i) in item.childrens" :key="i" class="pr-10 bg-gray-50 rounded-md">
                                                    <a class="p-1 mx-1 text-gray-400 rounded-md text-base mb-2 hover:bg-gray-50 text-navlink duration-10 flex"
                                                        :href="item.url">{{ item.text }}</a>
                                                    <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                                                        <li v-for="(child, ii) in item.childrens" :key="ii">
                                                            <a class="p-1 mx-1 text-gray-400 rounded-md text-base mb-2 hover:bg-gray-50 text-navlink duration-10 flex"
                                                                :href="child.url">
                                                                {{ child.text }}
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </transition>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div> -->

                <!-- Desktop Menu -->
                <div v-if="nav.active_menu" class="hidden lg:flex flex-row justify-center items-center  relative">
                    <div v-for="(link, index) in nav.menu.items" :key="index" class="text-xs mx-3 my-6">
                        <nuxt-link :to="link.url"
                            class=" text-prm text-gray-800 focus:underline focus:text-primary transition duration-1000 ease-in-out ">
                            {{ link.text }}
                        </nuxt-link>
                    </div>
                    <div class="flex flex-row ">
                        <ul v-for="(item, i) in otherMenu" :key="i" class="flex flex-col relative px-2"
                            :class="{ 'hovered': item.isClicked }">
                            <li class="flex flex-row text items-center mb-1 justify-between w-full rounded-md "
                                @click="item.isClicked = !item.isClicked">
                                <a class=" w-full flex cursor-pointer text-prm focus:underline focus:text-primary transition duration-1000 ease-in-out text-xs"
                                    :href="item.url">{{ item.text }}</a>
                                <button class="text-white p-2"
                                    @click="activeId = (activeId === item._id) ? null : item._id">
                                    <svg v-if="item.childrens && item.childrens.length > 0" class="w-3 transform"
                                        :class="{ 'rotate-180': item.isClicked }" xmlns="http://www.w3.org/2000/svg"
                                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px"
                                        viewBox="0 0 330 330" style=" fill: white;" xml:space="preserve">
                                        <path
                                            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z" />
                                    </svg>
                                </button>
                            </li>
                            <transition name="slide">
                                <div v-if="item.isClicked || item._id == activeId"
                                    class="bg-gray-50 py-2 px-3 rounded-md absolute top-full"
                                    style="box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
                                    <div v-for="(item, i) in item.childrens" :key="i" class="">
                                        <a class="flex p-3 mx-1 rounded-md  text-black text-xs mb-2 focus:underline focus:text-primary text-navlink duration-10 hover:bg-gray-200 "
                                            :href="item.url">{{ item.text }}</a>
                                        <ul class="p-2" v-if="item.childrens && item.childrens.length > 0">
                                            <li v-for="(child, ii) in item.childrens" :key="ii">
                                                <a class="p-1 mx-1 rounded-md  text-black text-xs mb-2 hover:transparent text-navlink duration-10 flex"
                                                    :href="child.url">
                                                    {{ child.text }}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </transition>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            nav: this.$settings.sections.navbar,
            logo: this.$settings.sections.navbar.logo,
            isOpen: false,
            activeId: null,
            isClicked: false,
            otherMenu: [
                {
                    _id: "lang",
                    text: this.$store.state.language.code,
                    active: this.$settings.sections.navbar.language_icon,
                    isClicked: false,
                    childrens: this.$settings.store_languages.map(l => {
                        return {
                            _id: l.code,
                            text: l.name,
                            url: `?lang=${l.code}`
                        }
                    })
                },
                {
                    _id: "currency",
                    text: this.$store.state.currency.code,
                    active: this.$settings.sections.navbar.currency_icon,
                    isClicked: false,
                    childrens: this.$settings.store_currencies.map(c => {
                        return {
                            _id: c.code,
                            text: c.name,
                            url: `?cur=${c.code}`
                        }
                    })
                }
            ].filter(item => item.active)
        };
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen;
        },
        closeMenu() {
            this.isOpen = false;
        },

    },
};
</script>
  
<style >
.overlay {
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
}

.slide-enter-active,
.slide-leave-active {
    transition: transform 0.3s;
}

.slide-enter,
.slide-leave-to {
    transform: translateX(100%);
}

.slide-enter-to,
.slide-leave {
    transform: translateX(0);
}

[dir='ltr'] .move-out {
    transform: translateX(-40em);
}

[dir='ltr'] .move-in {
    transform: translateX(-20em);
}

[dir="rtl"] .move-out {
    transform: translateX(40em);
}

[dir="rtl"] .move-in {
    transform: translateX(20em);
}

.flex-col.hovered>li:hover>a {
    color: #dc2626;

}
</style>
  