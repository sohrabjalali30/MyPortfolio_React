import MainLayout from '../layouts/MainLayout'
import {Saidbar} from '../components/saidbar';
import PagesContainer from './PagesContainer';
import { useEffect, useState } from 'react';
import Page from '../components/pages/Page';
import { useMediaQuery } from '@mui/material';
import SaidbarContainer from './SaidbarContainer';
import MainContext from '../context'
import DrawerActionButten from '../components/drawer/DrawerActionButten';
import {Home , About,Resume,SampelsWork,Contact} from '../components/pages';
import { useTheme } from '@mui/material/styles';

function App() {
  const [pageNumber,setPageNumber] = useState(0)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme()
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"))
  useEffect(()=>{
    if (isMdUp){

      setDrawerOpen(false)
    }
  },[isMdUp])

  const handlePageNumber = (event , newValue)=>{
    setPageNumber(newValue);
  }
 
  
  return (
<MainContext.Provider
 value={{
  pageNumber ,
   handlePageNumber,
    drawerOpen,
    setDrawerOpen
    }}>

    <MainLayout>
      <SaidbarContainer>
       <Saidbar />
      </SaidbarContainer>
          <DrawerActionButten/>
     <PagesContainer>
      
      <Page pageNumber={pageNumber} index={0} >
        <Home/>
      </Page>
      <Page pageNumber={pageNumber} index={1} >
       <About/>
      </Page>
      <Page pageNumber={pageNumber} index={2} >
        <Resume/>
      </Page>
      <Page pageNumber={pageNumber} index={3} >
       <SampelsWork/>
      </Page>
       <Page pageNumber={pageNumber} index={4} >
        <Contact/>
      </Page>
     </PagesContainer>
    </MainLayout>
   </MainContext.Provider>
  );
}

export default App;
