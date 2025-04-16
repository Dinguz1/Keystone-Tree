// The ID functionality is in no way secure, its like negative secure, but it works for now identify who is using the page

'use client'
import Auth from "@/app/Auth";
import MainNavBar from "@/components/MainNavBar";
import LogIn from "./LogIn";

export default function Home() {


  if (Auth() == -1){
    return (LogIn());
  }else{
    return (
      <div>
        <main className = "body">
        {MainNavBar()}
        <h1 className="text-gradient">Keystone Home Page</h1>
        <p>
        {"Keystone is ultimately a system in which stories are told. These stories are a collaboration between the Game Master (GM) and players." +
        "The GM presents a world in which the players  tell their story. This includes providing locations, adventure hooks, and Non-Player " +
        "Characters (NPCs) that the players can engage with. The Keystone system facilitates stories that ride on a knife's edge, with fast" +
         "paced  and punishing combat, as well as significant consequences for poor decisions but a plethora of options and abilities both in "+
         "and out of combat to triumph over obstacles. At any moment, disaster may strike or victory may be snatched from the jaws of defeat. " }
        </p>
        </main>
      </div>
    );
  }
}

