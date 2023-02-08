import React from "react"

const divStyles = "flex flex-row text-2xl lg:text-3xl text-lime-400 uppercase font-light text-center";

const Subtitle = (props: {children: any}) =>
{
    return(
        <div>
            <h2 className={divStyles}>{props.children}</h2>
        </div>
    );
}

export default Subtitle;