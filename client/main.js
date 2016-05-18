import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.main.helpers({
  'intro': routeName => Router.current().route.getName() === routeName ? 'intro' : ''
  ,
  transition: () => (from, to, element) => to.template === "intro" ? 'left-to-right' :  'right-to-left',

});

