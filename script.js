$(function(){
    
    $('#recurring').click(function(e){
        var checked = $(this).is(':checked');
        $('.recurring').prop('disabled', !checked);
        $('.donation').prop('disabled', checked);
    });

    // Keep a3 input in sync with selection
    $('[name=amount]').click(function(e){
        var amount = $(this).val();
        $('#a3').val(amount);
    });

});