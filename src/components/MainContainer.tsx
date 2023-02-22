import React from "react";
import styles from "./Main.module.css"

const MainContainer = (props: {children: any}) =>
{
    return (<main className={"w-screen h-screen flex flex-col items-center "+styles.main_container}>{props.children}</main>);
}

export default MainContainer;