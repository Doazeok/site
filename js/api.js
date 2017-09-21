var api_model = {
  posts: ko.observableArray(),

  getPosts: function(){
    if (tumbler) {} else {
      var root = 'https://jsonplaceholder.typicode.com';

      for(var i = 1; i < 6; i++){
        $.ajax({
          url: root + '/posts/' + [i],
          method: 'GET'
        }).then(function(data) {
          api_model.posts.push(data);
        })
      }
      tumbler = true;
    }
  }

};

var tumbler = false;
