import { Landing } from '../components/landing/landing';
import { Work } from '../components/work/work';
import { Contact } from '../components/Contact/Contact';
import { Skills } from '../components/skills/skills';

export default function Home() {
  return (
    <>
      <Landing />
      <Skills />
      <Work />
      <Contact />
    </>
  )
}