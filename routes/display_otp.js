exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from scripts', [], function(err, results) {
        	if (err) return next(err);
    		res.render( 'display_otp', {
					no_patients : results.length === 0,
					scripts : results,
    		});
      	});
	});
};
