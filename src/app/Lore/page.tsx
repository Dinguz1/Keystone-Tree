'use client'
import Auth from "@/app/Auth";
import BaseLore from "@/Basic Content/BaseLore"
import AdvLore from "@/Adv Content/AdvLore";
import LogIn from "../LogIn";

export default function Lore() {
    if (Auth() == 1){
        return BaseLore()
    } if (Auth() == 2){
        return AdvLore()
    } else {
        return LogIn()
    }
}