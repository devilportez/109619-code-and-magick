'use strict';

var SIMILAR_WIZARDS_AMOUNT = 4;

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var lastNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomInteger = function (max) {
  return Math.floor(Math.random() * max);
};

var generateWizards = function () {
  return {
    name: names[getRandomInteger(names.length)] + ' ' + lastNames[getRandomInteger(lastNames.length)],
    coatColor: coatColors[getRandomInteger(coatColors.length)],
    eyesColor: eyesColors[getRandomInteger(eyesColors.length)]
  };
};

var createWizard = function (template, data) {
  var wizardItem = template.cloneNode(true);
  wizardItem.querySelector('.setup-similar-label').textContent = data.name;
  wizardItem.querySelector('.wizard-coat').style.fill = data.coatColor;
  wizardItem.querySelector('.wizard-eyes').style.fill = data.eyesColor;

  return wizardItem;
};

var fillTemplateWithData = function (wizardsAmount) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizardsAmount; i++) {
    fragment.appendChild(createWizard(similarWizardTemplate, generateWizards()));
  }

  return fragment;
};

var setupOverlay = document.querySelector('.setup');
var similarWizardsList = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content.querySelector('.setup-similar-item');

similarWizardsList.appendChild(fillTemplateWithData(SIMILAR_WIZARDS_AMOUNT));
setupOverlay.querySelector('.setup-similar').classList.remove('hidden');
setupOverlay.classList.remove('hidden');
