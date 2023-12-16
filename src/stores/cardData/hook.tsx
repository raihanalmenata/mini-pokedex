import { useEffect, useReducer } from "react";
import cardDataReducer from "./reducer";
import { getNewCardData } from "../../utils/pokemon";

const useCardData = () => {
    const [cardData, dispatchCardData] = useReducer(cardDataReducer, [])

    useEffect(() => {
        const getIntialCardData = async () => {
        const newCardData = await getNewCardData(7,0);
        dispatchCardData({
            type: 'added',
            data: newCardData
        })
        }
        getIntialCardData()
    }
    ,[])

    return [cardData, dispatchCardData];
}

export default useCardData;