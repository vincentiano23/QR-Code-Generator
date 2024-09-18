$(document).ready(function() {
    $('#generateBtn').click(function() {
        const qrInput = $('#qrInput').val();
        $('#qrCode').empty(); // Clear previous QR code
        if (qrInput) {
            $('#qrCode').qrcode({
                text: qrInput,
                width: 128,
                height: 128
            });
        } else {
            alert('Please enter a valid text or URL.');
        }
    });
});
