import React from "react";
import NFTComponent from "../Components/Home/NFTComponent";
import Logo from "../Components/Home/LogoSlider/Logo";
import NfthubCollectionList from "../Components/Home/Collection/NfthubCollectionList";
import ChooseList from "../Components/Home/Choose/ChooseList";
import WorkCard from "../Components/Home/Works/WorkCard";
import NeverMiss from "../Components/Home/Sub/NeverMiss";
import RoadmapList from "../Components/Home/Roadmap/RoadmapList";
import MeetList from "../Components/Home/MeetArtists/MeetList";
import Faq from "../Components/Home/FAQ/Faq";
import NFTMintingComponent from "../Components/Home/NFTMintingComponent";
import StatisticsComponentList from "../Components/Home/StatisticsComponentList";

function Home() {
  return (
    <>
      <NFTComponent />
      <Logo />
      <NfthubCollectionList />
      <ChooseList />
      <StatisticsComponentList />
      <WorkCard
        h="How it"
        h2="Works!"
        src="https://www.mtpelerin.com/images/walletconnect-card-image.jpg"
        title="01.Setup and connect your wallet."
        desc=" Use Trust Wallet, Metamask or any wallet to connect to multiple chains
           in the app. Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Metamask or any wallet ipsam temporibus."
      />
      <WorkCard
        src="https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/deliberation-mario-sanchez-nevado.jpg"
        title="02.Create your own digital artwork."
        desc=" Use Trust Wallet, Metamask or any wallet to connect to multiple chains
           in the app. Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Metamask or any wallet ipsam temporibus."
      />
      <WorkCard
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyd2wQ33yPUYCqp-asu1Ep-TJfRVXgcZMH0g&s"
        title="03.Choose a platform to sell your NFT ."
        desc=" Use Trust Wallet, Metamask or any wallet to connect to multiple chains
           in the app. Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Metamask or any wallet ipsam temporibus."
      />
      <NeverMiss />
      <RoadmapList />
      <MeetList />
      <Faq />
      <NFTMintingComponent />
    </>
  );
}

export default Home;
