<template>
    <section class="card">
        <div class="card-header">
            <h3>Datos</h3>
        </div>
        <div class="card-body" v-if="personas.length">
            <div class="table-responsive">
                <table class="table table-secondary table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(persona, index) in personas" :key="index">
                            <td>{{ persona.id }}</td>
                            <td>{{ persona.nombre }}</td>
                            <td>{{ persona.edad }}</td>
                            <td>{{ persona.email }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>
</template>

<script>
    import ServicioPersonas from '../services/personas.js'
    export default {
        name: 'datos',
        props: [],
        mounted() {
            this.obtener()
        },
        data() {
            return {
                servicioPersonas: new ServicioPersonas(),
                personas: []
            }
        },
        methods: {
            async obtener() {
                const personas = await this.servicioPersonas.getAll()
                this.personas = personas
            }
        },
        computed: {
        }
}
</script>

<style scoped>
</style>