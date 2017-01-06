$(document).ready(function() {
	$(document).on('click', '#login-btn', function () {
		if($('#username') && $('#password')) {
		window.location.href = window.location.href + "feed.html";
		}
	});
});
