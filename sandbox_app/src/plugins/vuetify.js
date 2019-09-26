// [Icons — Vuetify.js](https://vuetifyjs.com/ja/customization/icons#install-material-icons)
import "material-design-icons-iconfont/dist/material-design-icons.css";
import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md"
  }
});
