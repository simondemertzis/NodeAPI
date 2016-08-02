var express = require('express');
var router = express.Router();

var ctrHotels = require('../controllers/hotels.controllers.js');
var ctrlReviews = require('../controllers/reviews.controllers.js');

router
	.route('/hotels')
	.get(ctrHotels.hotelsGetAll)
	.post(ctrHotels.hotelsAddOne);

router
	.route('/hotels/:hotelId')
	.get(ctrHotels.hotelsGetOne)
	.put(ctrHotels.hotelsUpdateOne)
	.delete(ctrHotels.hotelsDeleteOne);
	
// Review routes
router
  .route('/hotels/:hotelId/reviews')
  .get(ctrlReviews.reviewsGetAll)
  .post(ctrlReviews.reviewsAddOne);

router
  .route('/hotels/:hotelId/reviews/:reviewId')
  .get(ctrlReviews.reviewsGetOne)
  .put(ctrlReviews.reviewsUpdateOne)
  .delete(ctrlReviews.reviewsDeleteOne);


module.exports = router;