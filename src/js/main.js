$(function() {
  $(".video").click(function() {
    let theModal = $(this).data("target")
    let videoSRC = $(this).attr("data-video")
    let videoSRCauto = videoSRC + "?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal + ' button.close').click(function() {
      $(theModal + ' iframe').attr('src', videoSRC);
    });
    $("#videoModal").on('hide.bs.modal', function(){
        $("iframe").attr('src', "");
    });
  });
});