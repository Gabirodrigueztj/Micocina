// Obtén el elemento donde mostrarás la receta aleatoria
const recetaAleatoriaContainer = document.getElementById('receta-aleatoria');

// URL de la API de recetas aleatorias
const url = 'https://www.themealdb.com/api/json/v1/1/random.php';

// Realiza una solicitud a la API
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extrae la receta aleatoria de los datos
    const receta = data.meals[0];

    // Verifica si se obtuvo una receta
    if (receta) {
      // Crea el contenido HTML para mostrar la receta aleatoria
      const html = `
      <div class="container">
      <div class="row">
        <h2>${receta.strMeal}</h2>
        
      <div class="col-md-8">
        <img src="${receta.strMealThumb}" alt="${receta.strMeal}" class="img-fluid">
      </div>
      <div class="col-md-4">
      <h3>Pasos a seguir:</h3>
      <p class="instrucciones">${receta.strInstructions}</p>
      </div>
      </div>
      </div>`;

      // Agrega el contenido HTML al contenedor
      recetaAleatoriaContainer.innerHTML = html;
    } else {
      // Maneja el caso en el que no se obtenga una receta
      recetaAleatoriaContainer.innerHTML = 'No se pudo obtener una receta aleatoria en este momento.';
    }
  })
  .catch(error => {
    console.error('Error al obtener la receta aleatoria:', error);
  });

// *********** comienza resultado html*******
const buscarBtn = document.getElementById('buscar-btn');
const campoBusqueda = document.getElementById('busqueda');
const resultadosContainer = document.getElementById('resultados');

buscarBtn.addEventListener('click', function () {
  const valorBusqueda = campoBusqueda.value.trim();
  
  if (valorBusqueda !== '') {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(valorBusqueda)}`;
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        mostrarResultados(data);
      })
      .catch(error => {
        console.error('Error al realizar la búsqueda:', error);
      });
  } else {
    resultadosContainer.innerHTML = 'Por favor, ingresa el nombre de la comida.';
  }
});

function mostrarResultados(data) {
  resultadosContainer.innerHTML = '';

  if (data.meals && data.meals.length > 0) {
    data.meals.forEach(meal => {
      const comidaHTML = `
        <h2>${meal.strMeal}</h2>
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}"  />
        <p>${meal.strCategory}</p>
        <a href="${meal.strSource}" target="_blank">Ver receta</a>
      `;

      const resultadoElement = document.createElement('div');
      resultadoElement.classList.add('resultado');
      resultadoElement.innerHTML = comidaHTML;
      resultadosContainer.appendChild(resultadoElement);
    });
  } else {
    resultadosContainer.innerHTML = 'No se encontraron resultados para la búsqueda.';
  }
}


 



