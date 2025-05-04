type certificateDataType = {
  name: string;
  organization: string;
  credentialUrl: string;
  media: string;
};

const cdata: certificateDataType[] = [
  {
    name: "Responsive Web Design",
    organization: "FreeCodeCamp",
    credentialUrl:
      "https://www.freecodecamp.org/certification/Sujit_bhoir/responsive-web-design",
    media: "responsice_web_design.png",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    organization: "Badgr",
    credentialUrl: "https://badgr.com/public/assertions/8FgwyDKmS8SF4KfvgyBHLg?identity__email=bhoirsujit04@gmail.com",
    media: "postman.png",
  },
  {
    name: "Frontend Devloper React) Certificate",
    organization: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/3359d299de82",
    media: "frontend_devloper_react.png",
  },
  {
    name: "Rest API (Intermediate)",
    organization: "HackerRank",
    credentialUrl: "https://www.hackerrank.com/certificates/5d537249d808",
    media: "restapi.png",
  },
];

const CertificateView = (props: certificateDataType) => {
  return (
    <a href={props.credentialUrl} target="_blank" className="p-2 min-w-max">
      <img
        className="w-80 h-56 shadow-md border rounded-lg hover:scale-[103%] duration-300 ease-in-out "
        src={"/certificates/" + props.media}
        alt="media"
      />

      <div className="caption m-2">
        <p className="font-medium">{props.name}</p>
        <p>{props.organization}</p>
      </div>
    </a>
  );
};

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="mx-0 lg:mx-20 lg:py-0 xl:mx-32 xl:py-10"
    >
      <h2 className="ml-8 pl-4 font-bold text-lg border-l-8 border-black mt-10">
        Certificates
      </h2>

      <div className="p-8 grid grid-flow-col overflow-auto gap-4">
        {cdata.map((d, i) => (
          <CertificateView key={i} {...d}></CertificateView>
        ))}
      </div>
    </section>
  );
}
