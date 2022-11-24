export default class Avion{

    constructor(id){
        this.placa = id;
    }

    transportar(lugar){
        console.log("El avión ✈️["+this.placa+"] está transportando el pedido a:🗺️ "+lugar+", por medio aereo.");
    }
}