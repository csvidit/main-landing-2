import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MainContainer from "@/components/MainContainer";
import MainContent from "@/components/MainContent";
import Title from "@/components/Title";
import Logo from "@/components/Logo";
import Subtitle from "@/components/Subtitle";
import Left from "@/components/Left";
import Right from "@/components/Right";
import { motion } from "framer-motion";
import Button from "@/components/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Vidit Khandelwal</title>
        <meta
          name="description"
          content="The main landing page of Vidit Khandelwal, a computer science major and economics minor from DePauw University. He is a full-stack software engineer, and writer of fiction and non-fiction."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Vidit Khandelwal" />
        <meta
          name="keywords"
          content="Vidit Khandelwal, DePauw University, DePauw, CS, computer science, author, writer, Journal, series, TGHC, scifi, science fiction, Pondering Upon"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />

        <meta property="og:title" content="Vidit Khandelwal Landing Page" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.webp" />
        <meta property="og:url" content="https://viditkhandelwal.com" />
        <meta property="og:site_name" content="Vidit Khandelwal" />
        <meta
          property="description"
          content="Vidit Khandelwal's official landing page."
        />
      </Head>
      <MainContainer>
        <MainContent>
          <Left>
            <Logo />
            <motion.div
            className="flex flex-col space-y-1 items-center lg:items-start"
              animate={{
                opacity: [0, 1],
                translateY: [80, 0],
                transition: {
                  delay: 0.8,
                  duration: 0.8,
                  type: "spring",
                },
              }}
            >
              <Subtitle>THE WORLD OF</Subtitle>
              <Title color="lime">VIDIT KHANDELWAL</Title>
            </motion.div>
          </Left>
          <Right>
            <Button href="https://github.com/csvidit" animate="false">GitHub</Button>
            <Button href="https://linkedin.com/viditkhandelwal" animate="false">LinkedIn</Button>
            <Button href="https://bio.viditkhandelwal.com" animate="false">Links</Button>
            <Button href="https://cs.viditkhandelwal.com" animate="false">CS Portfolio</Button>
            <Button href="https://acad.viditkhandelwal.com" animate="false">Papers</Button>
          </Right>
        </MainContent>
      </MainContainer>
    </>
  );
}
