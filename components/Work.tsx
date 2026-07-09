import Card from "@/components/Card";
import Link from "next/link";

const projects = [{
        id: 0,
        videourl: "",
        alttext: "",
        caption: ""
    }];

const listItems = projects.map(project => (
    <li key={project.id}>
        <Card 
            videourl={project.videourl} 
            alttext={project.alttext} 
            caption={project.caption} 
        />
    </li>
));

export default function Work() {

    return(
        <>
            <h1 className="text-left"><b><u>Works</u></b></h1>
            <Link target="_blank" className="inherit underline" href="mailto:thuxgn.business@gmail.com"><h1><b>COMMISSION OPEN!</b></h1></Link>
            {/** 
            <ul className="p-[10px] grid max-w-[1600px] max-[620px]:grid-cols-1 max-[1100px]:grid-cols-2 grid-cols-4 gap-[20px] mx-auto my-[20px] list-none">
                {listItems}    
            </ul>
            **/}
        </>
        
    );
}

