import {NextPage} from "next";
import Hero from "../components/home/Hero";
import Possibility from "../components/home/Possibility";
import ListHeadingSlider from "../components/home/ListHeadingSlider";

const About: NextPage = () => {
    return (
        <>
            <Hero/>
            <ListHeadingSlider />
            <Possibility/>
        </>
    )
}

export default About