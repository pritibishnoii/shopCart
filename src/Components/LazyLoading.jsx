import React, { lazy, Suspense } from 'react';
export const LazyLoading = () => {
  const ListComponent = lazy(() => {
   return  new Promise((res) => {
      setTimeout(() => {
        res(import("./List"))
      }, 3000)

    })
    
  })
  const AcordianList = lazy(()=>{
    return new Promise((res)=>{
      setTimeout(()=>{
        res(import("./Acordian"))
      },5000)
    })
  })
 


  return (
    <div>
      <h1>preview</h1>

      <Suspense fallback={<h2>Loading.......</h2>}>
        <AcordianList/>
        <ListComponent />
      </Suspense>
    </div>
  );
};
