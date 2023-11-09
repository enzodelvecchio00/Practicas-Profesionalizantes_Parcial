//DATOS DE JSON, AJAX

document.querySelector("#btndepa").addEventListener("click", traerdatos);
function traerdatos() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var datos = JSON.parse(this.responseText);
      mostrarDatos(datos);
    }
  };
  xhttp.open("GET","datoshotel.json", true);
  xhttp.send()
}

function mostrarDatos(datos) {
  var resultadoDiv = document.getElementById("respuesta");
  resultadoDiv.innerHTML = ""; // Limpiar el contenido anterior

  // Recorrer los datos y mostrarlos en el div resultado
  for (var i = 0; i < datos.length; i++) {
    var elemento = document.createElement("div");
    elemento.textContent =
      "Servicio: \n" +
      datos[i].servicio +
      ", Ubicación: \n" +
      datos[i].ubicacion +
      ", Precio: $" +
      datos[i].precio +
      ", Capacidad: \n" +
      datos[i].capacidad;

    resultadoDiv.appendChild(elemento);
  }
}

//FILTRADO DE PRECIO

function filtrarPrecio() {
    let input = document.getElementById("searchbar").value;
    const verif = isNaN(input);

    let tarjt = document.querySelector('.tarjetas');
    // Verificar si la entrada es un número válido
    if (!isNaN(input)) {
        let limitePrecio = parseInt(input); // Convertir el valor de entrada a número
        let peru = new XMLHttpRequest();
        peru.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var datos = JSON.parse(this.responseText);
                let filter = datos.filter(dato => dato.precio <= limitePrecio);
                
                // Limpiar el contenedor antes de agregar nuevas tarjetas
                tarjt.innerHTML = "";

                filter.forEach(result => {
                    var elemento = document.createElement("div");
                    elemento.classList.add("tarjeta1");
                    elemento.innerHTML = `
                            <a href="index-hotel1.html" class="tarjeta1-a">
                                <h2 class="tarjeta-texto">Departamento en alquiler </h2>
                            </a>
                        </div>
                        <div class="tarjeta1-imagen">
                            <a href="index-hotel1.html"><img src="${result.img}"></a>
                            <p class="tarjeta1-p">Ubicación: ${result.ubicacion}</p>
                            <p class="tarjeta1-p">Servicio: ${result.servicio}</p>
                            <p class="tarjeta1-p">Capacidad: ${result.capacidad}</p>
                            <p class="tarjeta1-p"><b>Precio: ${result.precio}</b></p>
                        </div>
                        ;`
                    tarjt.appendChild(elemento);
                });
            }
        };
        peru.open("GET", "datoshotel.json", true);
        peru.send();
    } else {
            alert("Solo numeros!");
    }
}