import React from "react";

const MainContent = (props: {children: any}) =>
{
    return (<div className="w-screen h-screen flex flex-col bg-black justify-center items-center">{props.children}</div>);
}

export default MainContent;