function ajouterImage() {
    var img = document.createElement('img');
    
    img.src = 'https://exemple.com/image.jpg'; 

    var divImages = document.getElementById('divImages');
    divImages.appendChild(img);
  }

  var btnAjouterImg = document.getElementById('btnAjouterImg');
  
  btnAjouterImg.addEventListener('click', ajouterImage);
  
  

var btnClic = document.getElementById('btnClic');

var resultat = document.getElementById('resultat');

if (localStorage.getItem('compteurClics')) {
  var compteur = parseInt(localStorage.getItem('compteurClics'));
} else {
  var compteur = 0;
}

resultat.textContent = 'Nombre de clics : ' + compteur;

btnClic.addEventListener('click', function() {
  compteur++;
  
  resultat.textContent = 'Nombre de clics : ' + compteur;
  
  localStorage.setItem('compteurClics', compteur);
});
