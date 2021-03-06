﻿'use strict'

/**
 * Задача №1: Сбой оборудования 
 */

// общее время для конвертации
var m = 24

// время конвертации одного формата
  , n = 3

// процент отказа оборудования
  , x = 27.3

// колличество форматов
  , c = 4000;

var result = countMinimunServersForConverts(m, n, x, c)

console.log(result);

/**
 * hardwareFailure - функция 
 *
 * @param m - общее время для конвертации
 * @param n - время конвертации одного формата
 * @param c - колличество форматов
 * @param x - процент отказа оборудования
 * @returns {Number} - необходимое минимальное колличество серверов
 */
function countMinimunServersForConverts(m, n, x, c){

  // проверка срока выполнения конвертации для одного формата на одном сервере
  if (n >= m) {
    console.log('Нереальные сроки для выполенения');
    return 1;
  }

  // колличество конвертаций на одном серевере за заданное время
  var countConvertFormats = Math.floor(m / n);

  // количестов серверов необходимых для конвертаций без сбоев
  var countServers = Math.ceil(c / countConvertFormats);

  // минимальное колличество серверов в случае отказа оборудования Х%
  var countProbabilityOfFailure = Math.ceil(countServers * x / 100);

  // колличество требуемых серверов
  var countSumServers = countServers + countProbabilityOfFailure;

  return countSumServers;
}
