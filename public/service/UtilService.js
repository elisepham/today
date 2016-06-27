 app.service('UtilService', function(){
   this.getCountries = function() {
   	return [{
		id : 0,
		name : "-Please Select-"
	}, {
		id : "1",
		name : "India"
	}, {
		id : "2",
		name : "USA"
	}, {
		id : "3",
		name : "UK"
	}, {
		id : "4",
		name : "China"
	}];
    
   }
   this.getUSStates=function(){
   	 return ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ');
   	
   }
});