module.exports = function (router) {
  router.post('/submitInquiry', function (request, response) {
    let form = request.body.data;
    console.log(form);
    return response.status(200).json({
      message:
        'Please check for a confirmation email and remember to call (646)888-3856 before sample dropoff.',
    });
  });
};
