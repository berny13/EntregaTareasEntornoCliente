function createNewPerson(name, edad, deporte) {
        var obj = {};
        obj.name = name;
        obj.edad = edad;
        obj.deporte= deporte;
        obj.greeting = function() {
          alert('Hola soy: ' + this.name + 'tengo :' +this.edad +'Practico el: ' + this.deporte);
        };
        return obj;
      }
