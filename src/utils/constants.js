export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR =
  "https://occ-0-4345-3647.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYjgwY2RmYjdhYmZhMWRkM2M5YzRhMDQyN2ZhMjU5ZiIsInN1YiI6IjY1YjEyNWRiMmZlMmZhMDE1MDNjYzRlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.whVWBMiz293gvFVVFJ2zCt4qoBPxQVOP0HDSgDa88vE",
  },
};
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_medium.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "Hindi", name: "Hindi" },
  { identifier: "Spanish", name: "Spanish" },
  { identifier: "French", name: "French" },
];
export const YOUTUBE_API_KEY = "AIzaSyCH1uXooIrA5MLPYkGIhWcdECEsbegSBdE";
export const SEARCHED_MOVIES =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&type=video&videoEmbeddable=true&q=";
export const About = [
  {
    heading: "Routing",
    description:
      "Efficient and intuitive navigation is at the heart of our project. With a carefully designed routing system, users can seamlessly move through different sections of the application, ensuring a smooth and enjoyable experience.",
  },
  {
    heading: "OpenAI GPT for Searching Results",
    description:
      "We leverage the power of OpenAI GPT to enhance the search functionality in our application. Get accurate and relevant results through advanced language processing, making your search experience more intelligent and efficient.",
  },
  {
    heading: "Redux",
    description:
      "Managing state in complex applications is made simple with Redux. Our project leverages the power of Redux to maintain a single source of truth for the application state, facilitating efficient data flow and making it easier to debug and maintain.",
  },
  {
    heading: "Debouncing",
    description:
      "To enhance the user experience, we’ve incorporated debouncing techniques. This not only optimizes the performance of our application but also ensures that resource-intensive tasks are executed judiciously, preventing unnecessary strain on the system.",
  },
  {
    heading: "Authentication",
    description:
      "Security is a top priority for us. Our project includes robust authentication mechanisms to safeguard user data and provide a secure environment for seamless user interaction. Rest assured, your information is in safe hands.",
  },
  {
    heading: "API Integration",
    description:
      "Connecting with external services is a breeze with our integrated API solutions. We’ve carefully crafted a system that seamlessly interacts with APIs, allowing for dynamic content updates and real-time data synchronization.",
  },
  {
    heading: "Responsive Design with Tailwind CSS ",
    description:
      "A visually appealing and responsive design is crucial in today’s diverse device landscape. Our project is built with Tailwind CSS, ensuring a sleek and responsive user interface that adapts seamlessly to various screen sizes and resolutions.",
  },
  {
    heading: "Custom Hooks",
    description:
      "To enhance code reusability and maintainability, we’ve implemented custom hooks. These hooks encapsulate common functionalities, making it easier for developers to plug and play, reducing redundancy and ensuring a more streamlined development process.",
  },
  {
    heading: "Deployment",
    description:
      "Effortlessly deploy your application with our streamlined deployment process. Whether you choose traditional servers or opt for cloud-based solutions, we provide comprehensive deployment options to suit your needs.",
  },
];

// {/* <div className="lg:w-[40%] mt-4 lg:mt-0 lg:ml-4 ">
//           {filterMovieDetail?.map((datam) => (
//             <div key={datam?.id}>
//               <h1 className="text-2xl lg:text-3xl font-bold text-red-600 ">
//                 {datam?.title}
//               </h1>
//               <p className="text-sm lg:text-base my-3 text-white">
//                 {datam?.overview}
//               </p>
//               <p className="text-sm lg:text-base my-4 text-white">
//                 Language: {datam?.original_language}
//               </p>
//               <p className="text-sm lg:text-base my-4 text-white">
//                 Video Rating: {datam?.vote_average}
//               </p>
//               <p className="text-sm lg:text-base my-4 text-white">
//                 Release Date: {datam?.release_date}
//               </p>
//             </div> */}