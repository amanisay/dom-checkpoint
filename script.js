const articles = document.querySelectorAll(".article");
const totalEl = document.querySelector(".prix-total");
const addArticleBtn = document.querySelector(".add-article-btn");

// Fonction pour mettre à jour le prix total
function updateTotal() {
    let total = 0;
    articles.forEach((article) => {
      const quantity = parseInt(article.querySelector(".quantite input").value);
      const priceUnitaire = parseFloat(article.querySelector(".prix").dataset.prixUnitaire);
      total += quantity * priceUnitaire;
    });
    totalEl.textContent = total.toFixed(2) + "€";
  }
  addArticleBtn.addEventListener("click", () => {
    // ... code pour ajouter un nouvel élément "article" au DOM ...
    updateTotal();
  });
  const deleteBtns = document.querySelectorAll(".btn-supprimer");

deleteBtns.forEach((deleteBtn) => {
  deleteBtn.addEventListener("click", (e) => {
    // ... code pour supprimer l'élément "article" du DOM ...
    updateTotal();
  });
});
