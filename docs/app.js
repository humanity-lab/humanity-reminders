(function () {
  function createCard(recognition) {
    var card = document.createElement("article");
    card.className = "card";

    var tag = document.createElement("div");
    tag.className = "card-tag";
    tag.textContent = recognition.short;

    var text = document.createElement("div");
    text.className = "card-text";
    text.textContent = recognition.text;

    card.appendChild(tag);
    card.appendChild(text);

    return card;
  }

  function renderCards() {
    var container = document.getElementById("cards");
    if (!container || !Array.isArray(REMINDERS)) {
      return;
    }

    REMINDERS.forEach(function (rec) {
      var card = createCard(rec);
      container.appendChild(card);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderCards);
  } else {
    renderCards();
  }
})();
