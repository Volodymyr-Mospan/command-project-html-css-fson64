const refs = {
  openModalLocationBtn: document.querySelector('[data-modalLocation-open]'),
  closeModalLocationBtn: document.querySelector('[data-modalLocation-close]'),
  modalLocation: document.querySelector('[data-modalLocation]'),
};

refs.openModalLocationBtn.addEventListener('click', toggleModal);
refs.closeModalLocationBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modalLocation.classList.toggle('is-open');
}
