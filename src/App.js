import { Fragment, useEffect, useState } from "react";
import mylogo from './mylogo.png'
function App() {
  const [list, setlist] = useState([]);
  const [cityname,setCityName]=useState("All");
  const fetchPlaces=async(cityname)=>{
    const response=await fetch('cities.json');
    const data=await response.json();
    if(cityname==="All")
       { setlist(data);
        console.log(list.length);
       }
    else
    {
      const filterdata=data.filter((e)=>{
        if(e.city===cityname)
            return true;
        return false;
      })
       setlist(filterdata);
        console.log(list.length);
    }    
  }
  const setclass="box active";
  const setCity=(event)=>{
      setCityName(event.target.innerText);
  }
  useEffect(() => {
    fetchPlaces(cityname);
  }, [cityname])

  let cityarr = ["Jaipur", "Chittorgarh", "Jodhpur", "Ajmer", "Udaipur", "Jaisalmer"]

  return (
    <>
      <header>
        <img id="logo" src={mylogo} alt=".." />
        <span>Rajasthan Tourism</span>
      </header>
      <nav className="sticky-top">
        <div className={(cityname==="All" ? "box active" : "box inactive")} onClick={setCity}>
          <span>All</span>
        </div>
        {
          cityarr.map((citylist, index) => {
            return (
              <div className={(cityname===citylist ? "box active" : "box inactive")} key={index} onClick={setCity}>
                <span>{citylist}</span>
              </div>
            )
          })

        }
        
      </nav>
      <main>
       
        {
          list.map((newdata, index) => {
            return (
              <div className="content" key={index}>
                <img src={newdata.image}  alt="..." />
                <caption>{newdata.title}</caption>
              </div>
            )
          })
        }
        
      </main>
      <footer>
        &copy; copyright 2022 | Ganpat Hada | Rajasthan Tourism
      </footer>
    </>
  );
}

export default App;
