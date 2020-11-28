import React from 'react';
import image1 from './images/insta.png';
import image2 from './images/fb.png';
import image3 from './images/twit.png';
import Cmnt from './comment';


const App = () => {

    return (
        <div>
            <Cmnt name='Pooja Kushwah' time='07:00 PM' img = {image1} comment = 'Very nice' />
            <Cmnt name='Priya Kushwah' time='08:00 PM' img = {image2} comment = 'Superb' />
            <Cmnt name='Kriya Kushwah' time='09:00 PM' img = {image3} comment = 'awesoum' />
            <Cmnt name='Shriya Kushwah' time='10:00 PM' img = {image1} comment = 'It is really Good' />
        </div>
    )
}

export default App;
