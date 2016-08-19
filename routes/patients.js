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

exports.showAdd = function(req, res) {
    res.render('add_patients');
}

exports.add = function(req, res, next) {
    req.getConnection(function(err, connection) {
        if (err) return next(err);
        var input = req.body;
        var data = {
            first_name: input.first_name,
            surname: input.surname,
            id_no: input.id_no,
            mobile_no: input.mobile_no,
            email: input.email,
            physical_address: input.physical_address,
            doc_id: input.doc_id
        };

        connection.query('insert into patients set ?', data, function(err, results) {
            if (err) return next(err);
            res.redirect('/patients');
        });
    });
};

exports.get = function(req, res, next) {
    var id = req.params.id;
    req.getConnection(function(err, connection) {
        connection.query('SELECT * FROM patients WHERE id = ?', [id], function(err, rows) {
            if (err) return next(err);
            res.render('edit_patient', {
                page_title: "Edit Customers - Node.js",
                data: rows[0]
            });
        });
    });
};
