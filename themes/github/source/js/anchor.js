$(document).ready(function () {
    $('.apollo-toc').on('click', '.apollo-toc-link', function () {

        var body = $(this).parents('body');
        var content = body.find('.left-content');

        var targetHref = $(this).attr('href');
        var links = content.find('a');

        $.each(links, function (index, ele) {
            if ($(ele).attr('href') === targetHref) {
                body.animate(
                    {scrollTop: $(ele).offset().top + 'px'},
                    400
                );
                return false;
            }
        });
        return false;
    });
});