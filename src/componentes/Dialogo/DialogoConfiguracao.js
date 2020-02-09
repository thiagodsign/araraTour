let dialogoAberto = false;
let selecionarBody = document.getElementsByTagName('body');
let ultimoFocoAntesDoDialogo;

export function mostrarDialogo(idDoDialogo) {
  ultimoFocoAntesDoDialogo = document.activeElement;
  let idDoDialogoAberto = idDoDialogo;
  dialogoAberto = true;
  let todosElementosDoDialogo = document.querySelectorAll(`#${idDoDialogoAberto} *`);
  document.getElementById(idDoDialogoAberto).classList.add('dialogo_ativo');
  todosElementosDoDialogo[1].setAttribute('tabindex', '0');
  todosElementosDoDialogo[1].focus();
  selecionarBody[0].style.overflowY = 'hidden';
  let ultimoElementoDoDialogo = document.createElement('SPAN');
  document.getElementById(idDoDialogoAberto).appendChild(ultimoElementoDoDialogo);
  focusApenasNoDialogo(idDoDialogoAberto);
}

export function focusApenasNoDialogo(idDoDialogoAberto) {
  let todosElementosDoDialogo = document.querySelectorAll(`#${idDoDialogoAberto} *`);
  todosElementosDoDialogo[todosElementosDoDialogo.length - 1].setAttribute('tabindex', '0');
  todosElementosDoDialogo[todosElementosDoDialogo.length - 1].addEventListener('focus', function () {
    todosElementosDoDialogo[1].focus();
  });
  todosElementosDoDialogo[0].setAttribute('tabindex', '0');
  document.onkeydown = function (e) {
    e = e || window.event;
    todosElementosDoDialogo[0].addEventListener('focus', function () {
      if (e.shiftKey && e.keyCode === 9) {
        todosElementosDoDialogo[1].focus();
      }
    });
    if (e.keyCode === 27) {
      fecharDialogo();
    }
  };
}

export function fecharDialogo() {
  if (dialogoAberto) {
    // let todosElementosDoDialogo = document.querySelectorAll(`#${idDoDialogoAberto} *`);
    let todosElementosDoDialogo = document.querySelectorAll('.dialogo_ativo *');
    todosElementosDoDialogo[todosElementosDoDialogo.length - 1].remove();
    document.querySelector('.dialogo_ativo').classList.remove('dialogo_ativo');
    dialogoAberto = false;
    ultimoFocoAntesDoDialogo.focus();
    selecionarBody[0].style.overflowY = 'auto';
  }
}
