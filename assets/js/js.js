import { getProducts, addProduct, deleteTask, deleteAll } from "./crud.js";

getProducts();
// Se agrega la función pero no se ejecuta aún
window.addProduct = addProduct
window.deleteTask = deleteTask
window.deleteAll = deleteAll


// Guardar elementos en el local storage
// localStorage.setItem("name", "Brayan")
// localStorage.setItem("lastname", "Rivas")

// Obtener un valor del local storage
// console.log(localStorage.getItem("name"));

// Eliminar un valor del local storage
// localStorage.removeItem("lastname")

// Limpiar todo lo que haya en el local storage
// localStorage.clear()

// const user = { name: 'Laura' }

// Convertir el objeto a string para poder usarlo
// localStorage.setItem('user', JSON.stringify(user))

// const userFromLocalStorage = localStorage.getItem('user')
// console.log(userFromLocalStorage);
// let userObject = JSON.parse(userFromLocalStorage)
// console.log(userObject.name);