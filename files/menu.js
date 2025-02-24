document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.wp-block-navigation__responsive-container-open');
  const closeButton = document.querySelector('.wp-block-navigation__responsive-container-close');
  const menuContainer = document.querySelector('.wp-block-navigation__responsive-container');
  const htmlElement = document.documentElement;

  function openMenu() {
    menuContainer.classList.add('has-modal-open', 'is-menu-open');
    htmlElement.classList.add('has-modal-open');
  }

  function closeMenu() {
    menuContainer.classList.remove('has-modal-open', 'is-menu-open');
    htmlElement.classList.remove('has-modal-open');
  }

  if (menuButton && closeButton && menuContainer) {
    // メニューを開く
    menuButton.addEventListener('click', openMenu);

    // メニューを閉じる
    closeButton.addEventListener('click', closeMenu);

    // メニュー外クリックで閉じる
    menuContainer.addEventListener('click', function(e) {
      if (e.target === menuContainer) {
        closeMenu();
      }
    });

    // ESCキーで閉じる
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && menuContainer.classList.contains('is-menu-open')) {
        closeMenu();
      }
    });
  }
});