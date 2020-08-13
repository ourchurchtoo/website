// console.log('Hello world from /js/index.js!');
import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faPatreon } from '@fortawesome/free-brands-svg-icons/faPatreon';

import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch';

// import { faCoffeeTogo } from '@fortawesome/pro-duotone-svg-icons/faCoffeeTogo';
import { faBars } from '@fortawesome/pro-light-svg-icons/faBars';
import { faBullhorn } from '@fortawesome/pro-light-svg-icons/faBullhorn';
import { faChurch } from '@fortawesome/pro-light-svg-icons/faChurch';
import { faEnvelopeOpenText } from '@fortawesome/pro-light-svg-icons/faEnvelopeOpenText';
import { faLongArrowLeft } from '@fortawesome/pro-light-svg-icons/faLongArrowLeft';
import { faTimes } from '@fortawesome/pro-light-svg-icons/faTimes';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';

library.add(
  faInstagram,
  faPatreon,
  faBars,
  faBullhorn,
  faChurch,
  faEnvelopeOpenText,
  faLongArrowLeft,
  faSearch,
  faTimes,
  faUser,
);

dom.watch();
