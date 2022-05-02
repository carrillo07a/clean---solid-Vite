(() => {
    type Gender = 'M' | 'F';

    class Person {
        // No aplicando principios de responsabilidad unica
        // public name: string;
        // public gender: string;
        // public birthdate: Date;

        // constructor(name: string, gender: Gender, birthdate: Date) {
        //     this.name = name;
        //     this.gender = gender;
        //     this.birthdate = birthdate;
        // }

        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date
        ) { }
    }

    class User extends Person {
        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(name, gender, birthdate);
            this.lastAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenDirectory: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date,
        ) {
            super(email, role, name, gender, birthdate);
        }
    }

    // const newPerson = new Person('Luis', 'M', new Date('1985-01-01'));
    // console.log(newPerson);

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'prueba@google.com',
        'Admin',
        'Prueba',
        'M',
        new Date('1985-01-01'),
    );

    console.log({ userSettings });


})();