import React from 'react';
import NikeMetcon_1 from '../assets/1.jpeg';
import NikeMetcon_2 from '../assets/2.jpeg';
import NikeMetcon_3 from '../assets/3.jpeg';
import NikeMetcon_4 from '../assets/4.jpeg';
import './AllShoes.css'; // Import the custom CSS file

const shoes = [
  {
    name: "Neon Green Nike",
    img: "https://assets.codepen.io/4164355/shoes.png",
    sizes: [7, 8, 9, 10],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Air Jordan 1",
    img: "https://i.ibb.co/R0Y8T8r/nike19.png",
    sizes: [6, 7, 8, 9],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Nike Air",
    img: "http://wellandgood.com/wp-content/uploads/2012/07/Nike-Free-30-Womens-Running-Shoe-511495_600_A.png",
    sizes: [7, 8, 9, 10],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Nike Metcon 1",
    img: NikeMetcon_1,
    sizes: [7, 8, 9, 11],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Nike Metcon 2",
    img: NikeMetcon_2,
    sizes: [8, 9, 10, 11],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Nike",
    img: "http://pngimg.com/uploads/running_shoes/running_shoes_PNG5782.png",
    sizes: [6, 7, 8, 9],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Nike Metcon 3",
    img: NikeMetcon_3,
    sizes: [7, 8, 9, 10],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Nike Metcon 4",
    img: NikeMetcon_4,
    sizes: [7, 8, 9, 10],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Nike Free RN Flyknit 2018",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike06a.png",
    sizes: [7, 8, 9, 10],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Nike Odyssey React Shield",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike01a.png",
    sizes: [7, 8, 9, 10],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Nike Air Max 97 Premium",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike04a.png",
    sizes: [7, 8, 9, 10],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
  {
    name: "Nike Air Force 1 '07 Suede",
    img: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/881020/nike11a.png",
    sizes: [7, 8, 9, 10],
    colors: ["red-800", "blue-900", "fuchsia-800"],
  },
];

const AllShoes = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#e6e7e5] font-poppins">
      <div className="grid grid-cols-4 gap-8">
        {shoes.map((shoe, index) => (
          <div key={index} className="relative group card-container">
            <div className="relative w-80 h-[450px] bg-[#e6e7e5] rounded-2xl overflow-hidden group before:absolute before:inset-0 bg-[#d1d1d1] before:clip-path-circle-150 before:transition-all before:duration-500 hover:before:clip-path-large after:absolute after:top-1/3 after:left-[-20%] after:text-[12em] after:font-extrabold after:italic after:text-white after:opacity-5 after:z-[5] after:content-['Nike']">
              <div className="absolute top-1/2 transform -translate-y-1/2 z-[10000] w-full h-[220px] transition-all duration-500 group-hover:top-0 group-hover:transform-none">
                <img src={shoe.img} alt={shoe.name} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 -rotate-[25deg] w-[270px]" />
              </div>
              <div className="absolute bottom-0 w-full h-[100px] text-center transition-all duration-1000 group-hover:h-[210px]">
                <h2 className="relative font-bold tracking-wide text-neutral-950">{shoe.name}</h2>
                <div className="flex justify-center items-center p-2 transition-opacity opacity-0 group-hover:opacity-100 delay-150">
                  <h3 className="text-black font-medium text-sm uppercase tracking-wider mr-2">Size :</h3>
                  {shoe.sizes.map(size => (
                    <span key={size} className="w-6 h-6 text-center leading-6 text-sm inline-block text-gray-900 bg-white mx-1 rounded cursor-pointer transition-colors hover:bg-green-400">{size}</span>
                  ))}
                </div>
                <div className="flex justify-center items-center p-2 transition-opacity opacity-0 group-hover:opacity-100 delay-200">
                  <h3 className="text-black font-medium text-sm uppercase tracking-wider mr-2">Color :</h3>
                  {shoe.colors.map(color => (
                    <span key={color} className={`w-5 h-5 bg-${color} rounded-full mx-1 cursor-pointer`}></span>
                  ))}
                </div>
                <a href="#" className="inline-block py-2 px-4 bg-white rounded mt-2 text-gray-900 font-semibold opacity-0 transform translate-y-12 transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:translate-y-0">Buy Now</a>
              </div>
            </div>
            <div className="hover-tag">Hover on the shoe</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoes;
