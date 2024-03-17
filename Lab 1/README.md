# Lab 1

Visit map here: https://summer-h-s.github.io/summer-h-s-web/Lab%201/ubc-wildlife-observations.html

![Screenshot 2024-03-04 082056](https://github.com/UBC-GEOS472-Spring2024/summer-h-s/assets/96546063/fd5cf0bc-c2c9-459b-a30d-aa035719cbd8)

## Reflection
I've created this map to show where different animal wildlife has been observed on UBC's campus. Diverse wildlife contributes to healthy ecosystems, but urban environments are typically lacking in biodiversity. Using this map, viewers with a general interest in the topic can explore broad trends, like where wildlife hotspots emerge on campus, as well as localized biodiversity trends by zooming in to a larger-scale, where observations are colour coded by phylum and can be clicked on to show even greater detail about the species sighting. 

I designed the basemap as a darkened outdoors map, which provides important context including: contrast between vegetated and non-vegetated landscapes; contrast with data; simplified information on urban features like streets, paths or buildings; labels for natural landscape features where available; and basic contours with hillshading. I wanted viewers to focus on the data without distraction, though aknowledged the importantance of visible land types and features for my particular context. Certain details like location labels have been set to only show up at higher zooms, to investigate when looking at the data point by point. As the viewer zooms in, I've created a smooth transition (in opacity, shade and size) from heatmap to points. I wanted to reveal animal hotspots from afar yet focus on the individual sightings, but my data was too dense to preserve all points at lower zoom levels (especially with qualitative colouring). This is a challenge faced by many thematic dot maps and a critique I had of other wildlife sighting maps I found. 

This map is version 2.0, because I had to pivot from my previous plan which featured (custom made) icons for each observation that were colour coded by phylum, with an animal symbolizing each class. This was too much to communicate at such density! Another challenge I had with these points was their colour pallete. It took me a while to decide on the 4 distinct colours shown, which contrast enough with muted green tones and are colourblind suitable. I also chose white for the heatmap, to reduce visual clutter at small scales and to prioritize wildlife points as the most detailed feature. Overall, I'm happy with how my map communicates this dense data at both large and small scales. I'd like to improve the interactive console displays, like with a more organized info box or a popup that shows other details from the dataset (eg. the observation's iNaturalist image, which would help when you do not know the scientific name). Plus, I'd prefer to have a legend with phylum at the top rather than repeated at each level and maybe it could fade in at the same zoom level as the points it describes however, my current coding skills limited this. Finally, I would improve the data visualization in places where points exactly overlap, so the console displays every value at those coordinates. 

### Collaboration and Review
I recieved critical feedback while working on this lab from a classmate and some friends outside our class. The classmate offered advice on my basemap colours, which were originally a lot lighter. They liked my qualitative colour pallete, so suggested making a darker or monochrome basemap to contrast better. With others, I also confirmed that the greenspaces were important to visualize, so I darkened and desaturated the basemap enough to make my points stand out without being fully monochrome. When using the finished map, one friend wondered why the points didn't reach into the neighbourhoods surrounding UBC, so we decided I could improve the map in the future by adding a UBC boundary file that can be toggled on and off. For technical help, I looked at a lot of mapbox tutorials. Here is an informal list of the sources I references throughout this lab:

Tutorials and examples that helped inform my code:
- My main thematic inspiration: https://docs.mapbox.com/help/tutorials/make-a-heatmap-with-mapbox-gl-js/
- https://docs.mapbox.com/help/tutorials/choropleth-studio-gl-pt-2/
- https://docs.mapbox.com/mapbox-gl-js/example/popup-on-click
- https://github.com/UBC-GEOB472-Spring2020/tracyw04-web/blob/master/lab1/australianfires.html

Design and visualization references:
- https://learning.oreilly.com/library/view/web-cartography/9781439876220/chapter-30.html
- https://tsitsul.in/blog/coloropt/
- https://vizhub.com/curran/7ff25d963fbe460387ba07ac4c6494c6
- https://wildsafebc.com/programs/what-is-warp/
- https://greencorridors.co.uk/local-maps
- https://www.mdwfp.com/wildlife-hunting/black-bear-program/photo-album/bear-maps

Data:
- Datasets featured:
  - https://github.com/UBCGeodata/ubc-geospatial-opendata/blob/master/ubcv/planning/geojson/ubcv_legal_boundary.geojson![image](https://github.com/UBC-GEOS472-Spring2024/summer-h-s/assets/96546063/1b9c0b7e-4c11-4004-8f36-cc3c95358498)
  - https://www.gbif.org/occurrence/download/0001371-240229165702484
    
- https://experience.arcgis.com/experience/af37ac244de8458c8dc89ab2e7232292/page/Biodiversity-Map/
- https://sustain.ubc.ca/sites/sustain.ubc.ca/files/SEEDS%20Uploads/UBC_BiodiversityAnnualReport_FINAL.pdf
