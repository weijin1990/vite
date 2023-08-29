import 'vuetify/styles'
import { createVuetify } from "vuetify"
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
// import 'vuetify/dist/vuetify.min.css'

export default createVuetify({
    components,
    directives,
    icons: {
      iconfront: 'mdi',
    },
});