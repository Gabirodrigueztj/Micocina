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
        <h2>${receta.strMeal}</h2>
        <img src="${receta.strMealThumb}" alt="${receta.strMeal}" />
        <p class="instrucciones">${receta.strInstructions}</p>
      `;

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

 



