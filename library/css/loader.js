<script>
  document.addEventListener("DOMContentLoaded", function() {
    var image = document.querySelector('.card-img-top');
    var loader = document.querySelector('.loader');

    image.addEventListener('load', function() {
      // Gambar telah dimuat, sembunyikan loader
      loader.style.display = 'none';
    });
  });
</script>
