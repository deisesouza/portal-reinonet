var atual = 0,
    next = 0;

function tocador(playlist, tracks) {
    $('.playlist .track').trigger('pause');
    $('.playlist .play').removeClass('active');
    tocando = true;
    $(playlist).addClass('active');
    tracks.on('ended', function () {
        next = atual == tracks.length ? 0 : atual + 1;
        tracks.eq(next).trigger('load').trigger('play');
    });
    tracks.eq(atual).trigger('load').trigger('play');
}
$('.playlist').on('click', '.play', function (e) {
    atual = 0;
    var tracks = $(this).closest('ol').find('.track');
    tocador(this, tracks);
});

$('.playlist audio').on('play', function () {
    var index = $(this).closest('li').index() - 1;
    if (atual == index || next == index) return;
    atual = next = index;
    var tracks = $(this).closest('ol').find('.track');
    var playlist = $(this).closest('playlist').find('.play');
    tocador(playlist, tracks);
});