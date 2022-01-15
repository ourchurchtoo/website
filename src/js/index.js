import './modules/fa';
import './modules/mailchimp';
import './modules/search';
import './modules/toggle';

import App from './app';
import FilterBindSelect from './modules/filter-select-bind';
import TabMarker from './modules/tab-marker';

const app = new App();
window.ourChuchTooApp = app;

app.filterBindSelect = new FilterBindSelect();
app.tabMarkerFilter = new TabMarker('.js-tab-marker--filter');
