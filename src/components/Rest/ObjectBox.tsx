import useBoolean from '@/Hooks/useBoolean';
import React from 'react'

const start = "{";
const end = "}";
//
export default function ObjectBox() {
    const [showAnnotaion, onToogleAnnotation] = useBoolean(true);

    return (
        
        <div className='bg-inside w-white absolute -right-64'>
          <div className='absolute right-1 flex items-center gap-2 p-1 '>
            <label
              htmlFor='annotaion'
              className='ml-2 text-sm font-medium  text-gray-300'
            >
              주석 숨기기
            </label>
            <input
              className='w-4 h-4 text-blue-600  rounded  focus:ring-blue-600 ring-offset-gray-800 focus:ring-2 bg-gray-700 border-gray-600'
              type='checkbox'
              name='annotaion'
              id=''
              onChange={() => {
                onToogleAnnotation();
              }}
            />
          </div>
          <div className='p-4'>
            <code>
              {start}
              <p className='pl-4'>
                <span className='text-greenColor'>target_id_type</span> :
                user_id
              </p>
              {showAnnotaion && (
                <p className='pl-4 text-[#45894d] text-xs'>
                  // 회원번호 종류, user_id로 고정
                </p>
              )}
              {end}
            </code>
            <br />
            <code>
              {start}
              <p className='pl-4'>
                <span className='text-greenColor'>id</span>: 684535
              </p>
              {showAnnotaion && (
                <p className='pl-4 text-[#45894d] text-xs'>
                  // 연결 끊기에 성공한 사용자의 회원번호
                </p>
              )}
              {end}
            </code>
          </div>
        </div>
    
  )
}
