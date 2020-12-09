// hides all the gifs upon initial doc ready

$( document ).ready( function() {
  console.log('1 - DOC READY!')

  $('#first-dev-gif').hide();  
  $('#second-dev-gif').hide();   
  $('#third-dev-gif').hide();  

  $('#first-brainbugs-gif').hide();  
  $('#second-brainbugs-gif').hide();   
  $('#third-brainbugs-gif').hide();  

  $('#first-gardener-gif').hide();  
  $('#second-gardener-gif').hide();   
  $('#third-gardener-gif').hide();  

  $('#first-corona-gif').hide();  
  $('#second-corona-gif').hide();   
  $('#third-corona-gif').hide();   

}) 


// ----- Devpendency section

$('#first-dev-gif-img').on('mouseover', function() {
  $('#first-dev-gif').show();
  $('#first-dev-gif-img').hide();
});

$('#second-dev-gif-img').on('mouseover', function() {
  $('#second-dev-gif').show();
  $('#second-dev-gif-img').hide();
});

$('#third-dev-gif-img').on('mouseover', function() {
  $('#third-dev-gif').show();
  $('#third-dev-gif-img').hide();
});



$('#first-dev-gif').on('mouseleave', function() {
  $('#first-dev-gif').hide();
  $('#first-dev-gif-img').show();
});

$('#second-dev-gif').on('mouseleave', function() {
  $('#second-dev-gif').hide();
  $('#second-dev-gif-img').show();
});

$('#third-dev-gif').on('mouseleave', function() {
  $('#third-dev-gif').hide();
  $('#third-dev-gif-img').show();
});

// ----- Brain Bugs section

$('#first-brainbugs-gif-img').on('mouseover', function() {
  $('#first-brainbugs-gif').show();
  $('#first-brainbugs-gif-img').hide();
});

$('#second-brainbugs-gif-img').on('mouseover', function() {
  $('#second-brainbugs-gif').show();
  $('#second-brainbugs-gif-img').hide();
});

$('#third-brainbugs-gif-img').on('mouseover', function() {
  $('#third-brainbugs-gif').show();
  $('#third-brainbugs-gif-img').hide();
});



$('#first-brainbugs-gif').on('mouseleave', function() {
  $('#first-brainbugs-gif').hide();
  $('#first-brainbugs-gif-img').show();
});

$('#second-brainbugs-gif').on('mouseleave', function() {
  $('#second-brainbugs-gif').hide();
  $('#second-brainbugs-gif-img').show();
});

$('#third-brainbugs-gif').on('mouseleave', function() {
  $('#third-brainbugs-gif').hide();
  $('#third-brainbugs-gif-img').show();
});



// ----- Gardener's Guide section


$('#first-gardener-gif-img').on('mouseover', function() {
  $('#first-gardener-gif').show();
  $('#first-gardener-gif-img').hide();
});

$('#second-gardener-gif-img').on('mouseover', function() {
  $('#second-gardener-gif').show();
  $('#second-gardener-gif-img').hide();
});

$('#third-gardener-gif-img').on('mouseover', function() {
  $('#third-gardener-gif').show();
  $('#third-gardener-gif-img').hide();
});


$('#first-gardener-gif').on('mouseleave', function() {
  $('#first-gardener-gif').hide();
  $('#first-gardener-gif-img').show();
});

$('#second-gardener-gif').on('mouseleave', function() {
  $('#second-gardener-gif').hide();
  $('#second-gardener-gif-img').show();
});

$('#third-gardener-gif').on('mouseleave', function() {
  $('#third-gardener-gif').hide();
  $('#third-gardener-gif-img').show();
});



// ----- Coronavirus Challenge section

$('#first-corona-gif-img').on('mouseover', function() {
  $('#first-corona-gif').show();
  $('#first-corona-gif-img').hide();
});

$('#second-corona-gif-img').on('mouseover', function() {
  $('#second-corona-gif').show();
  $('#second-corona-gif-img').hide();
});

$('#third-corona-gif-img').on('mouseover', function() {
  $('#third-corona-gif').show();
  $('#third-corona-gif-img').hide();
});


$('#first-corona-gif').on('mouseleave', function() {
  $('#first-corona-gif').hide();
  $('#first-corona-gif-img').show();
});

$('#second-corona-gif').on('mouseleave', function() {
  $('#second-corona-gif').hide();
  $('#second-corona-gif-img').show();
});

$('#third-corona-gif').on('mouseleave', function() {
  $('#third-corona-gif').hide();
  $('#third-corona-gif-img').show();
});


