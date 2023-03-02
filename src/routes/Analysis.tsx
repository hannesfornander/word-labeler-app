import axios from "axios";
import { FormEvent, useState } from "react";
import { useQuery } from "react-query";
import { WordLabel } from "../types/WordLabel";

function Analysis() {
    const [sentence, setSentence] = useState("");

    const analyzeSentence = async () => {
        const { data } = await axios.get<WordLabel[]>(`https://localhost:44376/api/WordLabels/GetWordLabelsFromSentence/${sentence}`);
        return data;
    }

    const {data, status, refetch} = useQuery("analysis", analyzeSentence, {
        refetchOnWindowFocus: false,
        enabled: false
    });
    
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (sentence === "") return;
        refetch();
    };

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" placeholder="Text att analysera" value={sentence} onChange={(e) => setSentence(e.target.value)} className="rounded-md py-3 px-6 m-2 shadow-md outline-none" />
                <button type="submit" className="bg-red-400 hover:bg-red-600 rounded-full py-3 px-6 m-2 shadow-md outline-none">
                    Analysera
                </button>
            </form>
            { status === 'loading' && 
                <div>
                    <p>Analyserar mening...</p>
                </div>
            }
            { status === 'error' && 
                <div>
                    <p>Ett fel uppstod under analysen</p>
                </div>
            }
            { status === 'success' &&
                <div>
                    <p>Resultat:</p>
                    <ul>
                        {data.map((item, index) => 
                            <li key={index}>{item.word} - {item.label}</li>
                        )}
                    </ul>
                </div>
            }
        </div>
    );
}
export default Analysis;