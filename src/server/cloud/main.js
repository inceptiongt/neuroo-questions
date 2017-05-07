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
      	// tem.id = item.id
      	return tem
      })
      response.success(results)
    },
    error: function() {
      response.error("movie lookup failed");
    }
  });
});
Parse.Cloud.define('updateQuestionsDetails', function (req, res) {
	var object = new Parse.Object("questions");
	object.save(req.params,{
		success: function (results) {
			response.success('OK')
		}
	})
})
Parse.Cloud.define('newQuestion', function (req, res) {
  var object = new Parse.Object("questions");
  console.log(req)
	object.save(req.params,{
		success: function (results) {
			res.success('OK')
		},
    error: function (results) {
      res.error('error')
    }
	})
})
