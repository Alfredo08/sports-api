
let sportsDB = [
					{
						name : "Basketball",
						id : 123
					},
					{
						name : "Soccer",
						id : 456
					},
					{
						name : "Football",
						id : 789
					}
				];

const ListSports = {
	get : function(){
		return sportsDB;
	} 
}

module.exports = {ListSports};





