Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});
Parse.Cloud.define("all", function(request, response) {
  var query = new Parse.Query("questions");
  // query.equalTo("id", request.params.id);
  query.find({
    success: function(results) {
      // let result = results.map((item, index, array) => {
      //   result.quesId = item.objectId,
      //   result.type = item.type,
      //   result.title = item.title,
      //
      // })
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
  const Qusetions = Parse.Object.extend("questions")
  const questions = new Qusetions()
	questions.save(req.params,{
		success: function (results) {
			res.success('OK')
		},
    error: function (results) {
      console.log(222222,results)
      res.error('error')
    }
	})
})
