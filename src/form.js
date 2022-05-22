import Vue from 'vue'
import VueForm from 'vue-form'

/*       El validator original prohibe escribir mas caracteres de lo permitido por lo que nunca podria aparecer un cartel indicando este error.       */
/*              Por eso agrego este custom validator para que pueda aparecer un cartel cuando se escriben mas caracteres de lo permitido.             */
let options = {
    validators : {
        'maxlength-para-cartel' : function(value,maxLenght) {
            return value.length <= maxLenght
        }
    }
}

Vue.use(VueForm, options)