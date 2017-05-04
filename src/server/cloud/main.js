Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
Parse.Cloud.define("all", function(request, response) {
  var query = new Parse.Query("questions");
  // query.equalTo("id", request.params.id);
  query.find({
    success: function(results) {
      var result = results.map(function(item,index,arr){
      	// return item.attributes;
      	var tem = item.attributes
      	tem.id = item.id
      	return tem
      })
      response.success(result)
    },
    error: function() {
      response.error("movie lookup failed");
    }
  });
});
