$(document).ready(function() {
    $('a.login-window').click(function() {

        //lấy giá trị thuộc tính href - chính là phần tử "#login-box"
        var loginBox = $(this).attr('href');

        //cho hiện hộp đăng nhập trong 300ms
        $(loginBox).fadeIn("slow");

        // thêm phần tử id="over" vào cuối thẻ body
        $('body').append('<div id="over"></div>');
        $('#over').fadeIn(300);

        return false;
    });

    // khi click đóng hộp thoại
    $(document).on('click', "a.close, #over", function() {

        $('#over, .login').fadeOut(300, function() {
            $('#over').remove();
        });

        return false;
    });

    $("#dk-submit").click(function(e) {
        var data = {
            name: $("#name").val(),
            email: $.trim($("#email").val()),
            phonenumber: $("#ImagePath").val(),
            address: $("#address").val(),
            hospital: $("#hospital").val()
        }

        if (!data.name || !data.email || !data.phonenumber || !data.address || !data.hospital) {
            alert("You should input enough");
            return;
        }
    });
});