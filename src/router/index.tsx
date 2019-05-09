import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const routes = [
    {
        path: "/",
        icon:"user",
        name:"首页",
        exact: true,
        main: () => <h2>Hom111e</h2>
    },
    {
        path: "/bubblegum",
        icon:"video-camera",
        name:"特殊",
        main: () => <h2>Bubblegum</h2>
    },
    {
        path: "/shoelaces",
        icon:"upload",
        name:"随便",
        main: () => <h2>Shoelaces</h2>
    }
];

export default routes;