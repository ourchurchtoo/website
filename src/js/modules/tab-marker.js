export default class TabMarker {
  constructor(markerQuery) {
    this.tabMarker = document.querySelector(markerQuery);

    if (this.tabMarker) {
      this.tabMarkerRoot = this.tabMarker.parentNode;

      if (this.tabMarkerRoot) {
        this.tabMarkerTargets = this.tabMarkerRoot.querySelectorAll('.js-tab-marker__target');
        this.tabMarkerClickHandler = this.tabMarkerClick.bind(this);
        this.hasInteracted = false;

        this.init();
      }
    }
  }

  init() {
    // Tag markers should come first as the call to reset it needs to come after tabMarkerClick
    this.tabMarkerTargets.forEach((btn) => {
      btn.addEventListener('click', this.tabMarkerClickHandler);
    });
    // If a menu label is active, reset to this
    this.resetTabMarker();

    // Attempt to correct a loading error causing the marker to position incorrectly
    this.attemptCounter = 0;
    this.autoCorrect();
  }

  autoCorrect() {
    this.attemptCounter += 1;
    // If interaction has occured it should align properly eitherway
    if (!this.hasInteracted) {
      const activeLabel = this.tabMarkerRoot.querySelector('.js-tab-marker--default');
      if (activeLabel) {
        // Check the new offsetLeft with the initial to see if anything changed
        if (activeLabel.offsetLeft !== this.initialLeft) {
          // Apply autocorrection
          this.resetTabMarker();
        } else if (this.attemptCounter <= 50) {
          // Give it 50 attempts (5 seconds). Otherwise, assume it went right the first time
          setTimeout(() => {
            this.autoCorrect();
          }, 100);
        }
      }
    }
  }

  tabMarkerClick(e) {
    this.updateTabMarker(e.currentTarget);
    this.hasInteracted = true;
  }

  resetTabMarker() {
    const activeLabel = this.tabMarkerRoot.querySelector('.js-tab-marker--default');
    if (activeLabel) {
      this.updateTabMarker(activeLabel);
    } else {
      this.updateTabMarker();
    }
  }

  updateTabMarker(el) {
    if (el) {
      const paddingRemoval = 0;
      const width = el.clientWidth;
      const left = el.offsetLeft;

      this.tabMarker.style.width = `${width - paddingRemoval}px`;
      this.tabMarker.style.left = `${left + (paddingRemoval / 2)}px`;
      this.tabMarker.classList.add('is-active');

      if (!this.hasInteracted) {
        this.initialLeft = left;
      }
    } else {
      this.tabMarker.style.width = '0px';
      this.tabMarker.style.left = '0px';
      this.tabMarker.classList.remove('is-active');
    }
  }
}
