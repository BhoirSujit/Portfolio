
import Marquee from "react-fast-marquee";

type propsT = {
  svg: string;
  name: string;
};

const data: propsT[] = [
  {
    svg: '/java.svg',
    name: 'Java'
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
    svg: '/excel.svg',
    name: 'MS Excel'
  },
  {
    svg: '/word.svg',
    name: 'MS Word'
  }
];

function SkillHolder({ ...props }: propsT) {
  return (
    <>
      <div
        className="skill-item border items-center p-2 mx-2  w-24 h-32 flex flex-col  gap-2 
      hover:scale-110 duration-300 ease-in-out"
      >
        <img className="aspect-square  p-2 " src={props.svg} alt="" />
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
      <div className="slider p-10 ">
        <div className="marquee-wrapper ">
          <Marquee className="py-2 overflow-hidden" loop={0} direction="left" pauseOnHover  gradient gradientWidth={100} gradientColor="white" >
            {data.map((d, i) => (
              <div>
                <SkillHolder key={i } {...d}></SkillHolder>
              </div>
            ))}
          </Marquee>

         
        </div>

        <div></div>
      </div>
    </section>
  );
}
