import { useRef } from "react";

export default function ScrollTo() {

    const scrollTo = useRef(null);
    const handleClick = () => {
      scrollTo.current?.scrollIntoView({behavior: 'smooth'});
        
    }
  return (
    <div ref={scrollTo}>

        
    </div>
  )
}
