import { useState } from "react"


export default function useForm<T extends object>(initilaData?: T) {
    const [form, setForm] = useState<T|null>(initilaData ?? null)

    function setProp<J extends keyof T>(key: J, value: T[J]){
        setForm(prev => {
            if(!prev) return prev
            return{
                ...prev,
                [key]: value
            }
        })
    }

    function reset(){
        setForm({...initilaData} as T)
    }

    return {form, setProp, reset}
}