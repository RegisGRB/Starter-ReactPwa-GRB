
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Trombinoscope = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
        const result = await axios(
          'http://hp-api.herokuapp.com/api/characters'
        );

        setCharacters(result.data);
    };
    fetchApi();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Harry Potter characters list</h2>
            <p className="text-xl text-gray-500">Odio nisi, lectus dis nulla. Ultrices maecenas vitae rutrum dolor
              ultricies donec risus sodales. Tempus quis et.</p>
          </div>
          <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
            {characters.map(char =>
              <li>
                <div className="space-y-4">
                  <div className="flex justify-center">
                    <img className="object-cover shadow-lg rounded-lg h-48 w-48"
                         src={char.image}
                         alt={char.name}></img>
                  </div>

                  <div className="space-y-2">
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{char.name}</h3>
                      <p className="text-indigo-600">{char.house}</p>
                    </div>
                  </div>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Trombinoscope;