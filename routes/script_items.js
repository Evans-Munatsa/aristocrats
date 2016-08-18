exports.show = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from script_items', [], function(err, results) {
      if (err) return next(err);
    		res.render( 'script_items', {
					no_patients : results.length === 0,
					script_items : results,
    		});
      });
	});
};


exports.showAdd = function(req, res){
	req.getConnection(function(err, connection){
		if (err) return next(err);
		connection.query('SELECT * from script_items' , [], function(err, script_items) {
        	if (err) return next(err);
    		res.render( 'add_script_items', {
					script_items : script_items,
    		});
      	});
	});
};


exports.add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var data = {
		     	med_name: req.body.med_name,
      		quantity: Number(req.body.quantity)
			// Price : Number(req.body.Price)
  		};

		connection.query('insert into script_items set ?', data, function(err, results) {
  			if (err) return next(err);
				res.redirect('/script_items');
		});
	});
};
