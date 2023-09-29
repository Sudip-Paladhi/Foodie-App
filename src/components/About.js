import { Link } from "react-router-dom";
import developer from "../Assets/sudip.png";
const About = () => {
  return (
    <>
      <div className="text-gray-600">
        <div className="w-full px-4 pt-6 text-gray-600">
          <div className="flex flex-col items-center pt-8">
            <div className="text-center text-3xl font-bold underline-offset-auto">
              Good day! My name is Sudip Paladhi
            </div>
          </div>
          <div className="mx-auto pt-8 flex w-full md:w-9/12 flex-col items-center gap-4  md:flex-row ">
            <div className="md:bg-500">
              <img
                src={developer}
                className="rounded-full object-scale-down h-80 w-96 "
              ></img>
            </div>
            <div className="lg:py-8">
              <div className="border-b-2 border-b-gray-200 pb-5 md:text-2xl font-semibold">
                I'm passionate about technology and thoroughly enjoy creating
                websites 👻.
              </div>
              <div>
                <div className="mx-0 my-4 md:text-2xl font-semibold">
                  I'd like to share a bit more about myself
                </div>
                <div className=" border-b-2 pb-5 border-b-gray-300">
                  <ul className="list-none md:text-xl">
                    <li>
                      🌟 I have a keen interest in web design and development.
                    </li>
                    <li>📚 Currently, I'm actively learning React.js.</li>
                    <li>
                      ⚡ I'm open to collaborating on web development projects.
                    </li>
                    <li>
                      🌱 I'm eager to explore Backend development further.
                    </li>
                    <li>📫 You can contact me at sudippaladhi@gmail.com.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-5 md:w-9/12 m-auto pt-24 p-2 gap-1">
          <p className="text-center text-2xl font-extrabold text-gray-600">
            Welcome to Tasty Bites food app
          </p>

          <p className="md:mt-4 mt-2 text-xl md:font-semibold text-orange-500 underline">
            Technologies We Use -
          </p>
          <p className="md:mt-4 mt-2 md:font-semibold">
            <span className="text-orange-500 text-xl"> ◉ React:</span> Our app
            is built using the popular JavaScript library React, allowing for
            dynamic and interactive user interfaces.
          </p>
          <p className="md:mt-4 mt-2 md:font-semibold">
            <span className="text-orange-500 text-xl">◉ Parcel: </span> Parcel
            is our choice for bundling our project, making sure everything loads
            quickly and efficiently.
          </p>
          <p className="md:mt-4 mt-2 md:font-semibold">
            <span className="text-orange-500 text-xl">◉ Babel: </span> Babel
            ensures that our code is compatible with a wide range of browsers,
            ensuring a consistent experience for all users.
          </p>

          <p className="md:mt-4 mt-2 md:font-semibold">
            <span className="text-orange-500 text-xl">
              ◉ React Router Dom:{" "}
            </span>{" "}
            This library enables seamless navigation within our app, providing a
            fluid and intuitive user experience.
          </p>

          <p className="md:mt-4 mt-2 md:font-semibold">
            <span className="text-orange-500 text-xl">◉ Tailwind CSS: </span> We
            use Tailwind CSS to style our app, allowing for rapid development
            and a clean, modern look.
          </p>

          <p className="md:mt-4 mt-2 md:font-semibold">
            <span className="text-orange-500 text-xl">◉ Swiggy API: </span>{" "}
            We've integrated the Swiggy API to bring you the latest and most
            accurate information on your favorite restaurants and dishes.
          </p>

          <p className="md:mt-4 mt-2 md:font-semibold">
            <span className="text-orange-500 text-xl">◉ Custom Hooks: </span>{" "}
            We've created custom hooks to streamline our code and enhance
            reusability, making our app even more efficient.
          </p>

          <p className="md:mt-4 mt-2 md:font-semibold">
            <span className="text-orange-500 text-xl">
              ◉ Redux Toolkit and React Redux:{" "}
            </span>{" "}
            These powerful tools help us manage the state of our application,
            ensuring smooth and predictable behavior.
          </p>

          <p className="md:mt-4 mt-2 md:font-semibold">
            <span className="text-orange-500 text-xl">◉ React Icons: </span>{" "}
            This library provides a vast selection of icons that enhance the
            visual appeal of our app.
          </p>

          <p className="md:mt-4 mt-2 md:font-semibold">
            <span className="text-orange-500 text-xl">◉ EmailJS: </span> We've
            integrated EmailJS to handle email communication, ensuring that your
            messages are sent and received securely.
          </p>

          <p className="md:mt-4 md:font-semibold mt-2">
            If you have any questions, suggestions, or just want to say hello,
            we'd love to hear from you! Feel free to reach out through our{" "}
            <Link className="text-blue-500" to="/contact">
              Contact
            </Link>{" "}
            form or drop us an email at{" "}
            <span className="text-blue-400">sudippaladhi@gmail.com</span>
          </p>

          <p className="md:mt-4 md:font-semibold text-center mt-4">
            Thank you for being a part of our journey!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
