$(function() {

    // 悬停在视频上时的长下巴效果

    var timeoutID;
    
    $(".zone .video-list .video-wraper a").hover(
        function() {
            var target = $(this);

            timeoutID = setTimeout(function() {
                target.find('div.video-info').css('z-index', 8);
                target.find('div.title').removeClass("ellipsis");
                target.find('div.detail').stop().slideDown("100");
            }, 500);
        },
        function() {
            clearTimeout(timeoutID);
    
            var target = $(this);

            target.find('div.title').addClass("ellipsis");

            target.find('div.detail').stop().slideUp("100", function() {
                
                target.find('div.video-info').css('z-index', 0);
            });

        }
    );

});