import { useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  useEffect(() => {

    const handleScroll=()=>{

        if(window.innerHeight + document.documentElement.scrollTop >=  document.documentElement.offsetHeight - 100 ){
            callback();
        }
    }

   window.addEventListener("scroll",handleScroll)

   return () => window.removeEventListener('scroll', handleScroll);
  }, [callback]);
};

export default useInfiniteScroll;
