/* global TrelloPowerUp */

var GRAY_ICON = './images/icon-gray.svg';


var cardButtonCallback = function(t){
  return {
    callback: function(t){
      return t;
    }
  };
};

TrelloPowerUp.initialize({
  'card-buttons': function(t, options) {
    return [{
      icon: GRAY_ICON,
      text: 'Template',
      callback: cardButtonCallback
    }];
  }
});
