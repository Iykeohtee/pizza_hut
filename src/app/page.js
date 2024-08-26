import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HomeMenu from "@/components/HomeMenu";
import SectionHeaders from "@/components/SectionHeaders";

export default function Home() {
  return (
    <>
     <Header/>
     <Hero/>
     <HomeMenu/>
     <section className="my-16">
       <SectionHeaders  
        subHeader={"Our Story"}
        mainHeader={"About us"}   
       />

       <div className="flex flex-col gap-6 max-w-2xl mx-auto text-gray-500 mt-4 text-center">

       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates sunt animi maxime? 
        Illo ex minus enim voluptates possimus inventore quas natus aspernatur saepe iusto numquam fuga, quod 
        sapiente eos! Voluptatum incidunt quam dignissimos ipsa.     
       </p>

       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates sunt animi maxime? 
        Illo ex minus enim voluptates possimus inventore quas natus aspernatur saepe iusto numquam fuga, quod 
        sapiente eos! Voluptatum incidunt quam dignissimos ipsa.     
       </p>

       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptates sunt animi maxime? 
        Illo ex minus enim voluptates possimus inventore quas natus.    
       </p>
       </div>

     </section>

     <section>
      <SectionHeaders
       subHeader={"Don't hesitate"}
       mainHeader={"Contact us"}  
      />
     </section>
    </>
  );
}
