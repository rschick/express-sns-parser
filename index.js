module.exports = function snsParser() {
	return function(req, res, next) {
		if (!req.body || !req.body.Message) {
			return res.status(400).send('Unable to parse message');
		}
		try {
			req.Message = req.body.Message = JSON.parse(req.body.Message);
		} catch (e) {
			return res.status(400).send('Invalid message format');
		}
		next();
	}
}
