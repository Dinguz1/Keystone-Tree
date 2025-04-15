'use client'
import Button from "@/components/Button"; 


export default function Home() {

  localStorage.setItem('isAuth', 'false')

  function login(){
    localStorage.setItem('isAuth', 'true')
  }

  if (localStorage.getItem('isAuth')?.startsWith('false')){
    return(
      <div>
        <button onClick={login}>
          <h1><u></u>Login</h1>
        </button>
      </div>
    )
  }else if (localStorage.getItem('isAuth')?.startsWith('true')){
    return (
      <main>
        <Button text="Home" href="/" />
        <Button text="Rules" href="/rules" />
        <Button text="Lore" href="/lore" />
        <Button text="Skill Trees" href="/Skill-Tree" />
  
        <h1><u>Project Keystone Home</u></h1>
  
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
    );
  }else{
    return(
      <h1>
        You should not be seeing this, please hard reload the page (ctr + shift + r), if the issue persists please inform me 
      </h1>
    )
  }
}
