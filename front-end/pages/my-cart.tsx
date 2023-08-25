import {NextPage} from "next";
import MyCart from "../components/myCart/MyCart";
import {Center} from "@chakra-ui/react";
import {useRouter} from "next/router";
import priceData from "../data";
import {useEffect, useState} from "react";

const Cart: NextPage = () => {
    const router = useRouter()
    const id = router.query.id
    const data = priceData[1]

    const [progress, setProgress] = useState(data)

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(progress))
    }, [progress])

    return (
        <Center w='full' minH='80vh'>
            <MyCart data={progress}/>
        </Center>
    )
}

export default Cart;