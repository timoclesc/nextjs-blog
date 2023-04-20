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
                    <>
                        <div className={styles.modalLoader}>
                            <div className={styles.loader}></div></div>
                        <img src={`/images/sweaty-selfies/${selectedImage}`} className={styles.modalImage} onClick={() => setSelectedImage('')} />
                    </>
                    :
                    <></>
            }
        </div>
    </AppContainer >
}

export default SweatySelfies;
