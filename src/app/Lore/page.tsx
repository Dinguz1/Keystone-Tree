'use client'
import Auth from "@/app/Auth";
import BaseLore from "@/content/basic/BaseLore"
import AdvLore from "@/content/advanced/AdvLore";

export default function Lore() {
    if (Auth() == 1){
        return <BaseLore />
    } else if (Auth() == 2){
        return <AdvLore />
    }
}