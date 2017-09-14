import $ from 'jquery';

class MobileMenu {
  constructor() {
    this.menuIcon = $('.header-info__setting__mobile-toggle');
    this.menuContent = $('nav');
    this.dropdownItem = $('.has-sub');

    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu.bind(this));
    this.dropdownItem.click(this.toggleDropdown);
  }

  toggleTheMenu() {
    this.menuContent.toggleClass('is-visible');
    this.menuIcon.toggleClass('active');

    this.dropdownItem.children('ul').removeClass('is-visible');
    this.dropdownItem.children('a').removeClass('no-border-b');
  }

  toggleDropdown() {
    $(this).siblings().children('ul').removeClass('is-visible');
    $(this).children('ul').toggleClass('is-visible');

    $(this).siblings().children('a').removeClass('no-border-b');
    $(this).children('a').toggleClass('no-border-b');
  }


}


export default MobileMenu;
