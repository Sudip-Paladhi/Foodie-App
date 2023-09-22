import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="md:mt-5 md:w-9/12 m-auto font-Quicksand p-2 gap-1">
      <p className="text-center text-2xl font-extrabold text-gray-600">
        Welcome to Tasty Bites food app
      </p>
      <p className="md:mt-4 mt-2 md:font-semibold">
        I am a passionate frontend developer. i love creating seamless and
        delightful user experiences. My goal is to revolutionize the food
        delivery experience, making it faster, easier, and more enjoyable for
        you.
      </p>
      <p className="md:mt-4 mt-2 text-xl md:font-semibold text-orange-500 underline">
        Technologies We Use -
      </p>
      <p className="md:mt-4 mt-2 md:font-semibold">
        <span className="text-orange-500 text-xl"> ◉ React:</span> Our app is
        built using the popular JavaScript library React, allowing for dynamic
        and interactive user interfaces.
      </p>
      <p className="md:mt-4 mt-2 md:font-semibold">
        <span className="text-orange-500 text-xl">◉ Parcel: </span> Parcel is
        our choice for bundling our project, making sure everything loads
        quickly and efficiently.
      </p>
      <p className="md:mt-4 mt-2 md:font-semibold">
        <span className="text-orange-500 text-xl">◉ Babel: </span> Babel ensures
        that our code is compatible with a wide range of browsers, ensuring a
        consistent experience for all users.
      </p>

      <p className="md:mt-4 mt-2 md:font-semibold">
        <span className="text-orange-500 text-xl">◉ React Router Dom: </span>{" "}
        This library enables seamless navigation within our app, providing a
        fluid and intuitive user experience.
      </p>

      <p className="md:mt-4 mt-2 md:font-semibold">
        <span className="text-orange-500 text-xl">◉ Tailwind CSS: </span> We use
        Tailwind CSS to style our app, allowing for rapid development and a
        clean, modern look.
      </p>

      <p className="md:mt-4 mt-2 md:font-semibold">
        <span className="text-orange-500 text-xl">◉ Swiggy API: </span> We've
        integrated the Swiggy API to bring you the latest and most accurate
        information on your favorite restaurants and dishes.
      </p>

      <p className="md:mt-4 mt-2 md:font-semibold">
        <span className="text-orange-500 text-xl">◉ Custom Hooks: </span> We've
        created custom hooks to streamline our code and enhance reusability,
        making our app even more efficient.
      </p>

      <p className="md:mt-4 mt-2 md:font-semibold">
        <span className="text-orange-500 text-xl">
          ◉ Redux Toolkit and React Redux:{" "}
        </span>{" "}
        These powerful tools help us manage the state of our application,
        ensuring smooth and predictable behavior.
      </p>

      <p className="md:mt-4 mt-2 md:font-semibold">
        <span className="text-orange-500 text-xl">◉ React Icons: </span> This
        library provides a vast selection of icons that enhance the visual
        appeal of our app.
      </p>

      <p className="md:mt-4 mt-2 md:font-semibold">
        <span className="text-orange-500 text-xl">◉ EmailJS: </span> We've
        integrated EmailJS to handle email communication, ensuring that your
        messages are sent and received securely.
      </p>

      <p className="md:mt-4 md:font-semibold mt-2">
        If you have any questions, suggestions, or just want to say hello, we'd
        love to hear from you! Feel free to reach out through our{" "}
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
  );
};

export default About;
