import MultiSelect from "../components/MultiSelect"
import { useState } from "react"

export type LanguageData = {
    name: string
    code: string
}
const languageOptions: LanguageData[] = [
    {
        name: "Hindi (हिन्दी)",
        code: "hi",
    },
    {
        name: "Tamil (தமிழ்)",
        code: "ta",
    },
    {
        name: "Telugu (తెలుగు)",
        code: "te",
    },
    {
        name: "Punjabi (ਪੰਜਾਬੀ)",
        code: "pa",
    },
    {
        name: "Marathi (मराठी)",
        code: "mr",
    },
    {
        name: "Gujarati (ગુજરાતી)",
        code: "gu",
    },
    {
        name: "Bengali (বাংলা)",
        code: "bn",
    },
    {
        name: "Kannada (ಕನ್ನಡ)",
        code: "kn",
    },
    {
        name: "Bhojpuri (भोजपुरी)",
        code: "bh",
    },
    {
        name: "Malayalam (മലയാളം)",
        code: "ml",
    },
    {
        name: "English",
        code: "en",
    },
]

type SelectLanguagesProps = {}
function SelectLanguages(props: SelectLanguagesProps) {
    const [selectedLanguages] = useState([])

    return (
        <>
            {selectedLanguages}
            <MultiSelect options={languageOptions}></MultiSelect>
        </>
    )
}

export default SelectLanguages
