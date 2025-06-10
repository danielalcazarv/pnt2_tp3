import axios from "axios";

class ServicioPersonas {
    #url

    constructor(){
        this.#url = 'https://684760cd7dbda7ee7ab23ca4.mockapi.io/users/'
    }

    getAll = async () => {
        try {
            const { data:personas} = await axios.get(this.#url)
            return personas
        } catch (error) {
            console.error("Error personas GET", error)
        }
    }

    post = async persona => {
        try {
            const { data: personaGuardada } = await axios.post(this.#url, persona)
            return personaGuardada
        } catch (error) {
            console.error("Error personas POST", error)
        }
    }

    delete = async id => {
        try {
            const { data: personaEliminada } = await axios.delete(this.#url+id)
            return personaEliminada
        } catch (error) {
            console.error("Error personas DELETE", error)
        }
    }
}

export default ServicioPersonas;