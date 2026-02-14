import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css'
import Home from './pages/home/Home.tsx';
import McardCont from './components/McardCont.tsx';
import SongCard from './components/SongCard.tsx';
import SignIn from './pages/signin/SignIn.tsx';
import SignUp from './pages/signup/SignUp.tsx';
import Playlist from './pages/playlist/Playlist.tsx';
import Test from './components/test.tsx';
import MusicPlayer from './components/MusicPlayer.tsx';
import { MusicContext } from './components/MusiContext.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MusicContext value={new Audio()}>
    <BrowserRouter>
      <Routes>

          <Route element={<Home />}>
            <Route path="/" element={<McardCont />} />
            <Route path="/Song" element={<SongCard />} />
          </Route>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/msc" element={<Test />} />
          <Route path="/tsc" element={<MusicPlayer currentTime={58} duration={69} />} />
          <Route path="/playlist" element={<Playlist />} />

      </Routes>
    </BrowserRouter>
      </MusicContext>
  </StrictMode>,
)
