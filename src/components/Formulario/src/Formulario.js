import ServicioPersonas from "../../../services/personas.js"

export default {
    name: 'formulario',
    props: [],
    data() {
        return {
            servicioPersonas: new ServicioPersonas(),
            personas: [],
            persona: this.iniForm(),
            formDirty: this.iniForm()
        }
    },
    methods: {
        iniForm() {
            return {
                nombre: null,
                edad: null,
                email: null
            }
        },

        validarBotonEnvio() {
            return !this.errorNombre.ok || !this.errorEdad.ok || !this.errorEmail.ok
        },

        async enviar() {
            const persona = {...this.persona}
            console.log('enviar', persona)
            const personaGuardada = await this.servicioPersonas.post(persona)
            this.personas.push(personaGuardada)
            this.persona = this.iniForm()
            this.formDirty = this.iniForm()
        }
    },
    computed: {
        errorNombre() {
            let mensaje = ''
            if(!this.persona.nombre) mensaje = 'Campo requerido'
            else if(this.persona.nombre?.length < 5) mensaje = 'Este campo debe poseer al menos 5 caracteres'
            else if(this.persona.nombre?.length > 15) mensaje = 'Este campo debe poseer como máximo 15 caracteres'
            return {
                mostrar: mensaje != '' && this.formDirty.nombre,
                mensaje,
                ok: mensaje ==''
            }
        },

        errorEdad() {
            let mensaje = ''
            if(!this.persona.edad) mensaje = 'Campo requerido'
            else if(this.persona.edad < 18) mensaje = 'Debe ingresar un edad mayor a 18 años.'
            else if(this.persona.edad > 120) mensaje = 'La edad máxima permitida es 120 años.'
            return {
                mostrar: mensaje != '' && this.formDirty.edad,
                mensaje,
                ok: mensaje ==''
            }
        },

        errorEmail() {
            let mensaje = ''
            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            
            if(!this.persona.email) mensaje = 'Campo requerido'
            else if (!regexEmail.test(this.persona.email)) mensaje = 'Debe ingresar un email válido con arroba y dominio'
            return {
                mostrar: mensaje != '' && this.formDirty.email,
                mensaje,
                ok: mensaje ==''
            }
        }
    }
}