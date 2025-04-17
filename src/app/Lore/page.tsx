'use client'
import Auth from "@/app/Auth";
import BaseLore from "@/Basic Content/BaseLore"
import AdvLore from "@/Adv Content/AdvLore";

export default function Lore() {
    if (Auth() == 1){
        return <BaseLore />
    } else if (Auth() == 2){
        return <AdvLore />
    }
}