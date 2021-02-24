var $gstart = document.querySelector('#gstart');
var $body = document.querySelector('.start-page');
var $divPage1 = document.querySelector('.row');
var $divPage2 = document.querySelector('.art-periods-row');
var $divPage3 = document.querySelector('.confirmation-page');
var $divPage4 = document.querySelector('.add-art-page');
var $centuryButtons = document.querySelectorAll('.century');
var $nextButton = document.querySelector('.next-button');
var $artButton = document.querySelector('#next');
var $backButton = document.querySelector('#previous');

$gstart.addEventListener('click', changePage);

function changePage(event) {
  $body.className = 'art-period-bg';
  $divPage1.className = 'hidden row';
  $divPage2.className = 'art-periods-row';
  $divPage3.className = 'hidden';
  data.view = 'art-periods-row';
}

$centuryButtons.forEach(item => {
  item.addEventListener('click', event => {
    if (item.className === 'century') {
      item.className = 'century-onclick';
      $nextButton.className = 'next-button';
    } else {
      item.className = 'century';
      $nextButton.className = 'hidden';
    }
  });
});

if (data.view === 'art-periods-row') {
  $body.className = 'art-period-bg';
  $divPage1.className = 'hidden row';
  $divPage2.className = 'art-periods-row';
}

$nextButton.addEventListener('click', changePage2);

function changePage2(event) {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage2.className = 'hidden art-periods-row';
  $divPage3.className = 'confirmation-page';
  data.view = 'confirmation-page';
}

if (data.view === 'confirmation-page') {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage2.className = 'hidden art-periods-row';
  $divPage3.className = 'confirmation-page';
}

$backButton.addEventListener('click', changePage);

$artButton.addEventListener('click', changePage3);

function changePage3(event) {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage3.className = 'hidden confirmation-page';
  $divPage4.className = 'page4';
  data.view = 'add-art-page';
}

if (data.view === 'add-art-page') {
  $body.className = 'app-bg';
  $gstart.className = 'hidden';
  $divPage3.className = 'hidden confirmation-page';
  $divPage4.className = 'add-art-page';
}
