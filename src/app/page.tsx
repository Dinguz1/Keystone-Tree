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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et erat vitae risus consectetur porta ac sed quam. Etiam ultrices mattis augue interdum finibus. 
        Mauris non consectetur massa. Etiam molestie ex non massa facilisis maximus vel in augue. In fermentum elit felis, a auctor felis vehicula id. Vivamus eu sem 
        ut tortor tristique gravida non sed nisi. Donec iaculis libero risus, faucibus mattis augue sagittis ut. Morbi iaculis, nisl in imperdiet convallis, erat justo 
        ornare turpis, in bibendum magna ante non enim. Nunc quis volutpat dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec feugiat nisl ex, id tempus nibh accumsan vehicula. Aliquam in cursus erat, eu rutrum neque. Curabitur quis velit ac mauris iaculis iaculis quis aliquam 
        erat.Suspendisse potenti. Duis rutrum blandit commodo. Nulla facilisi. Fusce consectetur elit sit amet odio pretium semper. Fusce mollis mauris leo, ut euismod 
        justo pharetra et. Ut tincidunt justo elit, at commodo lorem lobortis eget. In vel placerat mauris, vel semper tortor. Integer ac augue et felis ullamcorper 
        ultrices.Praesent vel justo odio. Quisque at dolor vel massa  
        </p>
        </main>
      </div>
    );
  }
}

