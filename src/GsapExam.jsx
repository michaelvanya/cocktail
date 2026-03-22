import { useState , useRef} from 'react'
import './App.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'


  gsap.registerPlugin(ScrollTrigger)
function GsapExam() {

  const scrollRef = useRef()

  const timeline = gsap.timeline({
    repeat:-1,
    yoyo:true,
    repeatDelay:1
  })

  // useGSAP(()=>{
  //   gsap.to('#blue-box', {
  //     x:250,
  //     repeat:-1,
  //     yoyo: true,
  //     rotation:360,
  //     ease: 'bounce.in',
  //     duration:2
  //   })


  //   gsap.from('#blue-box2',{
  //     x:250,
  //     repeat:-1,
  //     yoyo: true,
  //     rotation:360,
  //     ease: 'power1.inOut',
  //     duration:2
  //   })


  //    gsap.fromTo('#blue-box3',{
  //     x:250,
  //     repeat:-1,
  //     yoyo: true,
  //     rotation:0,
  //     borderRadius:'2%',
  //     duration:2
  //   },
  // { x:750,
  //     repeat:-1,
  //     yoyo: true,
  //     rotation:360,
  //     ease: 'bounce.out',
  //     duration:2,
  //      borderRadius:"100%"

  // })
  // },[])
useGSAP(()=>{

  const boxes = gsap.utils.toArray(scrollRef.current.children)

  boxes.forEach(b =>{
    gsap.to(b,{
     x:250,
      rotation:360,
      ease: 'power1.inOut',
      scale:1.5,
      borderRadius: '100px',
      scrollTrigger:{
        trigger:b,
        start:'bottom bottom',
        end: 'top 5%',
        scrub:true

      },
      stagger:.2,
      
  },{scope: scrollRef})
  })
  timeline.to('#blue-box4', {
     x:250,
      rotation:360,
      ease: 'power1.inOut',
      duration:2
  })

   timeline.to('#blue-box4', {
      x:400,
      scale:1.2,
    rotation:360,
    duration:2,
    ease: 'back.inOut',
  })


  timeline.to('#blue-box4', {
    
      x:500,
      scale:1,
      rotation:360,
      ease: 'back.inOut',
      duration:2
  })

  gsap.to('.stagger-box',{
    y:250,
    repeat:-1,
    yoyo:true,
    duration:2,
    stagger:.2,
     repeatDelay:1
  })
 gsap.to('#text',{
    y:0,
    opacity:1, 
    ease: 'back.inOut',
  })

   gsap.fromTo('.para',{
    y:20,
    opacity:0, 
    ease: 'back.inOut',
  },
    {
    y:0,
    opacity:1, 
    ease: 'back.inOut',
    stagger:.1
    }

)
},[])

  return (
    <div className='mt-20'>
      <h1 id='text' className='opacity-0 translate-y-10 color-white para' >Gsap Text</h1>

    <p className='mt-5 text-grey-500 para'>
      We can use the same methold like <code>gsap.to()</code><code>gsap.from()</code><code>gsap.fromTO()</code><code>gsap.timeline()</code> to animate text

      <br/>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, saepe, nisi consequuntur possimus magni, totam animi velit quaerat incidunt nam facere quia asperiores impedit distinctio exercitationem odio itaque provident libero.
    </p>
      <div className="">
    
    <button className="space-y-10 bg-blue-500 w-20 h-10" onClick={() => {
  timeline.paused() ? timeline.play() : timeline.pause();
}}>
  Play/Pause
</button>

     
      {/* <div id="blue-box" className='w-20 h-20 bg-blue-500 rounded-lg'></div>
      <div id="blue-box2" className='w-20 h-20 bg-blue-500 rounded-lg'></div>
      <div id="blue-box3" className='w-20 h-20 bg-blue-500 '></div> */}
      <div id="blue-box4" className='w-20 h-20 bg-yellow-500  rounded-lg'></div>

    </div>



    <div className="mt-10">
      <div className="flex gap-5">
        <div className='w-10 h-20 bg-indigo-100 rounded-lg stagger-box'></div>
        <div className='w-10 h-20 bg-indigo-200 rounded-lg stagger-box'></div>
        <div className='w-10 h-20 bg-indigo-300 rounded-lg stagger-box'></div>
        <div className='w-10 h-20 bg-indigo-400 rounded-lg stagger-box'></div>
        <div className='w-10 h-20 bg-indigo-500 rounded-lg stagger-box'></div>
        <div className='w-10 h-20 bg-indigo-600 rounded-lg stagger-box'></div>
        <div className='w-10 h-20 bg-indigo-700 rounded-lg stagger-box'></div>
      </div>
    </div>


    <div className="mt-20 w-full h-screen" ref={scrollRef}>
       <div className='scroll-box w-20 h-20 bg-orange-100 rounded-lg '></div>
       <div className='scroll-box w-20 h-20 bg-pink-100 rounded-lg '></div>
    </div>
     
    </div>
  )
}

export default GsapExam
