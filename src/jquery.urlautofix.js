/*  A simple plugin to add http:// to a field if it doesn't exist already.
    Code and Design by Brett Kelts - (Keltex.com)
*/

(function ($) {
    $.fn.urlAutoFix = function () {
        this.change(function () {
            var val = $(this).val();
            if (val && !val.match(/^(https?:)\/\//))
            {
                $(this).val("http://" + val);
            }
        });
    }
}(jQuery));