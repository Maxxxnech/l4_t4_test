import React from "react";
import ListItem from "./ListItem";
import "./css/ListItem.css";
/**
 * Превращает массив с вложенными объектами в плоский массив
 * Использует reduce c пустым массивом в качестве исходного значения
 * @param {Array} arr исходный массив вида [{title: ""}, {title: "", "models": []}]
 * @param {Number} liIndex сквозной индекс
 * @param {Number} level индикатор вложенности элемента в родительском массиве
 * @returns
 */
export default function Mapper(arr, index = 0, level = 0) {

  return arr.reduce((acc, el) => {
    acc.push(<ListItem key={++index + '_' + el.title} title={el.title} level={level} />);
    index = index + 1;
    if (el.models) {
      acc.push([...Mapper(el.models, ++index, level + 1)]);
    }
    return acc;
  }, []);
}
