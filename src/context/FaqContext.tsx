import { useFaq } from "@/hooks/usefaq";
import { FaqHookType } from "@/types/FrequentQuestion";
import { createContext, useContext } from "react";

export const FaqContext = createContext({} as FaqHookType);


interface FaqContextInterface {
    children: React.ReactNode;

}

export const FaqProvider:React.FC<FaqContextInterface> =({children})=>{
    const faq = useFaq();

    return <FaqContext.Provider value={faq}>{children}</FaqContext.Provider>
}

export const useFaqContext = ()=>useContext(FaqContext)