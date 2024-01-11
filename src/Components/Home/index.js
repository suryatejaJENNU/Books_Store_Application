import { Component } from "react";

import { Link } from  "react-router-dom";

import Header from "../Header";

import './index.css'

class Home extends Component {
    render() {
        return (
            <>
            <Header/>
            <div className="Home-container">
                <h1 className="books-store">Books Store</h1>
                <p className="books-store-discription">
                Dive into the vibrant tapestry of India's literary landscape with "Echoes of the Sari.
                " This anthology of short stories weaves a mesmerizing narrative that traverses the timeless traditions,
                 the pulse of modernity, and the heartbeat of diverse cultures. From the ancient mystique of Varanasi to the bustling streets of Mumbai,
                  each story unfolds like a kaleidoscope, revealing the myriad hues of India's soul.
                Explore the intricate dance between tradition and change, love and loss, as master storytellers
                 draw inspiration from the rich legacy of classical epics and the tumultuous realities of contemporary life. 
                 In "Echoes of the Sari," every page is a journey through the heartlands of the subcontinent, where characters grapple with destiny,
                  question societal norms, and celebrate the extraordinary resilience of the human spirit.
                From the philosophical musings of an old scholar on the ghats of the Ganges to the bustling 
                bazaars echoing with the voices of forgotten dreams, this collection captures the essence of India in its myriad forms.
                 Immerse yourself in the lyrical prose, poignant tales, and the kaleidoscopic emotions that define the literary treasures emerging from the subcontinent. "Echoes of the Sari" invites you to witness the echoes of India, resonating across the ages, beckoning readers to embark on a literary odyssey unlike any other.
                </p>
                <Link to = "/books">
                <button type = "button" className="explore-more">
                    Explore more
                </button>
                </Link>
            </div>
            </>
         
        )
    }
}

export default Home 