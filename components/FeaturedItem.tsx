import Image from 'next/image'
import React, { FC } from 'react'
import styles from '../styles/Featured.module.scss';

interface IFeaturedItem {
    title: string,
    src: string,
}

export const FeaturedItem:FC<IFeaturedItem> = ({title, src}) => {
  return (
    <div className={styles.featured__items__item}>
        <Image width={300} height={200}         layout="fill"
        objectFit="cover" alt={title} src={src}/>
        <h4>{title}</h4>
    </div>
  )
}
