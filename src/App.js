import HeaderBlock from './components/HeaderBlock';
import LayoutBlock from './components/LayoutBlock';
import FooterBlock from './components/FooterBlock';
import Image from './assets/bg3.jpg'

function App() {
  return (
    <>
      <HeaderBlock title="This is title" desc="This is Description!" />
      <LayoutBlock
        title="This is title"
        desc="This is Description!"
        urlBg={Image}
      />
      <LayoutBlock
        title="This is title"
        desc="This is Description!"
      />
      <LayoutBlock
        title="This is title"
        desc="This is Description!"
        urlBg={Image}
      />
      <FooterBlock />
    </>
  );
}

export default App;
