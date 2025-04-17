import { Tooltip } from "@heroui/tooltip";

export default function BaseRules() {
    return (
        <div>
            <h1>Rules Page</h1>

            <p>{"This is the basic Rules page. Some important or previously unmentioned names/mechanics will get a burb/definition; these should look like "}
            <Tooltip content="I am an example tooltip"><a>This</a></Tooltip>
            {" so that players can get more information."} 
            </p>
            
        </div>
    )
}