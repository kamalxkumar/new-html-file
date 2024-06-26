document.getElementById('imageFile').addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('uploadedImage').setAttribute('src', event.target.result);
            document.getElementById('uploadedImage').style.display = 'block';
        }
        reader.readAsDataURL(file);
    } else {
        document.getElementById('uploadedImage').style.display = 'none';
    }
});
