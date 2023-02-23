import React from 'react';
import CountriesContainer from './Containers/CountriesContainer';
function App() {

  const regions=[{name: "All",url: "https://restcountries.com/v3.1/all"  },
                {name: "Africa",url: "https://restcountries.com/v3.1/region/africa"  },
                {name: "Americas",url: "https://restcountries.com/v3.1/region/americas"},
                {name: "Asia",url: "https://restcountries.com/v3.1/region/Asia"  },                
                {name: "Europe",url: "https://restcountries.com/v3.1/region/europe"  },
                {name: "Oceania",url: "https://restcountries.com/v3.1/region/oceania"  }]
  return (
    <div className="App">
      <h1>Countries of the World</h1>

     <CountriesContainer regions={regions} />
    </div>
  );
}

export default App;
