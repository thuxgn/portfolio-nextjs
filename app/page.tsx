import Header from '@/components/Header'
import Work from '@/components/Work'
import PersonalProject from '@/components/PersonalProject';
import AboutMe from '@/components/AboutMe'
import Contact from '@/components/ContactForm/Contact';


export default function Home() {
  return (
    <>
      <Header />
      <Work />
      <PersonalProject />
      <hr />
      <AboutMe />
      <hr />
      <Contact />
    </>
  );
}
