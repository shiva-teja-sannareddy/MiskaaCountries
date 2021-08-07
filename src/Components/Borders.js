import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Borders(props) {

    var [border,setBorder] = useState(props.border);

    const url = "https://restcountries.eu/rest/v2/alpha?codes="+border+"&fields=name";

    var getBorder = async () => {
        const {data} = await axios.get(url);
        setBorder(data[0].name)
    }

    useEffect(() => {
        getBorder();
    }, []);
    
    return <li>{border}</li>
}

export default Borders;