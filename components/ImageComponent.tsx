import {useCallback, useMemo, useState} from 'react'
import Image from 'next/image'
import noImg from '../public/images/no-image.svg'
import { Product } from '@/interface/Products'

import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { notFound } from 'next/navigation'

interface ImageComponentProps{
    product: Product
}

const ImageComponent: React.FC<ImageComponentProps> = ({product}) => {
    const [num, setNum] = useState(0)

    const p = useMemo(()=>{
        return product!
    },[product])
    
    const imgLenght = p?.images.length
    
    const handleClick = useCallback((s:string)=>{
        if(imgLenght > 1){
            if(s === 'l'){
                if(num <= 0){
                setNum(imgLenght - 1)
                }else{
                    setNum(prev=> prev - 1)
                }
            }
            else if(s === 'r'){
                if(num >= (imgLenght - 1)){
                    setNum(0)
                }else{
                    setNum(prev=> prev + 1)
                }
            }
        }
    },[num,imgLenght])

    return (
        <div className='relative h-full w-full group'>
            <Image src={p?.images[num] || noImg} alt='product image' priority={true} width={200} height={200} className='w-full max-h-[230px] sm:max-h-[320px] object-contain'/>
            <AiOutlineLeft onClick={()=>handleClick('l')} size={50} className='absolute top-[40%] left-0 group-hover:text-gray-400 z-[10] cursor-pointer ease-in duration-300'/>
            <AiOutlineRight onClick={()=>handleClick('r')} size={50} className='absolute top-[40%] right-0 group-hover:text-gray-400 z-[10] cursor-pointer ease-in duration-300'/>
            <p className='absolute text-xl right-2 bottom-2 text-gray-500'>{(num + 1)} / {p?.images.length}</p>
        </div>
    )
}

export default ImageComponent