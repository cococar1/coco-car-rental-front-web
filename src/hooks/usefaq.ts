import { ALL_FAQ } from "@/gql/faq/faq.query"
import { useLazyQuery } from "@apollo/client"
import { useEffect } from "react"



export const useFaq =()=>{


    const [getAllFaq,getAllFaqRes] = useLazyQuery(ALL_FAQ)

    useEffect(()=>{
        console.log("hook")
        
        if(!getAllFaqRes.data){
            getAllFaq()
        }
        if(getAllFaqRes.data){
            console.log("test hook")
            console.log(getAllFaqRes.data)
        }
    },[getAllFaqRes.data])

    return {
        getAllFaq,
        faqOptions:{
            data:getAllFaqRes.data?.faqs,
            loading:getAllFaqRes.loading,
            error:getAllFaqRes.error
        }

    }
}