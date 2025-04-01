import Contianer from '@/components/ui/container'
import Image from 'next/image'
import {useState} from 'react'
import AboutUs from '../ui/about-us'
import { Logoicos } from '../ui/icon'
import { useRouter } from 'next/router';
export default function ProductOnePage() {
  const [opacity, setOpositi] = useState(0)
  const router = useRouter()
  return (
    <>
        <div className='w-full relative'>
        <Image  
            onMouseMove={(e) => {
              setOpositi(0)
              }}
                className='w-full mb-[41px]'
                src={'/Etajlar.jpg'}
                width={1414} 
                height={811 }
        />
        
        <div className='absolute  top-0  left-0  w-full ' onClick={() => {
          if (opacity) {
            router.push("/project-single")
          }
        }}  onMouseMove={(e) => {
          if (e?.pageX > 750 && e?.pageX < 1400) {
            if (e?.pageY > 200 && e?.pageY < 230) {
            setOpositi(1)
            }else if (e?.pageY > 230 && e?.pageY < 260) {
            setOpositi(2)
            } else if (e?.pageY > 260 && e?.pageY < 290) {
            setOpositi(3)
            }
             else if (e?.pageY > 290 && e?.pageY < 320) {
            setOpositi(4)
            } else if (e?.pageY > 320 && e?.pageY < 350) {
            setOpositi(5)
            } else if (e?.pageY > 350 && e?.pageY < 380) {
            setOpositi(6)
            } else  if (e?.pageY > 380 && e?.pageY < 410) {
            setOpositi(7)
            } else if (e?.pageY > 410 && e?.pageY < 440) {
            setOpositi(8)
            } else if (e?.pageY > 440 && e?.pageY < 470) {
            setOpositi(9)
            } else if (e?.pageY > 470 && e?.pageY < 500) {
            setOpositi(10)
            } else if (e?.pageY > 500 && e?.pageY < 530) {
            setOpositi(11)
            }else  if (e?.pageY > 530 && e?.pageY < 560) {
            setOpositi(12)
            } else if (e?.pageY > 560 && e?.pageY < 590) {
            setOpositi(13)
            } else if (e?.pageY > 590 && e?.pageY < 610) {
            setOpositi(14)
            }else if (e?.pageY > 610 && e?.pageY < 640) {
            setOpositi(15)
            }else if (e?.pageY > 640 && e?.pageY < 670) {
            setOpositi(16)
            }else if (e?.pageY > 670 && e?.pageY < 700) {
            setOpositi(17)
            }else if (e?.pageY > 700 && e?.pageY < 730) {
            setOpositi(18)
            }else if (e?.pageY > 730 && e?.pageY < 760) {
            setOpositi(19)
            }else if (e?.pageY > 790 && e?.pageY < 820) {
            setOpositi(20)
            }else{
              setOpositi(0)
            }
            
          } else {
            
          setOpositi(0)
          }
          }}>
          <Logoicos opacity={opacity}  />
        </div>
        </div>
          <Contianer>
              <AboutUs/>
          </Contianer>
    </>
  )
}
