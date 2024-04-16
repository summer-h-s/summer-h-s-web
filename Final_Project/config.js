let topTitleDiv = "<h4>UBC GEOS 472 | April 2024</h4>";

let titleDiv =
  "<h1>Mapping Police Violence:</h1><h1>Unveiling Patterns and Disparities in Policing Practices Across Canada.</h1>";

let bylineDiv = "<p>By Sabrina B M Y, Kiana M, Diego M T & Summer S</p>";

let introDiv =
  "<p><i>If information on police-involved deaths is emotionally challenging to read, Tracking (In)Justice Canada has offered <a href='https://trackinginjustice.ca/resources/ '>these</a> resources for support.</i></p>" +
    
  "<p>In recent years, police violence has been increasingly publicized, reigniting discussions about accountability, transparency and changes to police practices. In Canada, this discourse is supported by the fact that fatal encounters with police have steadily increased since the year 2000 (Tracking (In)Justice, 2023). This remains true even when researchers have accounted for population growth and improvements to reporting practices on the use of force (Wortley et al., 2021).</p>" +
    
  '<div style="text-align:center;"><img width="750" src="https://trackinginjustice.ca/wp-content/uploads/Post-1-2-1.jpg" alt="Police Involved Deaths When Force is Used per 100,000 people"><div>' +
    
  "<p><i>Figure 1.</i>Police Involved Deaths When Force is Used, per 100,000 People in Canada. From <i>Tracking (in)Justice</i>, 2023.(https://trackinginjustice.ca/analysis-increase-in-deaths-and-racial-disparities/).</p>" +
    
  "<p>At the same time, Canadian municipalities have continuously invested in policing services, with up to 26% of total expenditures going to police budgets and per capita funding rising in the last decades (Seabrook et al., 2023). Even though general crime rates have decreased across Canada and de-escalation training has become a standard practice (Wortley et al.), this persistent rise in fatal encounters prompts questions about the efficacy and ethics of current police conduct.</p>" +
    
  "<p>Given Canada’s history of colonialism and codified racial discrimination (Kwak, 2020), it may also come as no surprise that racial disparities are pronounced in this trend. Black and Indigenous peoples are over-represented, with these populations comprising around 8.7% of Canada's total population, yet accounting for 27.2% of all police-involved shooting deaths where race is reported (Tracking (In)Justice).  Furthermore, a significant amount of incidents involve people in mental health crisis or distress, with Statistics Canada reporting an increase in non-criminal police calls during the COVID-19 pandemic, involving general wellbeing checks, domestic disturbances, and mental health-related crises (Government of Canada, 2020). A key criticism of policing is that resources would be better allocated to mental health specialists, while police forces themselves have cited increased substance use disorder distress calls and mental health problems as reasons the use of force may have increased (Wortley et al., p. 43).</p>" +
    
  "<p>The emerging body of research on the use of force in Canadian policing (from both academic, municipal and community voices), underscores the urgency of understanding and addressing patterns of police violence. This is particularly important in light of increasing scrutiny and public demand for accountability in law enforcement institutions. Our project aims to build on data compiled by UBC researcher June Skeeter (2021), to explore spatial and temporal patterns of fatal encounters across Canada, with a focus on elucidating disparities in policing practices.</p>" +
    
  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let divChapter1 =
  "<h3>Fatal Encounters With Police in Canada</h3>" +
  "<p>This map shows all recorded police-involved deaths across Canada, from 1971 to 2023. You can interact with this map, by zooming in and looking at different locations. </p>" + 
  '<img width="100" src="data/GEOS_police_legend.png">';

let divChapter2 = "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Temporal Changes</h3>" + 
    '<div style="text-align:center;"><iframe src="data/time_slider.html" style="border:none; height:500px; width:800px;title="Police Violence in Canada by Date"></iframe></div>';

let divChapter3 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Racial Disparities</h3>" +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'>While police violence can affect anyone, there are clear populations and racialised groups who experience greater levels of discrimination, which can be seen throughout the data. Although a sizable portion of the data regarding police incidents are those who identify as White, equalling about 50% of all our incident data (not including those that remained ‘unspecified’), these events are most likely a function of the overall demographic of Canada, where 70% of Canada’s national population identified as White as of the 2021 census (Government of Canada, 2022). By representing the leading demographic group, there would naturally be a larger presentation of that race within the data. </p>" +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>What is, however, a notable finding within the data, is the over representation of Indigenous identifying individuals, which made up roughly 31% of our incident data (not including unspecified values). While this alone isn’t too remarkable, when looking at population statistics we find Indigenous peoples only making up about 6.1% of Canada’s total population (Government of Canada, 2022), which shows a highly skewed preference to targeting Indigenous peoples by police. Furthermore, as explored by June Skeeter in their work, having calculated police-involved deaths rates by ethnic census data, those of Indigenous identity see the highest rates of death by police action than any other ethnic or racialized population within Canada (Skeeter, 2021), where those of Indigenous identity are 7X more likely to be killed by police than most other racial groups in Canada.</p>" +
    
  '<div style="text-align:center;"><img width="600" src="https://june-skeeter.github.io/Police_Involved_Deaths_Canada/Content/CA_Race_Normalized.png" alt="Police Involved Deaths by race, per million people per year"><div>' +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto;'><i>Figure 2. </i>Death by race, per million people per year. From <i>June Skeeter</i>, 2021.(https://juneskeeter.github.io/Police_Involved_Deaths_Canada/Content/Looking_At_the_Data.html).</p>" +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Additional analysis done by the Government of Canada (2019) highlights the greater disparities that Indigenous peoples and First Nations communities face, where Indigenous peoples: represent 30% of Canada’s custody admissions, are more likely to be homicide victims, and more likely to have re-contact with the criminal justice system compared to non Indigenous peoples.</p>" +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>To further explore this phenomenon, we chose to visualize our data utilizing two heatmaps, the one on the left representing locations and hotspots of all police incidents, and the one on the right displaying a heat map which filtered for Indigenous only events. </p>" +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'><b>Comparison of The Distribution of Police Violence Across Canada and on Indigenous Peoples:</b></p>" +
    
  '<div style="text-align:center;"><iframe src="data/slider_ethnicity.html" style="border:none; height:500px; width:800px;title="Police Violence in Canada by Race"></iframe></div>' +
    
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>By moving the slider back and forth, we are able to see the distribution of data across the nation, where major cities will have the greatest prevalence for incidents. Interestingly, hotspots of incidents involving Indigenous peoples are focused predominantly West of Ontario, happening to coincide with the RCMP’s main jurisdictions. Furthermore, we can see a distinct rural urban-divide with regards to racialized groups, where locations outside of major cities, especially moving North within the Western provinces, as well as northern Territories, are almost entirely represented by police incidents with Indigenous peoples. </p>";
    
let divChapter4 =
  "<h3>Municipal Example 1</h3>" + "<p>Insert Sabrina's part</p>";

let divChapter5 =
  "<h3>Municipal Example 2</h3>" + "<p>Insert Sabrina's part</p>";

let divChapter6 =
  "<h3>Municipal Example 3</h3>" + "<p>Insert Sabrina's part</p>";

let footerDiv =
  "<p>Insert Conclusion.</p>" +
  "<h3>References</h3>" +
  "<p>Insert references</p>" +
  '<h4><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a></h4>';

var config = {
  style: "mapbox://styles/mapbox/dark-v11",
  accessToken:
    "pk.eyJ1Ijoic3VtbWVyLWgtcyIsImEiOiJjbHN3b21reGQydmNlMmxwcHh0OWw4cTgwIn0.MpcHLXkWUYWUOBqfMlCZVw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: introDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "ch1-intro",
      alignment: "left",
      hidden: false,
      chapterDiv: divChapter1,
      location: {
        center: [-105.41748, 57.71788],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "enableFreetime",
      image: "",

      onChapterEnter: [
        {
          layer: "pviolenceData",
          opacity: 0.8,
          duration: 300,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "ch2-temporal",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-105.41748, 57.71788],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
      onChapterEnter: [
      ],
      onChapterExit: [
      ],
    },
    {
      id: "ch3-race",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter3,
      location: {
        center: [-105.41748, 57.71788],
        zoom: 3,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "ch4-municipal1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-123.1522, 49.29409],
        zoom: 9.72,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "ch5-municipal2",
      alignment: "right",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-114.07723, 53.57105],
        zoom: 8.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "ch6-municipal3",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-79.57582, 43.71578],
        zoom: 8.32,
        pitch: 1.95,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
  ],
};
