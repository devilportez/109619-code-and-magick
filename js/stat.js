'use strict';

var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var SHADOW_SIZE = 10;
var SHADOW_X = CLOUD_X + SHADOW_SIZE;
var SHADOW_Y = CLOUD_Y + SHADOW_SIZE;
var WIN_TEXT_X = 120;
var WIN_TEXT_Y = 40;
var WIN_TEXT_SECOND_LINE_Y = 60;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var BAR_X = 155;
var BAR_Y = 245;
var BAR_GAP_X = 50;
var BAR_STEP_X = BAR_WIDTH + BAR_GAP_X;
var TIMES_Y = 240;
var NAMES_Y = 265;

var drawRect = function (ctx, x, y, width, height, fillColor, strokeColor) {
  if (strokeColor) {
    ctx.strokeStyle = strokeColor;
    ctx.strokeRect(x, y, width, height);
  }
  ctx.fillStyle = fillColor;
  ctx.fillRect(x, y, width, height);
};

var drawText = function (ctx, text, color, x, y) {
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var getMaxTime = function (times) {
  var maxTime = 0;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > maxTime) {
      maxTime = time;
    }
  }
  return maxTime;
};

window.renderStatistics = function (ctx, names, times) {
  ctx.font = '16px PT Mono';

  drawRect(ctx, SHADOW_X, SHADOW_Y, CLOUD_WIDTH, CLOUD_HEIGHT, 'rgba(0, 0, 0, 0.7)', '#000');
  drawRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, '#fff', '#000');
  drawText(ctx, 'Ура вы победили!', 'black', WIN_TEXT_X, WIN_TEXT_Y);
  drawText(ctx, 'Список результатов:', 'black', WIN_TEXT_X, WIN_TEXT_SECOND_LINE_Y);

  for (var i = 0; i < names.length; i++) {
    var barPositionX = BAR_X + (BAR_STEP_X * i);
    var barHeight = BAR_HEIGHT / getMaxTime(times) * times[i];
    var barColor = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random();

    drawText(ctx, Math.floor(times[i]), 'black', barPositionX, TIMES_Y - barHeight);
    drawRect(ctx, barPositionX, BAR_Y, BAR_WIDTH, -barHeight, barColor, false);
    drawText(ctx, names[i], 'black', barPositionX, NAMES_Y);
  }
};
