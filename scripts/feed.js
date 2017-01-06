$(document).ready(function() {

	// HTTP REQUEST
	var myUrl = "https://codesmith-precourse.firebaseio.com/instagram/-JqL35o8u6t3dTQaFXSV.json"

	$.get(myUrl, function(data) {
		return data;
	}).done(function(n) {
		var picArr = n;
		for (var i = 0; i < picArr.length; i++) {
			$('#post-container').prepend(function() {
				return `	<div class="" id="post">
				<div class="post-header">
					<div class="avitar">
						<img class="img-responsive img-round" src="assets/images/propic.png" id="avatar-img">
					</div>
					<a class="username" href=#>wasatchandy</a>
					<a href=#>
						<p class="post-time">10h</p>
					</a>
				</div>
				<div class="post-main">
					<img class="img-responsive" src='${picArr[i]}' id="main-img" style='width:100%;'>
				</div>
				<div class="post-text">
					<div id="likes-count">1,200 Likes</div>
					<div>
						<p id="user-comment"><strong>wasatchandy</strong> find your line!</p>
					</div>
					<p id="view-comments">view all 31 comments</p>
					<div id="comments" style="text-align: left;">
						<div><a href=#><strong>smeads</strong></a> LIKEY!</div>
					</div>
					<hr>
					<div id="post-footer">
						<i class="fa fa-heart-o" aria-hidden="true" id="heart-o"></i>
						<i class="fa fa-heart" aria-hidden="true" style="color: red; display: none;" id="heart"></i>
						<input type="text" placeholder="Add a comment..." id="commentInput"></input>
						<img class="img-responsive" src="assets/images/dot.png" id="dot">
					</div>
				</div>
			</div>`
			})
		}
	})



	var commentSubmit = $('#commentInput')
    commentSubmit.keypress(function(e) {
        console.log(e)
        if (e.which == 13) {
            var newComment = $(e.target).val();
            $(e.target).val("");
            $(e.target).parent().parent().find('#comments').prepend(function() {
                return "<div><a href=#><strong>smeads</strong></a>" + " " + newComment + "</div>"
            });
        }
    });

    $('#heart-o').on('click', function() {
        $(this).hide();
        $('#heart').show();
    })
    $('#heart').on('click', function() {
        $(this).hide();
        $('#heart-o').show();
    })

    $('#main-img').on('dblclick', function(e) {
        console.log(e);
        e.active_target.parent().child('.heart').toggle();

        $('#heart-o').toggle();
        $('#heart').toggle();
    });


	
});
