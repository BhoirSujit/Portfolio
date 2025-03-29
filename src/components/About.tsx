import CodeEditor from "./ui/CodeEditor";

export default function About() {
  return (
    <section id="about" className="mx-0 lg:mx-20 lg:py-0 xl:mx-32 xl:py-10">
      <div className="grid grid-cols-1 justify-center   xl:grid-cols-2">
        <div className="p-8 order-2 xl:order-1 flex  h-full w-full">

          {/* console code  */}
          <CodeEditor/>
         
        </div>
        <div className="p-8 flex order-1 flex-col xl:order-2  w-full">
         
          <h2 className="text-xl font-bold border-l-8 pl-4 border-black  mb-4">About Me</h2>
          <div>
            <p>
            Hello, my name is Sujit Bhoir. I am originally from Alibag and am currently living in Mumbai. I recently graduated with a bachelor's degree in Computer Science from JSM College in Alibag, achieving a grade of 9.23. My main strengths are my problem-solving skills and logical thinking abilities.
           
            </p>
            <p>
            In my free time, I enjoy working on personal coding projects and keeping up with the latest advancements in technology. I am passionate about continuous learning and am always looking for new challenges to improve my skills.
     
            </p>
                 </div>
        </div>
      </div>
      
    </section>
  );
}
