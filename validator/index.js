
exports.createPostValidator = (req, res, next) =>{

	//for title validation
	req.check('title', "write a title").notEmpty()
	req.check('title', "Title must be between 4 to 100 characters.").isLength({
		min:4, max:100
	});

	// body validation
	req.check('body', "write a body").notEmpty()
	req.check('body', "Body must be between 4 to 1000 characters.").isLength({
		min:4, max:1000
	});

	// check for errors
	const errors = req.validationErrors()
	// if error show the first one as they happen
	if(errors){
		const firstError = errors.map((error)=> error.msg)[0]
		return res.status(400).json({error: firstError});
	}

	// proceed to next middleware 
	next();

}