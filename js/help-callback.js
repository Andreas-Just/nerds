  (function(d) {
    var createHelpBlock = function(text) {
      var div = d.createElement('div');
      div.appendChild(d.createTextNode(text));
      div.className = 'help';
      return div;
    },
    elems = d.querySelectorAll('[data-help]');
    [].forEach.call(elems, function(self) {
      self.addEventListener('focus', function() {
        var helpBlock = this._helpBlock || createHelpBlock(this.dataset.help);
        if(!this._helpBlock) {
         this.parentNode.insertBefore(helpBlock, this.nextSibling);
         this.clientHeight;
         this._helpBlock = helpBlock;
       }
       else clearTimeout(this._helpTimeout);
       helpBlock.classList.add('help-show');
     }, true);
      self.addEventListener('blur', function() {
        var self = this;
        this._helpBlock.classList.remove('help-show');
        this._helpTimeout = setTimeout(function() {
          self._helpBlock.remove();
          self._helpBlock = null;
        }, 3E3);
      }, true);
    });
  })(document);

      var linkCall = document.querySelector(".callback-us");

      var popupCall = document.querySelector(".modal-call");
      var close = popupCall.querySelector(".modal-close");

      var fogging = document.querySelector(".blackout");

      var formCall = popupCall.querySelector("form");
      var loginCall = popupCall.querySelector("[name=user-name]");
      var telCall = popupCall.querySelector("[name=user-tel]");

      var storage3 = localStorage.getItem("loginCall");
      var storage4 = localStorage.getItem("telCall");

      linkCall.addEventListener("click", function (evt) {
        evt.preventDefault();
        popupCall.classList.remove("modal-show-end");
        fogging.classList.remove("blackout-show-end");
        popupCall.classList.add("modal-show");
        fogging.classList.add("blackout-show");

        if (storage3 && storage4) {
          loginCall.value = storage3;
          telCall.value = storage4;
      } else if (storage3) {
          loginCall.value = storage3;
          telCall.focus();
      } else {
          loginCall.focus();
      }
  });
      close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popupCall.classList.add("modal-show-end");
      fogging.classList.add("blackout-show-end");
      popupCall.classList.remove("modal-show");
      popupCall.classList.remove("modal-error");
      fogging.classList.remove("blackout-show");
  });
      formCall.addEventListener("submit", function (evt) {
        if (!loginCall.value || !telCall.value) {
          evt.preventDefault();
          popupCall.classList.remove("modal-error");
          popupCall.offsetWidth = popupCall.offsetWidth;
          popupCall.classList.add("modal-error");
      } else {
          localStorage.setItem("loginCall", loginCall.value);
          localStorage.setItem("telCall", telCall.value);
          popupCall.classList.add("modal-show-end");
          fogging.classList.add("blackout-show-end");
          fogging.classList.remove("blackout-show");
      }
  });
      window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (popupCall.classList.contains("modal-show")) {
              popupCall.classList.add("modal-show-end");
              fogging.classList.add("blackout-show-end");
              popupCall.classList.remove("modal-show");
              popupCall.classList.remove("modal-error");
              fogging.classList.remove("blackout-show");
          }
      }
  });