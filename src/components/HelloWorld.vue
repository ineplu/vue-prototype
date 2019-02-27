<template>
  <section class="plan">
    <div id="headerGallery">
      <div class="headerGalleryWrap" id="disp_top" v-html="htmlHeader">
      </div>
    </div>
    <div>{{ $myMethod.getTxt('Put disp_no in url') }}</div>
    <h1>{{ msg }}</h1>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      html: ''
    }
  },
  computed: {
    ...mapGetters([
      'htmlHeader'
    ])
  },
  methods: {
    ...mapActions([
      'getHeader'
    ])
  },
  created() {
    let _self = this
    _self.getHeader({
      disp_no: _self.$route.params.disp_no // '021110097'
    })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, abbr, address, cite, code, del, dfn, em, img, ins, kbd, q, samp, small, strong, sub, sup, var, b, i, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, figcaption, figure, footer, header, hgroup, menu, nav, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: transparent;
}
#headerGallery .headerGalleryWrap img {
    display: block;
    width: 100%;
    height: auto;
}
</style>
