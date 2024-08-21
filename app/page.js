"use client";
import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Footer from '@/components/footer'
import Carousel from '@/components/Caroussel'
import { Chat } from '@/components/Chat';



export default function home(){
  return(
    <>
    <Head>
      <meta type="description" content='blabla'/>
      <title>Acceuil</title>
    </Head>
    <Header />
    <Carousel/>

    {/* ---------------------------DIVISION 2-------------------------- */}
    <div className='contener'>
        <div className='contener-second'>
            <h1>notre solution</h1>
            <p>AgroCam Marketplace est une place de marché qui met en relation Producteurs et acheteurs au Cameroun</p>
            <div className='contener-ol'>
                  <div className='contener-ol-abs'>
                   <img src="/asset/images/venn_diagram-86237fd7d36cf102e842a7e327e490137502292585d150a47faa520bc8980db1.png"/>
                  </div>


                  <div className='contener-ol-text'>
                    <p>Nous gérons les transactions de produits agricoles à travers une plateforme digitale, accompagnée de notre réseau de services partenaires. Agri Marketplace prévoit les paiements en ligne entre acheteurs et vendeurs, le contrôle qualité, et l’affrètement de bout en bout.</p>
                    <strong><p>AgroCam Marketplace n’achète pas et n’est pas courtier. Nous vous proposons de vendre facilement vos récoltes sur notre plateforme.</p></strong>
                    
                  </div>
            </div>
              <Link href="/marcher"><button>explorez le marché</button></Link>
        </div>
    </div>

    {/* -----------------------------------DIVISION 3-------------------------- */}

    {/* <div className='contener-pro'>
      <div className='contener-pro-l3'>
        <h2>pour commencer</h2>
        <p>Nous ouvrons la porte à des milliers d’acheteurs et de vendeurs certifiés. Postez votre offre en tant qu'acheteur inscrit ou créez votre offre en tant que vendeur certifié par la plateforme. A travers notre processus de certification stricte, nous garantissons qu’uniquement les utilisateurs professionnels et de confiance, ont accès à notre plateforme. Deux solutions existent pour commencer:</p>
          <div className='conterner-pro-md'>
            <div className='pro-md-l1'>
              <h3>poster une offre de vente</h3>
              <p>En tant que vendeur, vous pouvez poster des offres de produits agricoles que vous voulez vendre, et ayez accès directement à des acheteurs financièrement vérifiés. Vous pouvez également choisir une offre d’achat déjà présente et conclure votre transaction.</p>
            </div>
            <div className='pro-md-l2'>
              <h3>poster une offre d'achat</h3>
              <p>En tant qu’acheteur, vous pouvez poster des offres d’achat de produits que vous cherchez à acheter. Communiquez ce que vous cherchez sur la plateforme, et recevez rapidement les réactions de vendeurs intéressés.</p>
            </div>
          </div>
      </div>
    </div> */}

    {/* ------------------------------DIVISION 4--------------------------- */}

    <div id='service' className='contener-n4'>
        <div className='contener-pro-n4'>
            <h1>nos services</h1>
            <div className='text-n4'>
            <p>Agri Marketplace fournit les services intégrés suivants,en complément de notre réseau de services partenaires spécialisés.</p>
            </div>
            <div className="contener-image">
                <Image  src="/asset/images/Services.jpg" width={900} 
                  height={1000} /> 
            </div>
        </div>
    </div>

    <Footer/>
    </>
  )
}
