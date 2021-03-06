$(document).ready(function() {
  // AJAX Form Handler
  $("#success").hide();
  $("#error").hide();
  $("#contact-form").validate({
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/nbuonin@gmail.com",
        method: "POST",
        data: {
          name: $(form).find("input[name='name']").val(),
          message: $(form).find("textarea[name='message']").val(),
          email: $(form).find("input[name='_replyto']").val()
        },
        dataType: "json",
        success: function() {
          $("#contact-form").fadeOut();
          $("#contact-message").fadeOut();
          $("#success").fadeIn();
        },
        error: function() {
          $("#error").fadeIn();
          $("#contact-message").fadeOut();
        }
      });
    }
  }); // end .validate

});
