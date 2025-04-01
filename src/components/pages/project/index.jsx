import Container from '@/components/ui/container';
import Image from 'next/image';
import { useState } from 'react';
import AboutUs from './ui/about-us';
import { useRouter } from 'next/router';

export default function ProductPage() {
  const [image, setImage] = useState('/a.png');
  const router = useRouter();

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;

    if (mouseX <= 400) {
      setImage('/a-hover.png');
    } else {
      setImage('/a.png');
    }
  };

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;

    if (mouseX <= 400) {
      router.push('/project-one');
    } else {
    }
  }

  return (
    <>
      <div className="w-full">
        <div
          className="relative w-full max-w-[1414px] mx-auto pt-[182px] mb-[62px]"
          style={{ paddingLeft: '50px' }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setImage('/a.png')}
          onClick={handleClick}
        >
          <Image
            className="w-full cursor-pointer"
            src={image}
            width={1414}
            height={811}
          />
        </div>
      </div>
      <Container>
        <AboutUs />
      </Container>
    </>
  );
}
