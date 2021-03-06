﻿/*Разработайте компонент, который умеет отображать структуры данных в виде дерева.
Получает пропс data вида:
{ name: "tree", type:"FOLDER", children: [
    { name: "folder1", type:"FOLDER", children: [] },
    { name: "folder2", type:"FOLDER", children: [
            { name: "folder21", type:"FOLDER", children: [
                    { name: "file211", type:"FILE" },
                    { name: "file212", type:"FILE" },
                    { name: "file213", type:"FILE" },
                ] },
            { name: "folder22", type:"FOLDER", children: [] },
        ] },
    { name: "folder3", type:"FOLDER", children: [
            { name: "file31", type:"FILE" },
        ] },
] }
т.е. содержит узлы типа FOLDER либо FILE.
Отображается дерево вида: http://fe.it-academy.by/Examples/tree.png
В левой части - только FOLDER-узлы, в правой - только FILE-узлы.
Каждый узел FOLDER, если содержит подузлы FOLDER, может быть сложен или 
разложен нажатием на стрелочку слева (на скриншоте узел folder1 не содержит 
подузлов FOLDER, folder2 разложен, folder3 содержит подузлы FOLDER и сложен).
Может быть разложено одновременно несколько FOLDER-веток.
При выборе FOLDER-узла мышью:
 - он раскладывается, если это для него возможно;
 - в правой части отображаются его дочерние FILE-узлы, если такие есть.
Каждый FOLDER-узел вместе с его подузлами FOLDER должен быть отрендерен 
отдельным компонентом (т.е. слева - несколько вложенных друг в друга компонентов).
*/
"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Files from './components/Files';
import Folders from './components/Folders';

import './style.scss';

let treeData = { name: "tree", type:"FOLDER", children: [
  { name: "folder1", type:"FOLDER", children: [] },
  { name: "folder2", type:"FOLDER", children: [
      { name: "folder21", type:"FOLDER", children: [
          { name: "file211", type:"FILE" },
          { name: "file212", type:"FILE" },
          { name: "file213", type:"FILE" },
      ] },
      { name: "folder22", type:"FOLDER", children: [] },
  ] },
  { name: "folder3", type:"FOLDER", children: [
      { name: "file31", type:"FILE" },
  ] },
] };

let renderFuncFile = (key,name,modeAside) => {
    return <span key={key} className={'tree__file' + (modeAside?' tree__file--aside':'')}>{name}</span>;
};

let renderFuncFolder = (name, cbClick) => {
    return <div className='tree__folder-name' onClick={cbClick}>
                <div className='tree__folder-arrow'></div>
                <span>{name}</span>
            </div>
};

const showFilesAside = true;

ReactDOM.render(
    <div className='tree__container'>
        <Folders folders={treeData} renderFuncFolder={renderFuncFolder} renderFuncFile={renderFuncFile} showFilesAside={showFilesAside}></Folders>
        {showFilesAside && <Files renderFunc={renderFuncFile}/>}
    </div>
  , document.getElementById('container') 
);
