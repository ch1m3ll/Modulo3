class Alumno {
    constructor(nombre, apellidos, edad) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;

    }
}

class Materia {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class AlumnoMateria {
    constructor(idAlumno, idMateria, calificacion) {
        this.idAlumno = idAlumno;
        this.idMateria = idMateria;
        this.calificacion = calificacion;
    }
}
class Grupo {
    constructor(nombre) {
        this.nombre = nombre;
        this.alumnos = [];
    }
}

class ManejadorBD {
    constructor() {
        this.baseDatos = new BaseDatos();
        this.validador = new Validador();
    }
    agregarAlumno(alumno) {
        if (this.validador.validarAlumno(alumno)) {
            alumno.id = this.baseDatos.keyAlumno;
            this.baseDatos.tablaAlumnos.set(alumno.id, alumno);
            this.baseDatos.keyAlumno++;
        }

    }
    eliminarAlumno(id) {
        if (this.baseDatos.tablaAlumnos.get(id)) {
            this.baseDatos.tablaAlumnos.delete(id);
        }
    }
    agregarMateria(materia) {
        if (this.validador.validarMateria(materia)) {
            materia.id = this.baseDatos.keyMateria;
            this.baseDatos.tablaMaterias.set(materia.id, materia)
            this.baseDatos.keyMateria++;
        }
    }
    eliminarMateria(id) {
        if (this.baseDatos.tablaMaterias.get(id)) {
            this.baseDatos.tablaMaterias.delete(id)
        }
    }
    agregarAlumnoMateria(alumnoMateria) {                                       
        if (this.validador.validarAlumno(alumnoMateria)) {
            alumnoMateria.id = this.baseDatos.keyAlumnoMateria;
            this.baseDatos.tablaAlumnoMateria.set(alumnoMateria.id, alumnoMateria);
            this.baseDatos.keyAlumnoMateria++;
        }
    }
    consultarAlumnoMateria(idAlumno) {
        let alumnoMaterias = [];
        /* console.log(this.baseDatos.tablaAlumnos.get(idAlumno)); */
        this.baseDatos.tablaAlumnoMateria.forEach(element => {
            if (element.idAlumno == idAlumno) {
                //debugger
                let alumno = this.baseDatos.tablaAlumnos.get(idAlumno);               
                let materia = this.baseDatos.tablaMaterias.get(element.idMateria);
               
                alumnoMaterias.push({
                    nombre: alumno.nombre,
                    apellidos: alumno.apellidos,
                    edad: alumno.edad, 
                    materia: materia.nombre,  
                    calificacion: element.calificacion
                });
            }
        });
        
        return alumnoMaterias;
    }
    agregarGrupo(grupo) {
        if (this.validador(grupo)) {

        }
    }
    guardarBD() {
        console.log(JSON.parse(localStorage("proyectoBD")))
    }
}
class BaseDatos {
    constructor() {
        this.tablaAlumnos = new Map();
        this.tablaMaterias = new Map();
        this.tablaGrupos = new Map();
        this.tablaAlumnoMateria = new Map();
        this.keyAlumno = 0;
        this.keyMateria = 0;
        this.keyGrupos = 0;
        this.keyAlumnoMateria = 0;
    }
}
class Validador {
    validarAlumno(alumno) {
        return true;
    }
    validarMateria(materia) {
        return true;
    }                                                   bdRecuperada 
    validarGrupo(grupo) {
        return true;
    }
    validarAlumnoMateria(alumnoMateria) {
        return true;
    }
}


