import React from "react";

const MainContent = (props: {children: any}) =>
{
    return (<div className="w-screen h-screen flex flex-col lg:flex-row lg:space-x-5 space-y-5 bg-transparent justify-center items-center">{props.children}</div>);
}

export default MainContent;