
import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

const data = `const about = {
    name: "Sujit Bhoir",
    skills: {
        "Languages": ["JavaScript", "TypeScript", "SQL", "Java"],
        "FrameWorks": ["React, NodeJs", "ExpressJs"],
        "Database": ["PostgreSQL", "MongoDB", "FireBase"],
        "Soft Skills": ["Communication", "Problem Solving"],
    }
}`;

export default function CodeEditor() {
  //   const [code, setCode] = useState<string>("");

  //   const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
  //     setCode(event.target.value);
  //   };

//   useEffect(() => {
//     setCode(data);
//   }, []);

  return (
    <div className="console rounded-lg border w-full h-full flex flex-col">
      <div className="head  border-b p-2 flex justify-between align-middle">
        <ul className="start flex gap-2">
          <li className="p-1 rounded-md  hover:bg-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
              />
            </svg>
          </li>
          <li className="p-1 rounded-md  hover:bg-slate-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </li>
        </ul>

        <div className="name hidden sm:block">
          <div className="border rounded-lg px-32 flex gap-2 p-1 hover:bg-slate-50">
            <span>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
            <span> Porfolio</span>
          </div>
        </div>
        <ul className="flex">
          <li className="rounded-md hover:bg-slate-50 p-1 px-2">–</li>
          <li className="rounded-md hover:bg-slate-50 p-1 px-2">▢</li>
          <li className="rounded-md hover:bg-slate-50 p-1 px-2">⨉</li>
        </ul>
      </div>
      <div className="body flex h-full">
        <div className="sidebar border-r flex ">
          <ul>
            <li className="p-2 hover:bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </li>
            <li className="p-2 hover:bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </li>
            <li className="p-2 hover:bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                />
              </svg>
            </li>
            <li className="p-2 hover:bg-slate-50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>
            </li>
          </ul>
        </div>
        <div className="editor w-full">
          <div className="file border-b w-full">
            <ul className="flex ">
              <li className="border-r p-1 bg-slate-50">Sujit.ts ⨉</li>
            </ul>
          </div>
          <div className="bodyeditor flex overflow-auto">
            {/* Line Numbers */}
            {/* <div className="pr-4 p-2 text-gray-400 text-right select-none">
              {code.split("\n").map((_, i) => (
                <div key={i} className="py">
                  {i + 1}
                </div>
              ))}
            </div> */}
            <SyntaxHighlighter
              className="flex-1"
              language="javascript"
              showLineNumbers
              style={a11yLight}
            >
              {data}
            </SyntaxHighlighter>
            {/* <textarea
                onChange={handleChange}
                className="flex-1 bg-transparent outline-none whitespace-pre font-mono resize-none overflow-auto min-h-[200px]  p-2"
                spellCheck="false"
              >
                {data}
              </textarea>{" "} */}
            {/* <ul className="px-2 text-secondary">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
            </ul>
            <div className="e">
              <p>const name: string = 'Sujit Bhoir';</p>
              <p>let age: number = 20;</p>
              <p>
                console.log(`your can call me $&#123;name.split(' ')[0]&#125;`);
              </p>

              <p>.</p>
              <p>const myself = &#123; </p>
              <p className="ml-8">name: 'sujit',</p>
              <p className="ml-8">age: 20,</p>
              <p>&#125;</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
