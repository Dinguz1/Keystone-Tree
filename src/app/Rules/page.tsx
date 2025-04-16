'use client'
import Auth from "@/app/Auth";
import LogIn from "../LogIn";
import BaseRules from "@/Basic Content/BaseRules";

export default function Rules() {
    if (Auth() == -1){
        return LogIn()
    } else{
        return BaseRules()
    }
}