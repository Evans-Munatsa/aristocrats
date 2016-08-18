exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from scripts', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'scripts', {
					no_patients : results.length === 0,
					scripts : results,
    		});
      	});
	});
};
// exports.showAdd = function(req, res){
// 	res.render('add_category');
// }
// //
// exports.add = function (req, res, next) {
// 	req.getConnection(function(err, connection){
// 		if (err) return next(err);
// 		var input = req.body;
// 		var data = {
//       		Category : input.Category,
// 					// id : input.id
//   	};
//
// 	connection.query('insert into Categories set ?', data, function(err, results) {
// 			if (err) return next(err);
// 		res.redirect('/categories');
// 	});
//
// 	});
// };
//
// exports.get = function(req, res, next){
// 	var id = req.params.id;
// 	req.getConnection(function(err, connection){
// 		connection.query('SELECT * FROM Categories WHERE id = ?', [id], function(err,rows){
// 			if(err) return next(err);
// 			res.render('edit_category',{page_title:"Edit Customers - Node.js", data : rows[0]});
// 		});
// 	});
// };
//
// exports.update = function(req, res, next){
//
//   var data = req.body;
//   var id = req.params.id;
//   req.getConnection(function(err, connection){
// 			connection.query('UPDATE Categories SET ? WHERE id = ?', [data, id], function(err, rows){
//     			if (err) next(err);
//           		res.redirect('/categories');
//     		});
//
//     });
// };
//
// exports.delete = function(req, res, next){
// 	var id = req.params.id;
// 	req.getConnection(function(err, connection){
// 		connection.query('DELETE FROM Categories WHERE id = ?', [id], function(err,rows){
// 			if(err) return next(err);
// 			res.redirect('/categories');
// 		});
// 	});
// };
