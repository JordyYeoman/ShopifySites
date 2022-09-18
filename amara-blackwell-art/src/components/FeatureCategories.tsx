import React from 'react';
import SectionDescription from './atoms/SectionDescription';
import SectionTitle from './atoms/SectionTitle';

function FeatureCategories() {
  return (
    <div>
      <div className='max-w-2xl text-center flex items-center flex-col mx-auto pt-24 pb-8'>
        <SectionTitle title={'Popular Collections'} />
        <SectionDescription
          description={
            'Maecenas commodo augue tristique sagittis vehicula. Suspendisse a accumsan felis, in varius magna. Duis tincidunt lectus non volutpat scelerisque. Duis eu sapien non elit volutpat consectetur sed at mi.'
          }
        />
      </div>
      <div className='flex h-[40rem]'>
        <div className='flex flex-col h-full w-full'>
          <div className='bg-red-200 w-full h-3/5'></div>
          <div className='bg-green-200 w-full h-2/5'></div>
        </div>
        <div className='flex flex-col h-full w-full'>
          <div className='bg-green-200 w-full h-4/6'></div>
          <div className='bg-red-200 w-full h-2/6'></div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCategories;
