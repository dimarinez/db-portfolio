Router.configure({
  // the default layout
  layoutTemplate: 'main'
});

Router.route('/', function () {
  this.render('intro');
});

Router.route('/nike', function () {
  this.render('nike');
});

Router.route('/heineken', function () {
  this.render('heineken');
});

Router.route('/glassybaby', function() {
  this.render('glassybaby');
});

Router.route('/wowwee', function() {
  this.render('wowwee');
});

Router.route('/ernieball', function() {
  this.render('ernieball');
});


