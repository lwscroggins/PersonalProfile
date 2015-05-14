// module.exports = function (app, config) {

//     app.all('/status', function (req, res) {
//         res.status(200).end();
//     });

//     var routehome = require(config.root + '/server/route-home');
//     app.all('/', routehome.processRequest);

//     var routesearch = require(config.root + '/server/route-search');
//     app.all('/search/:query', routesearch.processRequest);
//     app.all('/search/:query/:page', routesearch.processRequest);

// };