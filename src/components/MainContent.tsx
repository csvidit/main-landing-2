import React from "react";

const MainContent = (props: {children: any}) =>
{
    return (<div className="w-screen h-screen flex flex-col dark:bg-black">{props.children}</div>);
}

export default MainContent;