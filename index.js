module.exports = function(value, options, key, attributes) {
	
	var validIntnlPhone = /^\+?(?:[0-9] ?){6,14}[0-9]( ?Ext\. ?[0-9]+)?$/
    if (!validIntnlPhone.test(value)){
      return "Please enter phone number with no dashes or dots, and write extensions as \"Ext.\"\nFor example, +1 555 555 5555 Ext. 5555 or 5555555555 Ext.5555";
    }

  return null;
};