const axios = require('axios');

const tampilkanData = () => {
  const inputKeyword = document.querySelector('.input-keyword').value.trim();

  axios
    .get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputKeyword}`)
    .then((json) => {
      const meal = json.data.meals;

      let card = '';
      meal.forEach((meal) => {
        card += showCard(meal);
      });
      const containerCard = document.querySelector('.meal-container');
      containerCard.innerHTML = card;

      //ketika modal diklik
      const modalDetailButton = document.querySelectorAll('.modal-detail-button');
      modalDetailButton.forEach((button) => {
        button.addEventListener('click', (e) => {
          const idMeal = e.target.dataset.idmeal;
          console.log(idMeal);
          fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
            .then((response) => response.json())
            .then((m) => {
              const intructionMeal = m.meals[0];
              const detailMeal = showMealDetail(intructionMeal);
              const mealBody = document.querySelector('.modal-body');

              mealBody.innerHTML = detailMeal;
            });
        });
      });
    })
    .catch((reason) => alert(`Menu Makanan yang anda cari tidak tersedia`));
};

const showCard = (meal) => `
        <div class="col-md-6 col-lg-4 my-3">
          <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" height="300px"/>
            <div class="card-body">
              <h5 class="card-title mb-3">${meal.strMeal}</h5>
              <a
                href="#"
                class="btn btn-primary modal-detail-button"
                data-bs-toggle="modal"
                data-bs-target="#mealDetailModal"
                data-idmeal="${meal.idMeal}"
                >Tampilkan Resep</a
              >
            </div>
          </div>
        </div>
        `;

const showMealDetail = (m) => `
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-md-3">
                      <img src="${m.strMealThumb}" class="img-fluid" />
                    </div>
                    <div class="col-md">
                      <ul class="list-group">
                        <li class="list-group-item"><h4>${m.strMeal}</h4></li>
                        <li class="list-group-item"><strong>Category : </strong> ${m.strCategory}</li>
                        <li class="list-group-item"><strong>Intruction : </strong> <br />${m.strInstructions}</li>
                      </ul>
                    </div>
                  </div>
                </div>
                `;

const searchButton = document.getElementById('button-search');
searchButton.addEventListener('click', tampilkanData);
