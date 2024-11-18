import './App.css'

import burgerMenu from './assets/burger-menu.svg';
import YTLogoWithText from './assets/youtube-logo-text.png';
import search from './assets/search.svg';
import mic from './assets/mic.svg';
import plus from './assets/plus.svg';
import bell from './assets/bell.svg';
import dp from './assets/profile_photo.svg';

// Thumbnails
import thumbnailOne from './assets/thumbnails/1.png'
import thumbnailTwo from './assets/thumbnails/2.png'
import thumbnailThree from './assets/thumbnails/3.png'
import thumbnailFour from './assets/thumbnails/4.png'
import thumbnailFive from './assets/thumbnails/5.png'
import thumbnailSix from './assets/thumbnails/6.png'
import thumbnailSeven from './assets/thumbnails/7.png'
import thumbnailEight from './assets/thumbnails/8.png'
import thumbnailNine from './assets/thumbnails/9.png'

// Channel DPs
import profileOne from './assets/channelProfiles/1.jpg'
import profileTwo from './assets/channelProfiles/2.jpg'
import profileThree from './assets/channelProfiles/3.jpg'
import profileFour from './assets/channelProfiles/4.jpg'
import profileFive from './assets/channelProfiles/5.jpg'
import profileSix from './assets/channelProfiles/6.jpg'
import profileSeven from './assets/channelProfiles/7.jpg'
import profileEight from './assets/channelProfiles/8.jpg'
import profileNine from './assets/channelProfiles/9.jpg'


// Side Bar
import homeIcon from './assets/home.svg';
import shortsIcon from './assets/ytshorts.png'
import subscriptionIcon from './assets/subscriptions.svg'
import historyIcon from './assets/history.svg'
import playlistsIcon from './assets/playlist.svg'
import myVideosIcon from './assets/my-videos.svg'
import watchLaterIcon from './assets/watch-later.svg'
import likedVideosIcon from './assets/like.svg'
import yourClipsIcon from './assets/scissors.svg'

const tags = [
  {id: 1, content: 'All'},
  {id: 2, content: 'Music'},
  {id: 3, content: 'JavaScript'},
  {id: 4, content: 'Mixes'},
  {id: 5, content: 'Gaming'},
  {id: 6, content: 'Rocket League Championship ...'},
  {id: 7, content: 'Tamil Cinema'},
  {id: 8, content: 'Manga'},
  {id: 9, content: 'Reaction videos'},
  {id: 10, content: 'Algorithms'},
  {id: 11, content: 'Live'},
]

const thumbnails = [
  { id: 1, source: thumbnailOne, dp: profileOne, channelName: "ByteGrad", details:  "1M views", time: "1 year ago", title: "All 12 useState & useEffect Mistakes Junior React Developers Still Make in 2024" },
  { id: 2, source: thumbnailTwo, dp: profileTwo, channelName: "Learn with Jason", details:  "91K views", time: "1 month ago", title: "Build an app to help the local food scene -- Web Dev Challenge S1E5" },
  { id: 3, source: thumbnailThree, dp: profileThree, channelName: "ByteMonk", details:  "98K views", time: "2 weeks ago", title: "How UPI Works: Real-Time Payments in India | Paypal | Zelle" },
  { id: 4, source: thumbnailFour, dp: profileFour, channelName: "ThePrimeTime", details:  "727K views", time: "11 months ago", title: "I Solved 1583 Leetcode Questions Here is What I Learned" },
  { id: 5, source: thumbnailFive, dp: profileFive, channelName: "Mr.PiwPiw", details:  "266K views", time: "3 months ago", title: "Every Programming Language Explained in 5 minutes" },
  { id: 6, source: thumbnailSix, dp: profileSix, channelName: "Artem Kirsanov", details:  "760K views", time: "1 year ago", title: "How I make science animations" },
  { id: 7, source: thumbnailSeven, dp: profileSeven, channelName: "Learn Basics", details:  "226K views", time: "4 months ago", title: "Ultimate Tailwind CSS Tutorial" },
  { id: 8, source: thumbnailEight, dp: profileEight, channelName: "JJ codes", details:  "727K views", time: "11 months ago", title: "Build a Mindblowing 3D Portfolio Website" },
  { id: 9, source: thumbnailNine, dp: profileNine, channelName: "Boipink", details:  "1.3M views", time: "2 year ago", title: "JavaScript Framework Tier List" },
];

function App() {
  return(
    <>
      <section>
        <nav className='grid grid-cols-4 mt-2 px-4'>
          <div className='col-span-1 flex items-center gap-5'>
            <img className='w-12 cursor-pointer rounded-full p-2 hover:bg-stone-100' src={burgerMenu} alt="" />
            <img className='w-24 cursor-pointer' src={YTLogoWithText} alt="" />
          </div>

          <div className='flex gap-3 col-span-2 px-10'>
            <div className='flex w-full'>
              <input className='flex-grow pl-3 ps-4 h-10 border border-gray-300 rounded-s-3xl' placeholder='Search' type="input" />
              <img className='px-4 border h-10 w-14 border-gray-300 cursor-pointer bg-stone-100 rounded-e-3xl' src={search} alt="" />
            </div>


            <div className="flex justify-center w-10 h-10 rounded-full bg-stone-100 cursor-pointer hover:bg-stone-200">
              <img className='w-5' src={mic} alt="" />
            </div>
          </div>

          <div className='flex justify-end gap-8 col-span-1 px-3 h-10 '>
            <div className="flex items-center justify-center gap-3 px-4 py-2 rounded-full bg-stone-100 cursor-pointer hover:bg-stone-200">
              <img className='w-5 ' src={plus} alt="" />
              <p>Create</p>
            </div>

            <img className='w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-stone-200' src={bell} alt="" />

            <img src={dp} className='w-9 cursor-pointer' alt="" />
          </div>
        </nav>
      </section>
      
      <section>
        <div className='grid grid-cols-12 mt-3'>
          {/* Sidebar */}
          <aside className='col-span-2 pt-3 h-screen overflow-y-scroll'>
            {[
              {id: 1, source: homeIcon, content: "Home"},
              {id: 2, source: shortsIcon, content: "Shorts"},
              {id: 3, source: subscriptionIcon, content: "Subscriptions"},
            ].map((item) => (
              <div key={item.id} className='mx-3 px-3 py-2 flex gap-8 cursor-pointer hover:bg-stone-200 rounded-md'>
                <img className='w-5' src={item.source} alt="" />
                <p className='text-base font-medium'>{item.content}</p>
              </div>
            ))}

            <hr className='my-5 mx-5'/>
            <div className='mx-3 px-3 py-2 cursor-pointer hover:bg-stone-200 rounded-md'>
              <p>You &nbsp; &nbsp; &rarr;</p>
            </div>

            {[
              {id: 1, source: historyIcon, content: "History"},
              {id: 2, source: playlistsIcon, content: "Playlists"},
              {id: 3, source: myVideosIcon, content: "Your Videos"},
              {id: 4, source: watchLaterIcon, content: "Watch Later"},
              {id: 5, source: likedVideosIcon, content: "Liked videos"},
              {id: 6, source: yourClipsIcon, content: "Your clips"},
            ].map((item) => (
              <div key={item.id} className='mx-3 px-3 py-2 flex gap-8 cursor-pointer hover:bg-stone-200 rounded-md'>
                <img className='w-5' src={item.source} alt="" />
                <p className='text-base font-medium'>{item.content}</p>
              </div>
            ))}
            <hr className='my-5 mx-5'/>
          </aside>


          <main className='col-span-10 px-10 h-screen overflow-y-scroll'>            
            {/* Tags */}
            <div className='flex gap-3 flex-grow'>
              {tags.map((item) => (
                <p key={item.id} className='bg-stone-100 px-3 py-1 rounded-md cursor-pointer focus:bg-black max-h-8 max-w-64 text-nowrap'>{item.content}</p>
              ))}
            </div>

            {/* Video Thumbnails */}
            <div className='grid grid-cols-3 gap-4 mt-8'>
                {thumbnails.map((item) => (
                  <div key={item.id} className="flex flex-col gap-2 mb-6">
                    <img src={item.source} alt={item.title} className="w-full rounded-lg cursor-pointer" />
                    <div className="flex items-center gap-2">
                      <img src={item.dp} alt="Channel Profile" className="w-10 h-10 rounded-full" />
                      <p className="text-base font-medium">{item.title}</p>
                    </div>
                    <div className='pl-12'>
                      <p className='text-gray-500 text-sm'>{item.channelName}</p>
                      <p className='text-gray-500 text-sm'>{item.details} &bull; {item.time}</p>
                    </div>
                  </div>
                ))}
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default App
