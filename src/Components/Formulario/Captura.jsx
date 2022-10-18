import {WSClient} from './WSClient'

export const getBase64FromUrl = async (url) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(url); 
      reader.onloadend = () => {
        const base64data = reader.result.split(',')[1];
        resolve(base64data);
      }
    });
}

export function captura(valores)
{
    console.log(valores);
    var cliente = new WSClient("http://localhost:7166/api");
    // da de alta el usuario, si el email ya existe regresa error
    
    var articulo=
        {
            nombre: valores.nombre,
            descripcion: valores.descripcion,
            precio: "1",
            cantidad: "1",
            foto: valores.foto
        };

    cliente.post("registrar_articulo",articulo,
    function(code,result)
    {
        if (code === 200) {
            alert("Articulo dado de alta");
        } else {
            alert("Error-captura " + JSON.stringify(result));
        }
    });
}    
