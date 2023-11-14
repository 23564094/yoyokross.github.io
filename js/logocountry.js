var country1 = 'US';

fetch('https://ipapi.co/country/')
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    if (data == country1) {
      var el = document.getElementById('country-1');
      
      el.style.display = 'block';
      el.innerText = '' + data;

      // Optionally redirect to country specific subdomain
      // window.location.href = "http://country1.example.com";
    } else {
      var el = document.getElementById('country-2');
      
      el.style.display = 'block';
      el.innerText = '' + data;
      
      // Optionally redirect to country specific subdomain
      // window.location.href = "http://country2.example.com";
    }
  });
