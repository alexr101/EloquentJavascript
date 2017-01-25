(function date(exports){
	var date = ["Jan", "Feb", "March"];

	exports.getDate = function(number){
		return date[number] || null;
	}

	
})(this.dates = {})

console.log(dates.getDate(1));

