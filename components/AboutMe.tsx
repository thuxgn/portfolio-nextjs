import Link from "next/link";

export default function PersonalProject() {

    return(
        <>
        <div className="text-left text-[18px]/[1.6] font-[Arial, sans-serif] ">
        <h1><b><u>About me</u></b></h1>
        Hi, I'm Thuc. I do editing
        <br /><br />
        That's all
        <br /><br />
        <b>Contact: </b><Link target="_blank" className="inherit underline" href="mailto:thuxgn.bussiness@gmail.com">Here</Link>
        </div>
        </>
    );
}
