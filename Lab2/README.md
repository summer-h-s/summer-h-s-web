# UBC Microwave Locator Map (GEOS472 Lab 2)

Visit map here: https://summer-h-s.github.io/summer-h-s-web/Lab2/ubcv_microwaves_map.html

Add or edit microwave data here: https://docs.google.com/spreadsheets/d/1meLUxBldPY7nR5bxVDAH_YshUEVnrjwjLYQZtJVxCR8/edit?usp=sharing

![lab_2_map_screenshot](https://github.com/summer-h-s/summer-h-s-web/blob/main/Lab2/lab_2_map_screenshot.png)

## Reflection
For this lab, my goal was to actualize an idea that has been in the back of my mind for a while as a UBC student. Finding a microwave can be a necessarry yet challenging task and I know I'm not the only one who has thought this before! As I began researching, I quickly realised that there are dozens of r/UBC posts asking where microwaves are located on the Vancouver campus (https://www.reddit.com/r/UBC/search/?q=microwave&restrict_sr=1). Also, a 2017 (UBC SEEDS) student research project which mapped food preparation and eating areas ('Lunch Hubs'), was the most recent synthesis of similar information. As a result, one major challenge I wanted to address was the temporary nature of microwave data. In the AMS Nest for instance, several new microwaves were recently added to a just one floor, which would have qickly rendered any existing references out of date. Furthermore, I thought about how to make this map more accurate through collaboration, as there was no exsiting campus-wide dataset and no time for me to hunt down all microwaves. Overall, this map intends to help viewers identify the nearest microwave to a location of their choice, while also serving as a collaborative, persisting dataset that can evolve over time. 

To create the map, I knew I wanted to specify a way for users to click somewhere and see the nearest microwave, then see more details when they clicked on an individual point. For this I followed a turf.js tutorial on the Mapbox site. The coding was difficult, but it was still a fun challenge and a great learning opportunity through 'tinkering' (eg. I learned how to use the DevTools to trial edits on specific parts of the page, which helped me refine the map's UI with more control than my html knowledge would otherwise let me). Unfortunately, I spent a whole day trying to make the dataset originate from a more user-friendly map styled interface (so contributors could click on a map to add a point, rather than have to insert information into my spreadsheet), only to realize this would not be feasible with a live updating dataset and the tools I had at hand. I think this option would've simplified the dataset interaction in a beneficial way and reduced the interface complexity, but I will keep this in mind for the future. In fact, Campus Nutrition (https://campusnutrition.ca/find-food) expressed interest in this project and if I follow up to help them create a more advanced iteration, I will try to make these changes. To improve the user interaction, I would love to include a button or use another data hosting service, to allow users to open the data in their prefered navigation app/site, like Google Maps and more (eg. some services I looked into: https://github.com/facilmap/facilmap, https://map.proxi.co/). However, all options I explored had limitiations that prevented me from hosting live data rather than static, which would remove the collaboration and adaptability I intended.  

Finally, I deccided to style this map with a Mapbox streets style that features OpenStreetMap data. It was important for me to include footpaths, building names and a clear, uncluttered view of campus buildings to help students navigate this pedestrian-centric area. The yellow 'highlight' layer helps the somewhat detailed symbols stand out when they are in focus and this colour is typical of food related locations on other maps. 

### Collaboration and Review
I have commented in the code to show how some of the resources linked below helped me specifically. Furthermore, I recieved some useful feedback from friends who reviewed my completed map. Based on one person's advice, I reformatted the spreadsheet to show coordinates last and to make more easily readable characteristics first. I also gave feedback and reviewed my classmate Sabrina's map, suggesting that a little text on the map screen would help users more quickly/ clearly understand what the map is about. 

<b>Tutorials and examples that helped inform my code:</b>
- https://www.mapbox.com/impact-tools/sheet-mapper
	- [[Webinar] "Sheet Mapper: Google Sheets w/Mapbox" Lunchbox livestream](https://youtu.be/OA_synK0qCA?si=5Il32rKdYxuDHRXl)
- https://docs.mapbox.com/help/tutorials/analysis-with-turf/
	- https://jsfiddle.net/api/post/library/pure/
	- https://youtu.be/OA_synK0qCA?si=Yo35GAGH4kgGrExl
- [WebGIS with Turf.js and Leaflet](https://youtu.be/rtlywANbYkc?si=p13etycWuxsOKNJH)
	- https://drive.google.com/file/d/1rjwfNW4VZ8a26HTndlldZTmOpxruCTVR/view?usp=sharing
- https://docs.mapbox.com/mapbox-gl-js/example/mouse-position/
- https://stackoverflow.com/questions/60009374/when-using-turf-nearpoint-what-kind-of-point-should-be-used-documentation-for
- https://stackoverflow.com/questions/63158744/display-lat-lng-coordinates-on-click-on-mapbox-gl-js?rq=3
- https://gist.github.com/jbranigan/9fd06e4103ccae2335c35d16f2a8c351
- https://cartografiadasmemorias.org/
- https://www.biereanantes.fr/
- Extra libraries:
	- Jquery https://www.w3schools.com/jquery/jquery_get_started.asp 
	- Togeojson https://github.com/mapbox/togeojson
- Plus help from a computer science friend (just to fix errors as I adapted the Mapbox turf.js tutorial) and a LOT of other research into tools, options, discussion forums, troubleshooting, etc.

<b>Data:</b>
- Building hours: https://learningspaces.ubc.ca/sites/learningspaces.ubc.ca/files/BuildingHourStandardizedBuildingsList%202022%20-%20Academic%20Buildings.pdf 
- Microwaves:
	- https://www.reddit.com/r/UBC/comments/1bhdlan/im_making_a_campus_microwave_map_help_me_out/?utm_source=share&utm_medium=web2x&context=3
	- Plus some collected from personal knowledge and friends
	- Icon: https://icons8.com/icon/8028/microwave

<b>Other References:</b>
- https://www.sustain.ubc.ca/sites/default/files/seedslibrary/LunchHubs_Reportv5%20SEEDS_0.pdf
- https://www.ams.ubc.ca/wp-content/uploads/2023/01/v2_Nest-Amenities-Map-1.pdf
- https://food.ok.ubc.ca/microwaves/
- https://microwavemap.itsmaxymoo.com/
- https://map.proxi.co/_gl=1*15fym2x*_ga*MjA5MDEzNDQ1LjE3MTE1MDE2MDE.*_ga_4SFL9W43RV*MTcxMTUwMTYwMC4xLjEuMTcxMTUwMjA1MS41OS4wLjA.#discover
- https://github.com/facilmap/facilmap
  	-My trial map link: https://facilmap.org/U0EUD6ODm6SrMx
