<template>

  <section class="src-components-formulario">

    <div class="container-fluid mt-3">
      <vue-form :state="formState" @submit.prevent="enviar()">
    
        <validate tag="div">

          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            class="form-control"
            name="nombre"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            :minlength="minLength"
            :maxlength-para-cartel="maxLength"
          />
    
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="minlength" class="alert alert-danger mt-1">El nombre debe contar con al menos {{minLength}} caracteres.</div>
            <div slot="maxlength-para-cartel" class="alert alert-danger mt-1">El nombre debe contar como maximo con {{maxLength}} caracteres.</div>
          </field-messages>

        </validate>

        <br>

        <validate tag="div">

          <label for="edad">Edad</label>
          <input 
            type="number"
            id="edad"
            class="form-control"
            name="edad"
            autocomplete="off"
            v-model.number="formData.edad" 
            required 
            :min="minEdad"
            :max="maxEdad"
          />
    
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">La edad ingresada debe ser al menos {{minEdad}} años.</div>
            <div slot="max" class="alert alert-danger mt-1">La edad ingresada debe ser como maximo {{maxEdad}} años.</div>
          </field-messages>

        </validate>
        <br>

        <validate tag="div">

          <label for="email">Email</label>
          <input 
            type="email"
            id="email"
            class="form-control"
            name="email"
            autocomplete="off"
            v-model="formData.email" 
            required 
          />
    
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="email" class="alert alert-danger mt-1">Email no válido</div>
          </field-messages>

        </validate>
        <br>

        <button class="btn btn-success my-3" :disabled="formState.$invalid">Enviar</button>

      </vue-form>

      <div v-if="personas.length">
        <table class="table table-striped table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(persona,index) in personas" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ persona.nombre }}</td>
            <td>{{ persona.edad }}</td>
            <td>{{ persona.email }}</td>
          </tr>
        </tbody>
      </table>   
      </div>
      <h5 v-else class="alert alert-danger text-center">No se encontraron personas</h5>
    </div>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.obtenerDataIncial(),
        personas:  [],
        minLength : 5,
        maxLength : 15,
        minEdad: 18,
        maxEdad: 120
      }
    },
    methods: {
      obtenerDataIncial() {
        return {
          nombre : null,
          edad: null,
          email: null
        }
      },
      enviar() {
        this.personas.push(this.formData)
        this.formData = this.obtenerDataIncial()
        this.formState._reset()
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-formulario {

  }
</style>
