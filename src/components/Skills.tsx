type propsT = {
  svg: string;
  name: string;
  cat?: "frontend" | "backend" | "database";
};

const data: propsT[] = [
  {
    svg: "/java.svg",
    name: "Java",
    cat: "backend",
  },
  {
    svg: "/html.svg",
    name: "HTML",
    cat: "frontend",
  },
  {
    svg: `/css.svg`,
    name: "CSS",
    cat: "frontend",
  },
  {
    svg: `/javascript.svg`,
    name: "JavaScript",
    cat: "frontend",
  },
  {
    svg: "/typescript.svg",
    name: "TypeScript",
    cat: "frontend",
  },
  {
    svg: "/react.svg",
    name: "React",
    cat: "frontend",
  },
  {
    svg: "/sql.svg",
    name: "SQL",
    cat: "database",
  },
  {
    svg: "/mongodb.svg",
    name: "MongoDB",
    cat: "database",
  },
  {
    svg: "/nodejs.svg",
    name: "NodeJs",
    cat: "backend",
  },
  {
    svg: "/bootstrap.svg",
    name: "Bootstrap",
    cat: "frontend",
  },
  {
    svg: "/tailwind.svg",
    name: "Tailwind",
    cat: "frontend",
  },
  {
    svg: "/excel.svg",
    name: "MS Excel",
  },
  {
    svg: "/word.svg",
    name: "MS Word",
  },
];

function SkillHolder({ ...props }: propsT) {
  return (
    <>
      <div
        className="skill-item rounded-lg border items-center p-2 mx-2 flex   gap-2 
      hover:scale-[103%] duration-300 ease-in-out m-2"
      >
        <img
          className="aspect-square  p-2  w-16 h-16 "
          src={"/skills" + props.svg}
          alt=""
        />
        <div>{props.name}</div>
      </div>
    </>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="mx-0 lg:mx-20 lg:py-0 xl:mx-32 xl:py-10">
      <h2 className="ml-8 pl-4 font-bold text-lg border-l-8 border-black mt-10">
        Skills
      </h2>

      {/* <div className="slider p-10 ">
        <div className="canvas border rounded-md p-4">
          <div className=" border rounded-md m-2 ">
            <h2 className="border-b p-2">Frontend</h2>
            <div className="skills ">
              {data.map((d, i) => {
                return <>{d.cat === "frontend" ? <>
                <div className="inline-block">
                  <img className="w-12 p-1" src={"/skills"+d.svg} alt="tech" />
                </div>
                </> : ""}</>;
              })}
            </div>
          </div>

          <div className="border rounded-md  m-2">
            <h2 className="border-b p-2">Backend</h2>
            <div className="skills ">
              {data.map((d, i) => {
                return <>{d.cat === "backend" ? <>
                <div className="inline-block">
                  <img className="w-12 p-1" src={"/skills"+d.svg} alt="tech" />
                </div>
                </> : ""}</>;
              })}
            </div>
          </div>

          <div className="border rounded-md  m-2 ">
            <h2 className="border-b p-2">Database</h2>
            <div className="skills ">
              {data.map((d, i) => {
                return <>{d.cat === "database" ? <>
                <div className="inline-block">
                  <img className="w-12 p-1" src={"/skills"+d.svg} alt="tech" />
                </div>
                </> : ""}</>;
              })}
            </div>
          </div>
        </div>
      </div> */}

      <div className="slider p-10 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
        {data.map((d, i) => (
          <div>
            <SkillHolder key={i} {...d}></SkillHolder>
          </div>
        ))}

        {/* <div className="marquee-wrapper ">
          <Marquee className="py-2 overflow-hidden" loop={0} direction="left" pauseOnHover  gradient gradientWidth={100} gradientColor="white" >
            {data.map((d, i) => (
              <div>
                <SkillHolder key={i } {...d}></SkillHolder>
              </div>
            ))}
          </Marquee>

         
        </div> */}
      </div>
    </section>
  );
}
