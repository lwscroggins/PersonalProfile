// module.exports = function (app, config) {

//     app.all('/status', function (req, res) {
//         res.status(200).end();
//     });

//     var routehome = require(config.root + '/server/route-home');
//     app.all('/', routehome.processRequest);

//     var routeabout = require(config.root + '/server/route-about');
//     app.all('/about', routeabout.processRequest);

// 	var routeblog = require(config.root + '/server/route-blog');
// 	app.all('/blog', routeablog.processRequest);

// 	var routedestinations = require(config.root + 'server/route-destinations');
// 	app.all('/destinations', routedestinations.processRequest);

// 	var routefun = require(config.root + 'server/route-fun');
// 	app.all('/funandgames', routefun.processRequest);

// 	var routehistory = require(config.root + 'server/route-history');
// 	app.all('/history', routehistory.processRequest);

// 	var routehomes = require(config.root + 'server/route-homes');
// 	app.all('/homes', routehomes.processRequest);

// 	var routeresume = require(config.root + 'server/route-resume');
// 	app.all('/resume', routeresume.processRequest);

// };