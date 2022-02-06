// console.log('Hello world from /js/index.js!');
import { library, dom } from '@fortawesome/fontawesome-svg-core';

import {
  faApple,
  faDiscord,
  faFacebook,
  faGoogle,
  faInstagram,
  faPinterest,
  faSpotify,
  faTwitter,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

import { faSearch } from '@fortawesome/pro-regular-svg-icons/faSearch';

import {
  faBars,
  faBooks,
  faCalendarStar,
  faChurch,
  faEnvelope,
  faEnvelopeOpenText,
  faLongArrowLeft,
  faMailbox,
  faTimes,
  faUser,
} from '@fortawesome/pro-light-svg-icons';

library.add(
  faApple,
  faDiscord,
  faFacebook,
  faGoogle,
  faInstagram,
  faPinterest,
  faSpotify,
  faTwitter,
  faWhatsapp,
  faBars,
  faBooks,
  faCalendarStar,
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
