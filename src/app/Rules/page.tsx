import {Tooltip} from "@heroui/tooltip";

export default function Rules() {
    return (
        <div>
            <h1>Rules</h1>
            <p>{"This is a test of the Rules page. If there is something mentioned that was not mentioned before or is very important, it should look like "}
            <Tooltip content="I am an example tooltip"><a>This</a></Tooltip>
            {" so that players can get more information"} 
            </p>
            
        </div>
    )
}