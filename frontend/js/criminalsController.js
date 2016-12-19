angular.module('CriminalApp')
	.controller('CriminalController', CriminalController);

CriminalController.$inject = ['$http'];

function CriminalController($http){
	var self = this;
	self.all = [];

	self.addCriminal = addCriminal;
	self.newCriminal = {};

	self.getCriminals = getCriminals;

	self.deleteCriminal = deleteCriminal;

	function getCriminals(){
		$http
			.get('http://localhost:3000/criminals')
			.then(function(res){
				self.all = res.data.criminals;
			});
	}
	getCriminals();

	function addCriminal(){
		$http
		.post('http://localhost:3000/criminals',self.newCriminal)
		.then(function(res){
			getCriminals();
		});
		self.addCriminal = {};
	}
	function deleteCriminal(criminal){
		console.log('delete');
		$http
		.delete('http://localhost:3000/criminals/'+criminal._id)
		.then(function(res){
			var index = self.all.indexOf(criminal);
			self.all.splice(index,1);
		});
	}

}
	