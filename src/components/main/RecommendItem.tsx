'use client';

import { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa6';
import { FaHeart } from 'react-icons/fa6';

import Tag from '../common-components/tag';

import clsx from 'clsx';
import Image from 'next/image';

export type RecommendItemProps = {
  title: string;
  location: string;
  maxParticipants: number;
  currentParticipants: number;
  time: string;
  img: string;
  isLiked: boolean;
  className?: string;
  personalities: string[];
};

export default function RecommendItem(props: RecommendItemProps) {
  const {
    title,
    personalities,
    location,
    maxParticipants,
    currentParticipants,
    time,
    img,
    isLiked,
    className,
  } = props;

  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className={clsx('w-full min-w-[282px]', className)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={img}
        height={380}
        width={380}
        alt=""
        className="cursor-pointer object-cover rounded-[20px] w-full h-[380px]"
      />

      <div className="mt-[14px]">
        <div className="flex items-center justify-between mb-[12px]">
          <div className="flex gap-2">
            {personalities.map((item, idx) => (
              <Tag color="orange" text={item} key={idx} />
            ))}
          </div>

          {isLiked ? (
            <FaHeart
              width={25}
              height={25}
              className="cursor-pointer text-primary-orange5"
            />
          ) : (
            <FaRegHeart
              width={25}
              height={25}
              className="cursor-pointer text-primary-orange5"
            />
          )}
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-[9px]">
            <span className="text-gray-11 text-body2 cursor-pointer">
              {title}
            </span>
            <span className="text-gray-07 text-h5">{location}</span>
          </div>

          {hover && (
            <div className="text-gray-11 text-h5">
              참여 인원: {currentParticipants}/{maxParticipants}
            </div>
          )}
        </div>

        <div className="inline-flex max-h-[35px] mt-[20px] bg-gray-chip rounded-[20px] px-5 py-[10px] items-center text-center">
          {time}
        </div>
      </div>
    </div>
  );
}
