import Avion from "./Avion.js";
import Servicio from "./Servicio.js";
import ServicioAereo from "./ServicioAereo.js";

//Aplicación de mensajeria
const servicioTerrestre = new Servicio();
const servicioTerrestre2 = new Servicio();

const servicioAereo = new ServicioAereo();
const servicioAereo2 = new ServicioAereo();

function enviarPaquete(servicio, lugar){

    const transporte = servicio.obtenerTransporte();
    transporte.transportar(lugar);   
}

enviarPaquete(servicioTerrestre, "Cartagena");
enviarPaquete(servicioAereo, "Santa Marta");
enviarPaquete(servicioAereo2, "Bogotá");
enviarPaquete(servicioTerrestre2, "Bucaramanga");