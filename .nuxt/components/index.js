export { default as SectionsApplication } from '../..\\components\\sections\\Application.vue'
export { default as SectionsBanner } from '../..\\components\\sections\\Banner.vue'
export { default as SectionsBenefits } from '../..\\components\\sections\\Benefits.vue'
export { default as SectionsBook } from '../..\\components\\sections\\Book.vue'
export { default as SectionsCopyright } from '../..\\components\\sections\\copyright.vue'
export { default as SectionsFleets } from '../..\\components\\sections\\Fleets.vue'
export { default as SectionsFooter } from '../..\\components\\sections\\Footer.vue'
export { default as SectionsGuides } from '../..\\components\\sections\\Guides.vue'
export { default as SectionsHeader } from '../..\\components\\sections\\Header.vue'
export { default as SectionsNews } from '../..\\components\\sections\\News.vue'
export { default as SectionsReviews } from '../..\\components\\sections\\Reviews.vue'
export { default as SectionsServices } from '../..\\components\\sections\\Services.vue'
export { default as SiAppLoader } from '../..\\components\\si\\AppLoader.vue'
export { default as SiBlog } from '../..\\components\\si\\Blog.vue'
export { default as SiCar } from '../..\\components\\si\\Car.vue'
export { default as SiCarDetails } from '../..\\components\\si\\carDetails.vue'
export { default as SiCarousel } from '../..\\components\\si\\Carousel.vue'
export { default as SiLoader } from '../..\\components\\si\\Loader.vue'
export { default as SiLoaderGlobal } from '../..\\components\\si\\LoaderGlobal.vue'
export { default as SiPriceRange } from '../..\\components\\si\\PriceRange.vue'
export { default as SiReview } from '../..\\components\\si\\Review.vue'
export { default as SiSlidingone } from '../..\\components\\si\\Slidingone.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
