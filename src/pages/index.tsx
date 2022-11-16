import { Showcase } from '../components/showcase/showcase';
import { Work } from '../components/work/work';
import { Contact } from '../components/Contact/Contact';
import { Skills } from '../components/skills/skills';

export default function Home() {
  return (
    <>
      <Showcase />
      <Skills />
      <Work />
      <Contact />
    </>
  )
}