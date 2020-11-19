export default class BindSelect {
  constructor() {
    this.root = document.querySelector('.filter__wrapper');

    if (this.root) {
      this.listenSelectChange = this.onSelectChange.bind(this);
      this.bindSelects('.js-radio-filter-select');
    }
  }

  deinit() {
    this.unbindSelects();
  }

  bindSelects(target) {
    if (this.selects) { this.unbindButtons(); }

    this.selects = this.root.querySelectorAll(target);
    this.selects.forEach((slct) => {
      slct.addEventListener('change', this.listenSelectChange);
    });
  }

  unbindSelects() {
    this.selects.forEach((slct) => {
      slct.removeEventListener('change', this.listenSelectChange);
    });
    this.selects = undefined;
  }

  onSelectChange(e) {
    const selectEl = e.target;
    const radioId = selectEl.value;
    const radioInput = document.getElementById(radioId);
    radioInput.click();
  }
}
