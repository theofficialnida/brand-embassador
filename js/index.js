$(document).ready(function () {

    $('img').on('click', function () {

        var imgUrl = this.currentSrc;

        $("#exampleModalLong").modal();
        $("#modal_image").attr('src', imgUrl);

    });


});