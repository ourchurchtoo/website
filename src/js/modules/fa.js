// console.log('Hello world from /js/index.js!');
import { library, dom } from '@fortawesome/fontawesome-svg-core';

// import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
// import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
// import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';

import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch';

// import { faCoffeeTogo } from '@fortawesome/pro-duotone-svg-icons/faCoffeeTogo';
// import { faHandHoldingHeart } from '@fortawesome/pro-duotone-svg-icons/faHandHoldingHeart';
// import { faUtensilsAlt as fadUtensilsAlt } from '@fortawesome/pro-duotone-svg-icons/faUtensilsAlt';

import { faBars } from '@fortawesome/pro-light-svg-icons/faBars';
import { faChurch } from '@fortawesome/pro-light-svg-icons/faChurch';
// import { faEye } from '@fortawesome/pro-light-svg-icons/faEye';
// import { faUtensilsAlt as falUtensilsAlt } from '@fortawesome/pro-light-svg-icons/faUtensilsAlt';
// import { faLongArrowLeft } from '@fortawesome/pro-light-svg-icons/faLongArrowLeft';
import { faTimes } from '@fortawesome/pro-light-svg-icons/faTimes';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';

library.add(
  faInstagram,
  faBars,
  faChurch,
  faSearch,
  faTimes,
  faUser,
);

dom.watch();
