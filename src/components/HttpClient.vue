<template>
  <section class="src-components-http-client">
    <div class="container-fluid mt-3">
      <button class="btn btn-success my-3 mr-3" @click="obtenerUsuariosXHR()" >Pedir XHR</button>
      <button class="btn btn-success my-3 mr-3" @click="obtenerUsuariosFetch()" >Pedir Fetch</button>
      <button class="btn btn-success my-3 mr-3" @click="obtenerUsuariosAxios()" >Pedir Axios</button>
      <button class="btn btn-danger my-3 mr-3" @click="usuarios = []" >Borrar datos</button>
      <br>
      <div v-if="usuarios.length" class="table-responsive">
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(usuario,index) in usuarios" :key="index">
              <td>{{usuario.id}}</td>
              <td>{{usuario.nombre}}</td>
              <td>{{usuario.email}}</td>
              <td>{{usuario.telefono}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5 v-else class="alert alert-danger text-center">No se encontraron datos</h5>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-http-client',
    props: [],
    mounted () {

    },
    data () {
      return {
        url: 'https://627da4d7dd8aafd4fa80f897.mockapi.io/usuarios',
        usuarios: []
      }
    },
    methods: {
       obtenerUsuariosXHR() {
        const xhr = new XMLHttpRequest()
        xhr.open('get',this.url)
        
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            this.usuarios = respuesta
          }
          else {
            console.error('Error en XHR status:', xhr.status)
          }
        })
        xhr.send()
      },
      async obtenerUsuariosFetch() {
        try {
          let response = await fetch(this.url)
          let respuesta = await response.json()
          this.usuarios = respuesta
        }
        catch(e) {
          console.error('Error en Fetch:', e)
        }
      },
      async obtenerUsuariosAxios() {
        try {
          let { data:respuesta } = await this.axios(this.url)
          this.usuarios = respuesta
        }
        catch(e) {
          console.error('Error en Axios:', e)
        }
      }      
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-http-client {

  }
</style>
