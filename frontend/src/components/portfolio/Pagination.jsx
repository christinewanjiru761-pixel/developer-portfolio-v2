import React, {useState} from 'react'
import Portfolio from './Portfolio'
import './pagination.css'
import Tilt from 'react-tilt'
function Pagination({projects}) {
    const [startIndex, setStartIndex] = useState(0);
    const [lastIndex, setLastIndex] = useState(2);
    const [current, setCurrent] =useState({
        loading: true,
        posts: null,
    })

    if(projects && current.loading === true){
        setCurrent({loading: false, posts: projects.slice(startIndex , lastIndex)})
    }

    const handleClickScroll = () => {
        const element = document.getElementById('section-1');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const nextPage = () => {
        setCurrent({loading:true})
        if(lastIndex < projects.length) {
            setStartIndex( startIndex + 2 )
            setLastIndex( lastIndex + 2 )
        } 
        if(lastIndex + 1 === projects.length) {
            setStartIndex( startIndex + 2 )
            setLastIndex( lastIndex + 1 )
        }
        handleClickScroll()
    }
    
    const lastPage = () => {
        setCurrent({loading:true})
        if(startIndex !== 0 ) {
            if( lastIndex - startIndex === 1) {
            setStartIndex( startIndex - 2 )
            setLastIndex(lastIndex - 1 )
            } else {
            setStartIndex( startIndex - 2 )
            setLastIndex( lastIndex - 2 )     
            }      
        }
        handleClickScroll()
        
    }


    return (
        <div className='pagination__container'>
            <div  id='section-1'>
                {current.loading ? <h2>Loading...</h2> : <Portfolio projects={current.posts}/>}
            </div>
            <div className='pagination__item__container'>
                <div className='pagination__btn'>
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                >
                    <p className='actual__btn' onClick={lastPage}>previous</p>
                </Tilt>
                </div>
                <div className='pagination__btn'>
                <Tilt
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                >
                    <p className='actual__btn' onClick={nextPage} >next</p>
                </Tilt>

                </div>
            </div>
        </div>
    )
}

export default Pagination