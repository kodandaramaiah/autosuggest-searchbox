import React, { Component } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Autocom.css";

const animatedComponents = makeAnimated();

const Countries = [
  {
    value: "AN",
    label: "Andaman and Nicobar Islands",
    details:
      "The Andaman and Nicobar Islands, a Union territory of India comprising 572 islands ",
  },
  {
    value: "AP",
    label: "Andhra Pradesh",
    details:
      "Andhra Pradesh is the first state to be formed on a linguistic basis in India, and was established in 1953",
  },
  {
    value: "AR",
    label: "Arunachal Pradesh",
    details:
      "Arunachal PradeshArunachal Pradesh. ... Formerly known as the North East Frontier Agency (from the British colonial era), the area was part of Assam until it was made the Indian union territory of Arunachal Pradesh in 1972, and in 1987 it became an Indian state.",
  },
  {
    value: "AS",
    label: "Assam",
    details:
      "Assam is home to the one-horned Indian rhinoceros, along with the wild water buffalo, pygmy hog, tiger and various species of Asiatic birds, and provides one of the last wild habitats for the Asian elephant.",
  },
  {
    value: "BR",
    label: "Bihar",
    details:
      "It is contiguous with Uttar Pradesh to its west, Nepal to the north, the northern part of West Bengal to the east, and with Jharkhand to the south. The Bihar plain is split by the river Ganges, which flows from west to east.",
  },
  {
    value: "CG",
    label: "Chandigarh",
    details:
      "Chandigarh city is the capital of the territory and of the states of Haryana and Punjab. Chandigarh's label, meaning “stronghold of the goddess Chandi,” is derived from the Chandi Mandir, a temple dedicated to the goddess that is located near the town of Mani",
  },
  {
    value: "CH",
    label: "Chhattisgarh",
    details:
      "Chhattisgarh is one of the 28 states of India, located in the centre-east of the country. It is the ninth-largest state in India, with an area of 135,192 km2 (52,198 sq ...",
  },
  {
    value: "DH",
    label: "Dadra and Nagar Haveli",
    details:
      "Dadra and Nagar Haveli, union territory of India, located in the western part of the country and situated between the states of Gujarat to the north and Maharashtra to the south.",
  },
  {
    value: "DD",
    label: "Daman and Diu",
    details:
      "Daman and Diu, union territory of India, comprising two widely separated districts on the country's western coast",
  },
  {
    value: "DL",
    label: "Delhi",
    details:
      "Delhi is also the centre of the National Capital Region (NCR), which is a unique 'interstate regional planning' area created by the National Capital Region Planning Board Act of 1985.",
  },
  {
    value: "GA",
    label: "Goa",
    details:
      "Goa is the beautiful state in india. it is the most popular place in india",
  },
  {
    value: "GJ",
    label: "Gujarat",
    details:
      "Its capital city is Gandhinagar, while its largest city is Ahmedabad. The Gujarati-speaking people of India are indigenous to the state.",
  },
  {
    value: "HR",
    label: "Haryana",
    details:
      "Haryana (Hindi pronunciation: [ɦərɪˈjaːɳaː]) is one of the 28 states in India, located in the northern part of the country.",
  },
  {
    value: "HP",
    value: "Himachal Pradesh",
    details:
      "After independence, many of the hilly territories were organized as the Chief Commissioner's province of Himachal Pradesh which later became a union territory.",
  },
  {
    value: "JK",
    label: "Jammu and Kashmir",
    details:
      "Jammu and Kashmir was a region formerly administered by India as a state from 1954 to 2019, constituting the southern and southeastern portion of the larger Kashmir region, which has been the subject of a dispute between India, Pakistan and China since the mid-20th century.",
  },
  {
    value: "JH",
    label: "Jharkhand",
    details:
      "Jharkhand, state of India, located in the northeastern part of the country. Jharkhand is bordered by the states of Bihar to the north, West Bengal to the east, Odisha to the south, Chhattisgarh to the west, and Uttar Pradesh to the northwest. Its capital is Ranchi.",
  },
  {
    value: "KA",
    label: "Karnataka",
    details:
      "Karnataka is a state in the south western region of India. It was formed on 1 November 1956, ... Jump up to: Census 2011 (Final Data) – Demographic details, Literate Population (Total, Rural & Urban) (PDF). planningcommission.gov.in.Karnataka is a state in the south western region of India. It was formed on 1 November 1956, ... Jump up to: Census 2011 (Final Data) – Demographic details, Literate Population (Total, Rural & Urban)(PDF). planningcommission.gov.in.",
  },
  {
    value: "KL",
    label: "Kerala",
    details:
      "Spread over 38,863 km2 (15,005 sq mi), Kerala is the twenty-first largest Indian state by area. It is bordered by Karnataka to the north and northeast, Tamil Nadu to the east and south, and the Lakshadweep Sea to the west.",
  },
  {
    value: "MP",
    label: "Madhya Pradesh",
    details:
      "Madhya Pradesh is the second largest Indian state by area and the fifth largest state by population with over 75 million residents.",
  },
  {
    value: "MH",
    label: "Maharashtra",
    details:
      "Maharashtra is a state in the western peninsular region of India occupying a substantial portion of the Deccan Plateau. As the home of the Marathi people",
  },
  {
    value: "MN",
    label: "Manipur",
    details:
      "Manipur. ... Manipur, state of India, located in the northeastern part of the country. It is bordered by the Indian states of Nagaland to the north, Assam to the west, and Mizoram to the southwest and by Myanmar (Burma) to the south and east.",
  },
  {
    value: "ML",
    label: "Meghalaya",
    details:
      "Meghalaya was previously part of Assam, but on 21 January 1972, the districts of Khasi, Garo and Jaintia hills became the new state of Meghalaya. English is the official language of Meghalaya.",
  },
  {
    value: "MZ",
    label: "Mizoram",
    details:
      "Mizoram, state of India. It is located in the northeastern part of the country and is bounded by Myanmar (Burma) to the east and south and Bangladesh to the west and by the states of Tripura to the northwest",
  },
  {
    value: "NL",
    label: "Nagaland",
    details:
      "It is bordered by the state of Arunachal Pradesh to the north, Assam to the west, Manipur to the south and the Sagaing Region of Myanmar to the east",
  },
  {
    value: "OR",
    label: "Odisha",
    details:
      "Odisha has a coastline of 485 kilometres (301 mi) along the Bay of Bengal. It is the 8th largest state by area, and the 11th largest by population.",
  },
  {
    value: "PY",
    label: "Puducherry",
    details:
      "It was formed out of four territories of former French India, labelly Pondichéry (Pondicherry; now Puducherry), Karikal (Karaikal), Mahé and Yanaon (Yanam), excluding Chandernagore.",
  },
  {
    value: "PB",
    label: "Punjab",
    details:
      "The five tributary rivers of the Indus River from which the region took its label are the Sutlej, Ravi, Beas, Chenab and Jhelum rivers; the Sutlej, Ravi and Beas rivers flow through the Indian Punjab.",
  },
  {
    value: "RJ",
    label: "Rajasthan",
    details:
      "Rajasthan, state of northwestern India. Before 1947 it comprised some two dozen princely states and chiefships. After 1947, when India achieved independence ...",
  },
  {
    value: "SK",
    label: "Sikkim",
    details:
      "It is one of the smallest states in India. Sikkim is bordered by the Tibet Autonomous Region of China to the north and northeast, by Bhutan to the southeast",
  },
  {
    value: "TN",
    label: "Tamil Nadu",
    details:
      "Tamil Nadu lies in the southernmost part of the Indian subcontinent and is bordered by the union territory of Puducherry and the South Indian states of Kerala, Karnataka, and Andhra Pradesh.",
  },
  {
    value: "TS",
    label: "Telangana",
    details:
      "The terrain of Telangana region consists mostly of hills, mountain ranges, and thick dense forests covering an area of 27,292 km2 (10,538 sq mi). As of 2019, the state of Telangana is divided into 33 districts.",
  },
  {
    value: "TR",
    label: "Tripura",
    details:
      "The third-smallest state in the country, it covers 10,491 km2 (4,051 sq mi) and is bordered by Bangladesh to the north, south, and west, and the Indian states of Assam and Mizoram to the east.",
  },
  {
    value: "UK",
    label: "Uttar Pradesh",
    details:
      "Uttar Pradesh was home to most of mainstream political entity that has existed in ancient and medieval India including Mughal Empire, Maurya Empire, Delhi Sultanate, Gupta Empire, as well as many other empires.",
  },
  {
    value: "UP",
    label: "Uttarakhand",
    details:
      "The state is divided into two divisions, Garhwal and Kumaon, with a total of 13 districts. The winter capital of Uttarakhand is Dehradun, the largest city of the state, which is a rail head.",
  },
  {
    value: "WB",
    label: "West Bengal",
    details:
      "Part of the Bengal region of the Indian subcontinent, it borders Bangladesh in the east, and Nepal and Bhutan in the north",
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <div className="App-Component">
            <i className="fas fa-search fa-5x mb-5"></i>
            <h2>
              {" "}
              <em>Search state or city name</em>
            </h2>
            <div className="Autocom">
              <Select
                placeholder="Enetr State name...."
                options={Countries}
                components={animatedComponents}
                isMulti
              />
            </div>
            <button onClick={this.onTextchanged} className="button">
              search
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

/* import React, { Component } from "react";
import "./App.css";
import Autocomplete from "./autocomplete";
import states from "./states";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Component">
          <div className="App-component">
            <Autocomplete items={states} />
          </div>
        </div>
      </div>
    );
  }
}
 */
