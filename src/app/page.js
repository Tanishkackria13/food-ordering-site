import { HomeMenu } from "@/components/layout/HomeMenu";
import SectionHeader from "@/components/layout/SectionHeader";
import { Header } from "@/components/layout/header";
import { Hero } from "@/components/layout/hero";
import Link from "next/link";
import React from "react";

export default function Home() {
  const year=new Date().getFullYear()
  return (
    <div>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeader
          subHeader={'our story'}
          mainHeader={'about us'}
        />
        <div className="text-grb max-w-md mx-auto mt-4 flex-col gap-4">
          <p className="mt-4">
            At [Store Name], we take pride in every aspect of our pizzas. From hand-stretched dough made fresh daily to our signature sauce bursting with flavor, each pizza is a masterpiece crafted with care and dedication. Our toppings are carefully selected to ensure the perfect balance of taste and quality, whether you're craving classic pepperoni or exploring our gourmet specialties.</p>
          <p className="mt-4">But our commitment to excellence goes beyond our pizzas. We believe in creating memorable dining experiences for our customers, whether you're dining in with family and friends or enjoying a cozy night at home. Our friendly staff is here to welcome you with a smile and ensure that every visit leaves you satisfied and eager to come back for more.</p>
          <p className="mt-4">As a locally-owned and operated business, we're deeply rooted in our community, and we're grateful for the opportunity to serve you. Thank you for choosing [Store Name] for your pizza cravings. We look forward to sharing our passion for pizza with you and making every slice a delicious delight!</p>
        </div>
      </section>
      <section className="text-center my-8">
        <SectionHeader
          subHeader={'Don\'t hesitate'}
          mainHeader={'contact us'}
        />
        <div className="mt-8">
          <a className="text-4xl underline text-grb" href="tel:+917987913123">+91 79889 13123</a>
        </div>
      </section>
      <footer className="border-t p-8 text-center text-grb mt-16">
&copy; {year} All Right Reserved
      </footer>
    </div>
  );
}
