var PaginationModel = function() {
	var self = this;
	this.pageNumber = ko.observable(0);
	this.nbPerPage = 3;
	self.totalPagesHolder = ko.observableArray([]);

	self.data = ko.observableArray([
		{date: new Date(2017, 4), content:'kek4'},
		{date: new Date(2017, 1), content:'kek1'},
		{date: new Date(2017, 2), content:'kek2'},
		{date: new Date(2017, 3), content:'kek3'},
	]);
	
	this.totalPages = ko.computed(function() {
		var div = Math.floor(self.data().length / self.nbPerPage);
		div += self.data().length % self.nbPerPage > 0 ? 1 : 0;
		var pages = div - 1;
		self.totalPagesHolder.removeAll();
		for(var i=0; i < pages + 1; i++) {
			self.totalPagesHolder.push(i + 1);
		};
		return div - 1;
	});
	self.pageController = function(targetPage) {
		return self.pageNumber(targetPage - 1);
	}
	this.paginated = ko.computed(function() {
		var first = self.pageNumber() * self.nbPerPage;
		return self.data().slice(first, first + self.nbPerPage);
	});
	this.hasPrevious = ko.computed(function() {
		return self.pageNumber() !== 0;
	});
	this.hasNext = ko.computed(function() {
		return self.pageNumber() !== self.totalPages();
	});
	this.next = function() {
		if(self.pageNumber() < self.totalPages()) {
			self.pageNumber(self.pageNumber() + 1);
		}
	}	
	this.previous = function() {
		if(self.pageNumber() != 0) {
			self.pageNumber(self.pageNumber() - 1);
		}
	}
	this.sorterCount = ko.observable(true)
	this.count = ko.observable()
	this.sorter = function(){
		this.count(true)
		function compare(postA,postB){
			return postA.date - postB.date
		};
		if (this.sorterCount()){
			this.data.sort(compare);
			this.sorterCount(false);
			}
		else{
			this.data.reverse();
			this.sorterCount(true);
		}
	}
	  	    	  
}

var paginationModel = new PaginationModel();