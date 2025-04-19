import { Tooltip } from "@heroui/tooltip";

export default function AdvLore() {
    return (
        <div className = "stan-width">
            <h1>GM Lore</h1>

            <p>{"This is the GM lore page. It is the lore that only the GM will see. Some Lore bits like names " +
            "will have short blurbs attached to them, these should look like "}
            <Tooltip content="I am an example tooltip"><a>This</a></Tooltip>
            {" so that players can get more information. On subpages of the Lore page, some Player IDs will have" +
            "access to the more advanced Lore pages, like if it is lore from their home town."} 
            </p>
            
        </div>
    )
}