(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

const refs = {
  openModalBuynowBtn: document.querySelector('[data-modalBuynow-open]'),
  closeModalBuynowBtn: document.querySelector('[data-modalBuynow-close]'),
  modalBuynow: document.querySelector('[data-modalBuynow]'),
};

refs.openModalBuynowBtn.addEventListener('click', toggleModal);
refs.closeModalBuynowBtn.addEventListener('click', toggleModal);

function toggleModal() {
  refs.modalBuynow.classList.toggle('is-open');
}

{
  const refs = {
    openModalproductsBtn: document.querySelector('[data-modalproducts-open]'),
    closeModalproductsBtn: document.querySelector('[data-modalproducts-close]'),
    modalproducts: document.querySelector('[data-modalproducts]'),
  };

  refs.openModalproductsBtn.addEventListener('click', toggleModal);
  refs.closeModalproductsBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalproducts.classList.toggle('is-open');
  }
}

{
  const refs = {
    openModalvideoBtn: document.querySelector('[data-modalvideo-open]'),
    closeModalvideoBtn: document.querySelector('[data-modalvideo-close]'),
    modalvideo: document.querySelector('[data-modalvideo]'),
  };

  refs.openModalvideoBtn.addEventListener('click', toggleModal);
  refs.closeModalvideoBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalvideo.classList.toggle('is-open');
  }
}

{
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
}

{
  const refs = {
    openModalfranchiseBtn: document.querySelector('[data-modalfranchise-open]'),
    closeModalfranchiseBtn: document.querySelector(
      '[data-modalfranchise-close]'
    ),
    modalfranchise: document.querySelector('[data-modalfranchise]'),
  };

  refs.openModalfranchiseBtn.addEventListener('click', toggleModal);
  refs.closeModalfranchiseBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modalfranchise.classList.toggle('is-open');
  }
}

(() => {
  const mobileModal = document.querySelector('.js-modal-container');
  const openModalBtn = document.querySelector('.js-open-modal');
  const closModalBtn = document.querySelector('.js-close-modal');

  const toggleMenu = () => {
    const isModalOpen =
      openModalBtn.getAttribute('aria-expanded') === 'true' || false;
    openModalBtn.setAttribute('aria-expanded', !isModalOpen);
    mobileModal.classList.toggle('is-open');

    const scrollLockMethod = !isModalOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openModalBtn.addEventListener('click', toggleMenu);
  closeModalBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();
