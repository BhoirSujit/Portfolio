

type propsT = {
  svg: string;
  name: string;
};

const data: propsT[] = [
  {
    svg: "/java.svg",
    name: "Java",
  },
  {
    svg: "/html.svg",
    name: "HTML",
  },
  {
    svg: `/css.svg`,
    name: "CSS",
  },
  {
    svg: `/javascript.svg`,
    name: "JavaScript",
  },
  {
    svg: "/typescript.svg",
    name: "TypeScript",
  },
  {
    svg: "/react.svg",
    name: "React",
  },
  {
    svg: "/sql.svg",
    name: "SQL",
  },
  {
    svg: "/mongodb.svg",
    name: "MongoDB",
  },
  {
    svg: "/nodejs.svg",
    name: "NodeJs",
  },
  {
    svg: "/bootstrap.svg",
    name: "Bootstrap",
  },
  {
    svg: "/tailwind.svg",
    name: "Tailwind",
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
          src={props.svg}
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

        <div></div>
      </div>
    </section>
  );
}
