export type FrequentQuestion = {
  _id?: string;
  question: string;
  answer:string;
};


export interface FaqHookType {
  getAllFaq:()=>void
  faqOptions:{
    data:FrequentQuestion[]
    loading:boolean
    error:any
  }
}