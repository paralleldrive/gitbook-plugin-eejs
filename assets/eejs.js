var app = {
  hideSummary: function hideSummary() {
    $('.book').removeClass('with-summary');
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(app.hideSummary, 1000);
});
