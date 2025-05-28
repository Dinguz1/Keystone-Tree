// The ID functionality is in no way secure, its like negative secure, but it works for now identify who is using the page

'use client'

export default function Home() {
    return (
      <div className = "w-full text-base/8">
        <h1 className="text-gradient text-center">Keystone Home Page</h1>
        <h1 className="header">{"What is Project Keystone"}</h1>
        <hr className="break"></hr>
        <p className="text-base/8">
        {"Keystone is a TTRPG system in which stories are told. These stories are a collaboration between the Game Master (GM) and players." +
        "The GM presents a world in which the players tell their story. This includes providing locations, adventure hooks, and Non-Player " +
        "Characters (NPCs) that the players can engage with. The Keystone system facilitates stories that ride on a knife's edge, with fast" +
         "paced and punishing combat, as well as significant consequences for poor decisions but a plethora of options and abilities both in "+
         "and out of combat to triumph over obstacles. At any moment, disaster may strike or victory may be snatched from the jaws of defeat." }
        </p>
        <h1>{"System Goal"}</h1>
        <hr className="break"></hr>
        <p className="text-base/8">
          {"The primary goal of this system is to make everything “make sense” while not succumbing to the extremely “number crunchy” nature of " + 
          "some other systems that attempt this. Most of the semi-”crunchy” rules come into play during character creation, or when leveling " + 
          "up/changing equipment, but not during moment to moment play to avoid confusion during fast/important decisions. Secondary goals are " + 
          "to make combat fast-paced, deadly, and engaging by having the amount of damage a character can take start low, scale very slowly, and " +
          "emphasizing active damage mitigation via abilities, spells, and strategic thinking. Players make dynamic choices to avoid or reduce " + 
          "incoming damage rather than relying on HP bloat. As well as to give players  the opportunity to build highly unique customized " +
          "characters that may or may not follow traditional archetypal builds."}
        </p>
      </div>
    );
}

