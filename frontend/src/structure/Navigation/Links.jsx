import { MainPage } from "../../pages/MainPage/MainPage"
import { CommandTutorial } from "../../pages/CommandTutorial/CommandTutorial"
import { DataStructureTutorial } from "../../pages/DataStructureTutorial/DataStructureTutorial"
import { Action } from "../../pages/Action/Action"


export const nav = [
     { path:     "/",         name: "Главная",        element: <MainPage />,       isMenu: false},
     { path:     "/commands",         name: "Команды",        element: <CommandTutorial />,       isMenu: true},
     { path:     "/structure",         name: "Структуры данных",        element: <DataStructureTutorial />,       isMenu: true},
     { path:     "/action",         name: "Запросы",        element: <Action />,       isMenu: true},

]