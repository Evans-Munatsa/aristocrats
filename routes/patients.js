exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from patients', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'patients', {
					no_patients : results.length === 0,
					patients : results,
    		});
      	});
	});
};