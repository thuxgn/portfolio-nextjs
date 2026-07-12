import Card from "@/components/Card";

const projects = [{
        id: 7,
        videourl: "https://www.tiktok.com/@thuxgn/video/7631290465987415317",
        alttext: "KiiKii - Delulu prod.ganior Mimoz",
        caption: "KiiKii - Delulu prod.ganior Mimoz"
    },
    {
        id: 6,
        videourl: "https://www.tiktok.com/@thuxgn/video/7612710942392012053",
        alttext: "Boyfriend rm @pfx.ash",
        caption: "Boyfriend rm @pfx.ash"
    },
    {
        id: 5,
        videourl: "https://www.tiktok.com/@thuxgn/video/7575791694747045127",
        alttext: "Heartrace",
        caption: "Heartrace"
    },
    {
        id: 4,
        videourl: "https://www.tiktok.com/@thuxgn/video/7550346551088942353",
        alttext: "KiiKii - BTG | aespa Winter",
        caption: "KiiKii - BTG | aespa Winter"
    },
    {
        id: 3,
        videourl: "https://www.tiktok.com/@thuxgn/video/7511267087113899272",
        alttext: "bixby - distance | aespa",
        caption: "bixby - distance | aespa"
    },
    {
        id: 2,
        videourl: "https://www.tiktok.com/@thuxgn/video/7524521726634429704",
        alttext: "Nova - Not Around | VALORANT",
        caption: "Nova - Not Around | VALORANT"
    },
    {
        id: 1,
        videourl: "https://www.tiktok.com/@thuxgn/video/7554389638085872904",
        alttext: "Han Sara - Tớ thích cậu | VALORANT",
        caption: "Han Sara - Tớ thích cậu | VALORANT"
    },
    {
        id: 0,
        videourl: "https://www.tiktok.com/@thuxgn/video/7460549361932520711",
        alttext: "фрози - Wait a Minute | ILLIT",
        caption: "фрози - Wait a Minute | ILLIT"
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

export default function PersonalProject() {

    return(
        <>
            <h1 className="text-left"><b><u>Personal Projects</u></b></h1>
            <ul className="grid">
                {listItems}
            </ul>
        </>
        
    );
}

