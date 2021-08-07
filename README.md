Misakaa web Assignment

Question :

  Your assignment is to create a web app(Use Reactjs) to display information about only
countries in asia (look for ‘Region’ section in rest api docs) by consuming a rest api and
displaying the data. Show Button to refresh data from rest api.

● Display following attributes - name, capital, flag(display image for each country), region,
subregion, population, borders & languages.

● Rest API docs - https://restcountries.eu/

![image](https://user-images.githubusercontent.com/81148881/128610182-0b739804-06d2-444d-96e3-df33fa9698d2.png)
Img 1
![image](https://user-images.githubusercontent.com/81148881/128610219-154dab2d-1207-4558-ad75-357fc48b3ce9.png)
Img2

The data of all the countries of Asia are fetched And displayed in the above shown formats from the https://restcountries.eu/ REST API.
The details include Name, Capital, Flag, Region, Subregion, Population, Border countries, Launguages.

The Border countries feild in the REST API return alpha3code of each country i.e., IND for India, AFG for Afganistan.
The code is implemented in such a way that it again makes a call to the REST API using the URL https://restcountries.eu/rest/v2/alpha?codes=IND&fields=name
This API call return the Full Name of the country. This Full Name was used to display the Border countries instead if alpha3code, which might be confusing for some users.
![image](https://user-images.githubusercontent.com/81148881/128610486-b8c6907b-ba92-46c1-b412-a169bcd88e1f.png)
