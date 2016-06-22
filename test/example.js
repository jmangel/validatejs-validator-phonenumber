var test = require('tape');
var validate = require('validate.js');
var phoneValidator = require('../');

validate.validators.phone = phoneValidator;

var goodData = {
	phone: "12398239289"
}

var badData = {
	phone: "1020b12341"
}

var constraints = {
	phone: {
		phone: {}
	}
}

test('phone number test', function(t){
	t.plan(2);

	t.notOk(validate(goodData, constraints));
	t.ok(validate(badData, constraints));
});