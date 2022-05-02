(() => {

    // arreglo de temperaturas celsius
    //bad practice:: const arrayOfNums = [33.6, 12.34];
    // good practice
    const temperaturesCelsius = [33.6, 12.34];

    // Dirección ip del servidor
    //bad practice:: const ip = '123.123.123.123';
    // good practice
    const serverIp = '123.123.123.123';

    // Listado de usuarios
    //bad practice:: const people = [{ id: 1, email: 'luis@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];
    // good practice
    const users = [{ id: 1, email: 'luis@google.com' }, { id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    //bad practice:: const emails = people.map(u => u.email);
    // good practice
    const userEmails = users.map(user => user.email);

    // Variables booleanas de un video juego
    //bad practice:: const jump = false;
    // good practice
    const canJump = false;

    //bad practice:: const run = true;
    // good practice
    const canRun = true;

    //bad practice:: const noTieneItems = true;
    // good practice
    const hasItems = true;

    //bad practice:: const loading = false;
    // good practice
    const isLoading = false;

    // Otros ejercicios
    // tiempo inicial
    //bad practice:: const start = new Date().getTime();
    // good practice
    const startTime = new Date().getTime();
    //....
    //...
    // Tiempo al final
    //bad practice:: const end = new Date().getTime() - start;
    // good practice
    const endTime = new Date().getTime() - startTime;


    // Funciones
    // Obtiene los libros
    //bad practice:: function book() {
    // good practice
    function getBooks() {
        throw new Error('Function not implemented.');
    }

    // obtiene libros desde un URL
    //bad practice:: function BooksUrl(u: string) {
    // good practice
    function getBooksByUrl(url: string) {
        throw new Error('Function not implemented.');
    }

    // obtiene el área de un cuadrado basado en sus lados
    //bad practice:: function areaCuadrado(s: number) {
    // good practice
    function getSquareArea(side: number) {
        throw new Error('Function not implemented.');
    }

    // imprime el trabajo
    //bad practice:: function printJobIfJobIsActive() {
    // good practice
    function printJob() {
        throw new Error('Function not implemented.');
    }
})();
