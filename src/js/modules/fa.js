// console.log('Hello world from /js/index.js!');
import { library, dom } from '@fortawesome/fontawesome-svg-core';

import { faGoogle } from '@fortawesome/free-brands-svg-icons/faGoogle';
import { faApple } from '@fortawesome/free-brands-svg-icons/faApple';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
import { faPinterest } from '@fortawesome/free-brands-svg-icons/faPinterest';
import { faSpotify } from '@fortawesome/free-brands-svg-icons/faSpotify';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
// import { faPatreon } from '@fortawesome/free-brands-svg-icons/faPatreon';

import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch';

// import { faCoffeeTogo } from '@fortawesome/pro-duotone-svg-icons/faCoffeeTogo';
import { faBars } from '@fortawesome/pro-light-svg-icons/faBars';
import { faChurch } from '@fortawesome/pro-light-svg-icons/faChurch';
import { faEnvelope } from '@fortawesome/pro-light-svg-icons/faEnvelope';
import { faEnvelopeOpenText } from '@fortawesome/pro-light-svg-icons/faEnvelopeOpenText';
import { faLongArrowLeft } from '@fortawesome/pro-light-svg-icons/faLongArrowLeft';
import { faMailbox } from '@fortawesome/pro-light-svg-icons/faMailbox';
import { faTimes } from '@fortawesome/pro-light-svg-icons/faTimes';
import { faUser } from '@fortawesome/pro-light-svg-icons/faUser';

library.add(
  faApple,
  faGoogle,
  faInstagram,
  faFacebook,
  faPinterest,
  faSpotify,
  faTwitter,
  faWhatsapp,
  // faPatreon,
  faBars,
  faChurch,
  faEnvelope,
  faEnvelopeOpenText,
  faLongArrowLeft,
  faMailbox,
  faSearch,
  faTimes,
  faUser,
);

dom.watch();
