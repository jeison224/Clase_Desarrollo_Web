const suma = (a,b) =>{
    /**
     * a y b son los parámetros de entrada.
     * La función debe devolver la suma de los parámetros de entrada
     * Debes generar el código para que la función haga lo solicitado.
     */
    return a+b;
}
console.log(suma(5,9));


const sonIguales = (x, y)=>{
    // Devuelve "true" si "x" e "y" son iguales
    // De lo contrario, devuelve "false"
    // Debes generar el código para que la función haga lo solicitado.
  return x===y;
}
console.log(sonIguales(5, 4));

    

function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    return str1.length === str2.length
  }
  console.log(tienenMismaLongitud("prueba","perros"))


  function esPositivo(numero) {
    /**
     * la función recibe como parámetro de entrada un número entero.
     * Devuelve como resultado una cadena de texto que indica si el 
     * número es positivo o negativo. 
     * Si el número es positivo, devolver ---> "Es positivo"
     * Si el número es negativo, devolver ---> "Es negativo"
     * Si el número es 0, devuelve false
     * Tu código:
     */
    if(numero>0){
      return "es positivo"
    }else if (numero<0){
      return "es negativo"
    }else{
      return false
    }
  }
  console.log(esPositivo(53));
  console.log(esPositivo(-24));
  console.log(esPositivo(0));

  const colors = (color)=>{
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuelve --> "This is blue"
    //En caso que el color recibido sea "red", devuelve --> "This is red"
    //En caso que el color recibido sea "green", devuelve --> "This is green"
    //En caso que el color recibido sea "orange", devuelve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    switch(color){
      case "blue":
        return "This is blue"
        case "red":
          return "This is red"
          case "green":
            return "This is green"
            case "orange":
              return "This is orange"
              default:
                return "Color not found"
    }
  }
  console.log(colors("red"))
  console.log(colors("gray"))


  const fizzBuzz = (numero)  => {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero
    if(numero % 3===0 && numero % 5===0){
      return "fizzbuzz"
    }
    else if(numero%3===0){
      return "fizz"
    }
    else if(numero%5===0){
      return "buzz"
    }
    else{
    return numero
    }
  }
console.log(fizzBuzz(30))
console.log(fizzBuzz(15))
console.log(fizzBuzz(25))
console.log(fizzBuzz(4))

  const devolverPrimerElemento = (array) => {
    /**
     * La función recibe como parámetro de entrada un arreglo.
     * La función debe regresar el primer elemento del arreglo
     */
    // Tu código:
   if(array.length>0){
    return array[0]
   }
  }
  const array_1=[1,2,3,4,5,6]
  console.log(devolverPrimerElemento(array_1))

  const agregarItemAlFinalDelArray = (array, elemento) =>{
    /**
     * La función recibe dos parámetros de entrada, un arreglo y un elemento
     * Se debe añadir el elemento al final del arreglo y luego regresar el arreglo
     */
    // Tu código:
    array.push(elemento)
    return array
  }
  arreglo_1=[1,2,3,4,5]
  elemento_1=45
  const nuevo= agregarItemAlFinalDelArray(arreglo_1,elemento_1)
  console.log(nuevo)

  const nuevoUsuario = (nombre, email, password) => {
    /**
     * Crea un nuevo objeto con las propiedades coincidiendo con los argumentos
     * que se pasan a la función.  Devuelve el objeto
     */
    // Tu código:
    const objeto={
      nombre:nombre,
      email:email,
      password:password
    }
    return objeto
  }
  const objeto=nuevoUsuario("jeison","@gmail.com","12345")
console.log(objeto)
  const verificarPassword = (usuario, password) => {
    // Comprueba si el "password" enviado coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:
    return usuario.password===password
  }
  const objeto1={
    nombre:"jei",
    email:"@gmail.com",
    password:"12345"
  }
  console.log(verificarPassword(objeto1,"12345"))
  console.log(verificarPassword(objeto1,"123456"))


  const actualizarPassword =(usuario, nuevaPassword) => {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
    // Devuelve el objeto
    // Tu código:
    usuario.password=nuevaPassword
    return usuario

  }
  const objeto2={
    nombre:"jei",
    email:"@gmail.com",
    password:"12345"
  }
  console.log(objeto2)
  const nuevacontra=actualizarPassword(objeto2,"54321")
  console.log(nuevacontra)

  const agregarAmigo = (usuario, nuevoAmigo) => {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
  usuario.amigos.push(nuevoAmigo)
  return usuario
   
  }
  const objeto3={
    nombre:"jei",
    amigos:["jose","maria","santiago"]
  }
  console.log(objeto3)
  const nuevoamigo=agregarAmigo(objeto3,"ximena")
  console.log(nuevoamigo)

  const pasarUsuarioAPremium = usuarios => {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:
    for (let i = 0; i < usuarios.length; i++) {
      usuarios[i].esPremium = true;
    }
  
    // Devuelve el array de usuarios actualizado
    return usuarios;
  };
  
  // Ejemplo de uso:
  const usuarios = [
    { nombre: "jei", esPremium: false },
    { nombre: "santi", esPremium: false },
    { nombre: "samuel", esPremium: false }
  ];
  
  const userpremium = pasarUsuarioAPremium(usuarios);
  console.log(userpremium);
  

  const sumarLikesDeUsuario = usuario => {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    let sumlikes=0;
    for (let i = 0; i < usuario.posts.length; i++) {
      sumlikes+=usuario.posts[i].likes 
    }
    return sumlikes

  }
  const usuario = {
    nombre: "jei",
    posts: [
      { post_1:"foto 1", likes: 124},
      { post_2:"foto 2", likes: 65},
      { post_3:"foto 3", likes: 72}
    ]
  };
  const total = sumarLikesDeUsuario(usuario);
  console.log('el total de likes es:'+ total) 

class Persona {
  // ---------------------------------------------------------------------------//
  //Crea el constructor de la clase "Persona"
  //Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio"
  //Debe tener un método llamado "detalle" que nos devuelve un objeto con 
  //las propiedades de la persona y sus valores.
  //un ejemplo del objeto es el siguiente
  //Ej: { 
    //   Nombre: 'Juan',
    //   Apellido: 'Perez',
    //   Edad: 22,
    //   Domicilio: 'Saavedra 123'
    //  }
    constructor(Nombre,Apellido,Edad,Domicilio){
    this.Nombre=Nombre;
    this.Apellido=Apellido;
    this.Edad=Edad;
    this.Domicilio=Domicilio;
    }
    detalle(){
      return {
        nombre: this.Nombre,
        apellido: this.Apellido,
        edad: this.Edad,
        domicilio: this.Domicilio
      }
    }
}
const persona1= new Persona("jeison","marulanda",24,"marulanda 123"
)
const detalles = persona1.detalle() 
console.log(detalles)

const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
    //Con esta función vamos a crear una nueva persona a partir de nuestro constructor de persona (creado en el ejercicio anterior)
    //Recibirá los valores "Juan", "Perez", 22, "Saavedra 123" para sus respectivas propiedades
    //Devolver la nueva persona creada
}
const persona2 =new Persona("Juan", "Perez", 22, "Saavedra 123")

const detalles2 = persona2.detalle() 
console.log(detalles2)

const sumarArray = (numeros, cb) =>{
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    let suma =0;
    for (let i = 0; i < numeros.length; i++) {
      if (Number.isInteger(numeros[i])) {
        suma += numeros[i];
      }
    }
    cb(suma)
}
const arreglonum=[1,2,3,4,5,6,7,8,9,10]
const mycallback = (resultado) => {
  console.log('La suma de los números es:', resultado);
};
sumarArray(arreglonum,mycallback)

const copiarEach = (array, cb) =>{
    // Itera sobre la matriz "array" y pasa los valores a cb uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en el array)
    // no tienes que devolver nada
    for (let i = 0; i < array.length; i++) {
      cb(array[i]);
  } 
}
const arreglonumeros=[1,2,3,4,5,6,7,8,9,10]
const callback =(valor) =>{
  console.log('valor:', valor)
}
copiarEach(arreglonumeros,callback )

  const operacionMatematica =(n1, n2, cb) =>{
    //Vamos a recibir una función (cb) que realiza una operación matemática junto con dos números.
    //Devolver la función pasándole como argumentos los números recibidos.
    //Tu código:
    return (n1, n2) => {
      return cb(n1,n2);
    };
  }
  const opera = (a, b) => a + b;
  const operación = operacionMatematica(10, 5, opera);
  console.log(operación(10, 5));

  function filter(array) {
    //Filtrar todos los elementos del array que comiencen con la letra "a".
    //Devolver un nuevo array con los elementos que cumplen la condición
    //Tu código:
    const filtro = array.filter(elemento => elemento.startsWith("a") || elemento.startsWith("A"));
    
    return filtro;
  } 
  const arreglo2 = ["manzana", "banana", "pera", "naranja", "aguacate", "zanahoria"];
  const resultado = filter(arreglo2);
  console.log(resultado)

  /**
 * Por favor no borrar el código que hay de aquí en adelante.
 * Este código sirve para ejecutar las pruebas de la solución hallada para cada
 * una de las funciones creadas.
 */
module.exports = {
    suma,
    sonIguales,
    tienenMismaLongitud,
    esPositivo,
    colors,
    fizzBuzz,
    devolverPrimerElemento,
    agregarItemAlFinalDelArray,
    nuevoUsuario,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    Persona,
    crearInstanciaPersona,
    sumarArray,
    copiarEach,
    operacionMatematica,
    filter
}

