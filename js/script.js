    var link = document.querySelector(".write-us");

    var popup = document.querySelector(".modal-feedback");
    var close = popup.querySelector(".modal-close");

    var fogging = document.querySelector(".blackout");

    var form = popup.querySelector("form");
    var login = popup.querySelector("[name=user-name]");
    var email = popup.querySelector("[name=user-email]");
    var text = popup.querySelector("[name=user-text]");

    var storage1 = localStorage.getItem("login");
    var storage2 = localStorage.getItem("email");

    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup.classList.remove("modal-show-end");
        fogging.classList.remove("blackout-show-end");
        popup.classList.add("modal-show");
        fogging.classList.add("blackout-show");

        if (storage1 && storage2) {
          login.value = storage1;
          email.value = storage2;
          text.focus();
      } else if (storage1) {
          login.value = storage1;
          email.focus();
      } else {
          login.focus();
      }
  });

    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show-end");
      fogging.classList.add("blackout-show-end");
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      fogging.classList.remove("blackout-show");
  });

    form.addEventListener("submit", function (evt) {
        if (!login.value || !email.value || !text.value) {
          evt.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
      } else {
          localStorage.setItem("login", login.value);
          localStorage.setItem("email", email.value);
          popup.classList.add("modal-show-end");
          fogging.classList.add("blackout-show-end");
          fogging.classList.remove("blackout-show");
      }
  });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (popup.classList.contains("modal-show")) {
              popup.classList.add("modal-show-end");
              fogging.classList.add("blackout-show-end");
              popup.classList.remove("modal-show");
              popup.classList.remove("modal-error");
              fogging.classList.remove("blackout-show");
          }
      }
  });
