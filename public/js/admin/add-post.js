{
    /* < script >
        $(document).ready(function() {
            $('.statusChange').change(function() {
                $currentStatus = $(this).val(); //$currentStatus = $('.statusChange').val();
                $parentNode = $(this).parents('tr');
                $orderCode = $parentNode.find('.orderCode').html();

                $data = {
                    'status': $currentStatus,
                    'orderCode': $orderCode
                };

                $.ajax({
                    type: 'get',
                    url: '/admin/order/ajax/change/status',
                    data: $data,
                    dataType: 'json',
                    success: function(response) {

                    }
                })

            })
        }) <
        /script> */
}