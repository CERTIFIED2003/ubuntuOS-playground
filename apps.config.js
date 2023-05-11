import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayAboutShubham } from './components/apps/shubham';
import { displayTerminalCalc } from './components/apps/calc';
import displayImageGenerator from './components/apps/image-generator';
import displayQuestionAnswer from './components/apps/question-answer';
import displayClangSocial from './components/apps/clang-social';
import displayInfix from './components/apps/infix';
import displayTodoApp from './components/apps/todo';
import displayCrowdFunding from './components/apps/crowdfunding';

const apps = [
    {
        id: "about-shubham",
        title: "About Me",
        icon: './themes/Yaru/apps/my_logo.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayAboutShubham,
    },
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify, // My Fav Playlist 😅
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Contact Me",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
    {
        id: "clang-social",
        title: "Clang Social",
        icon: './themes/Yaru/apps/clang.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayClangSocial,
    },
    {
        id: "question-answer",
        title: "Q/A",
        icon: './themes/Yaru/apps/question.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayQuestionAnswer,
    },
    {
        id: "image-generator",
        title: "Image Generator",
        icon: './themes/Yaru/apps/image.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayImageGenerator,
    },
    {
        id: "infix",
        title: "Infix Operations",
        icon: './themes/Yaru/apps/infix.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayInfix,
    },
    {
        id: "todo",
        title: "ToDo App",
        icon: './themes/Yaru/apps/todo.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTodoApp,
    },
    {
        id: "crowdfunding",
        title: "CrowdFunding ",
        icon: './themes/Yaru/apps/crowdfunding.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayCrowdFunding,
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
]

export default apps;