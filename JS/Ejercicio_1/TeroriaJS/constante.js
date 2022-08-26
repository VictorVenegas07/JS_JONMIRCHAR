export const PI = Math.PI;

export let usurio ={
    Nombre:"Victor",
    password:"12n2"
}
//funcion arrow funtions
export const saludar = () => {
    console.log(`Hola soy ${usurio.Nombre}`);
}

// funcion definida o declarada
export function decirPasswd(){
    console.log(`mi password es ${usurio.password}`);
}

//funcion expresada
export const decirPasswdNombre = function(){
    console.log(`mi password es ${usurio.password}`);
}
