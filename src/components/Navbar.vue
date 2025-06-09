<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/">TusDatos.com</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/">Inicio</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/formulario">Formulario</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/datos">Datos</RouterLink>
                </li>
            </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar',
        props: [],
        methods: {
        },
        computed: {
        }
}
</script>

<style>

</style>