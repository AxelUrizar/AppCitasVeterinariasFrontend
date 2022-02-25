import React from "react";
import { Link } from "react-router-dom";
import ListadoMascotas from "../Mascotas/ListadoMascotas";

const Perfil = () => {
    return(
        <div className="h-75">
            <h2>Tu Perfil</h2>
            <div className="container mt-5 d-flex flex-column justify-content-around">
                <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mollis ante ut posuere scelerisque. Ut id mi vel purus volutpat blandit. Vivamus et dui vel nulla accumsan laoreet in ut turpis. Ut quis sollicitudin mi, ac dapibus purus. Vestibulum aliquam aliquet mauris id efficitur. Curabitur a est efficitur, efficitur nisi sit amet, ornare ipsum. Sed ac cursus sapien, in dignissim nulla. Quisque non arcu erat. Donec tristique arcu sit amet accumsan volutpat. Sed vitae nunc ut magna placerat malesuada. Donec luctus, lacus non tincidunt tristique, nulla ante dapibus nisl, id pellentesque nisl arcu a eros. Suspendisse sit amet fringilla est, sed venenatis purus. Nunc mattis suscipit erat, eu mollis mi sagittis at.</p>
                <ListadoMascotas />
            </div>
                <button className="buttonLink my-5"><Link to='nuevaMascota'>Añadir Mascota</Link></button>
        </div>
    )
}

export default Perfil