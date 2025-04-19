import { Tooltip } from "@heroui/tooltip";

export default function BaseLore() {
    return (

        <div className = "body w-[100%] max-w-[1200px]">
            <h1>Base Lore</h1>

            <p>{"This is the basic lore page. It is the lore that any player ID will see. Some Lore bits like names " +
            "will have short blurbs attached to them, these should look like "}
            <Tooltip content="I am an example tooltip"><a>This</a></Tooltip>
            {" so that players can get more information."} 
            </p>
            
        </div>

    )
}