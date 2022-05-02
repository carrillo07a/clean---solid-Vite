(() => {

    // Ejemplo - Example
    // Archivos a evaluar - files to evaluate
    //bad practice:: const fs
    //bad practice:: { id: 1, f: false },

    // good practice
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ];

    // Archivos marcados para borrar - files to delete
    // bad practice:: const arhivos = fs.map(f => f.f);
    // good practice
    const arhivos = filesToEvaluate.map(file => file.flagged);


    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    class User { };
    interface User { };


    // día de hoy - today
    //bad practice:: const ddmmyyyy = new Date();
    // good practice
    const today = new Date();

    // días transcurridos - elapsed time in days
    //bad practice:: const d: number = 23;
    // good practice
    const elapsedTimeInDays: number = 23;

    // número de archivos en un directorio - number of files in directory
    //bad practice:: const dir = 33;
    // good practice
    const numberOfFilesInDirectory = 33;

    // primer nombre - first name
    //bad practice:: const nombre = 'Nombre';
    // good practice
    const firstName = 'Nombre';

    // primer apellido - last name
    // const apellido = 'apellido';
    // good practice
    const lastName = 'apellido';

    // días desde la última modificación - days since modification
    //bad practice:: const dsm = 12;
    // good practice
    const daysSinceLastModification = 12;

    // cantidad máxima de clases por estudiante - max classes per student
    //bad practice:: const max = 6;
    // good practice
    const maxClassesPerStudent = 6;

})();