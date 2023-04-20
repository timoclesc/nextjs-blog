import Head from 'next/head';
import AppContainer from 'components/app-container';
import utilStyles from 'components/utils.module.scss';
import styles from 'components/sweaty-selfies.module.scss';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

const SweatySelfies: React.FunctionComponent = function () {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState('');
    const [imageList, setImageList] = useState([]);



    useEffect(
        () => {
            const loadImage = image => {
                return new Promise((resolve, reject) => {
                    const loadImg = new Image()
                    loadImg.src = `/images/sweaty-selfies-tn/${image}`;
                    // wait 2 seconds to simulate loading time
                    loadImg.onload = () => {
                        setTimeout(
                            () => resolve(image),
                            2000)
                    }
                    loadImg.onerror = err => reject(err)
                })
            }

            fetch('/api/sweaty-selfies').then(
                response => response.json()
            ).then(
                response => {
                    Promise.all(response.files.map(image => loadImage(image)))
                        .then(() => {
                            setIsLoading(false);
                            setImageList(response.files);
                        })
                        .catch(err => console.log("Failed to load images", err))
                }
            );




        }, []
    );

    useEffect(
        () => {
            console.log(imageList.length)

        }, [imageList]
    )

    return <AppContainer home={false} background={'white'} fullWidth={true}>
        <Head>
            <title>Sweaty Selfies | timocles.com</title>
        </Head>
        <div className={classNames(styles.container, { [styles.isLoading]: isLoading })}>
            {
                isLoading ?
                    <div><p>Loading...</p><p className={styles.loader}></p></div>
                    :
                    <> {
                        imageList.map(
                            (image) => (<button key={image} className={styles.button} onClick={() => setSelectedImage(image)}>
                                <img key={image} src={`/images/sweaty-selfies-tn/${image}`} className={styles.selfieTn} />
                            </button>)
                        )}
                    </>
            }
            {
                selectedImage ?
                    <img src={`/images/sweaty-selfies/${selectedImage}`} className={styles.modalImage} onClick={() => setSelectedImage('')} />
                    :
                    <></>
            }
        </div>
        <svg className={styles.svg}>
            <defs>
                <clipPath id="clipping">
                    <polygon points="98 153 38 185 49 118 1 70 68 61 98 1 128 61 195 70 147 118 158 185" />
                </clipPath>

                <clipPath id="clipping-with-text">
                    <polygon points="98 153 38 185 49 118 1 70 68 61 98 1 128 61 195 70 147 118 158 185" />
                    <text x="0" y="3.2em">Text</text>
                </clipPath>

                <linearGradient id="gradient" x1="0" y1="0" x2="110%" y2="0%">
                    <stop stopColor="#fff" offset="0" /><stop stopColor="#fff" offset="10%" />
                    <stop stopColor="#AAA" offset="10%" /><stop stopColor="#AAA" offset="20%" />
                    <stop stopColor="#777" offset="20%" /><stop stopColor="#777" offset="30%" />
                    <stop stopColor="#333" offset="30%" /><stop stopColor="#333" offset="40%" />
                    <stop stopColor="#000" offset="40%" /><stop stopColor="#000" offset="50%" />
                    <stop stopColor="#fff" offset="50%" /><stop stopColor="#fff" offset="60%" />
                    <stop stopColor="#AAA" offset="60%" /><stop stopColor="#AAA" offset="70%" />
                    <stop stopColor="#777" offset="70%" /><stop stopColor="#777" offset="80%" />
                    <stop stopColor="#333" offset="80%" /><stop stopColor="#333" offset="90%" />
                    <stop stopColor="#000" offset="90%" /><stop stopColor="#000" offset="100%" />
                </linearGradient>

                <mask id="masking" maskUnits="objectBoundingBox" maskContentUnits="objectBoundingBox">
                    <rect y="0" width="1" height="1" fill="url(#gradient)" />
                    <circle cx=".5" cy=".5" r=".42" fill="black" />

                    <circle cx="0" cy=".5" r=".32" fill="black" />
                    <circle cx="1" cy=".5" r=".32" fill="black" />

                    <circle cx="0" cy=".5" r=".3" fill="gray" />
                    <circle cx=".5" cy=".5" r=".4" fill="gray" />
                    <circle cx="1" cy=".5" r=".3" fill="gray" />

                    <circle cx="0" cy=".5" r=".25" fill="white" />
                    <circle cx=".5" cy=".5" r=".35" fill="white" />
                    <circle cx="1" cy=".5" r=".25" fill="white" />
                </mask>

                <pattern id="pattern"
                    patternUnits="userSpaceOnUse"
                    width="200" height="300"
                    viewBox="0 0 200 300">
                </pattern>
            </defs>
        </svg>
    </AppContainer >
}

export default SweatySelfies;
