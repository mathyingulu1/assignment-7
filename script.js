$(function () {
    $('#photo-viewer').photoViewer().show().on('click', '.photo-frame', function (e) {
        var $content = $(this).clone().find('img').css({
            marginLeft: 0,
            marginTop: 0,
            width: '100%',
            height: 'auto'
        });

    class openModal {
            constructor() {
                this.$window = $(window);
                this.$modal = $('<div class="thumbnails"></div>');
                this.$content = $('<div class="thumbnails-content"/>');
                this.$close = $('<button role="button" class="modal-close">Close</button>');

                this.$modal.append(this.$content, this.$close);
                this.$close.on('click', (e) => {
                    e.preventDefault();
                    this.close();
                });
            }
        }
    });
});
