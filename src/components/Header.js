import React, { useEffect } from 'react';
import '../styles/Header.css';
import LightRopes from './LightRopes';

//rfce to create boilerplate

function Header() {

    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    useEffect(() => {
        fetch(`https://imdb-api.com/en/API/Images/pk_ez9grsvu109yfyerc/tt0103064/Short`, requestOptions)
        .then((response) => {console.log(JSON.stringify(response))})
    });

    return (
    <>
        <div className="header bg-cover text-white">
            <LightRopes/>
            <img className="pl-5" src="https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg"/>
            <img className="pl-5" src="https://m.media-amazon.com/images/M/MV5BMmU1NGUzNWQtN2FmNy00NDg5LWFmZTctYjU5NTIxMzI1M2E1XkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg"/>
            <img className="pl-5" src="https://m.media-amazon.com/images/M/MV5BNTkzY2YzNmYtY2ViMS00MThiLWFlYTEtOWQ1OTBiOGEwMTdhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"/>
            
            <div className="mid-border">
                <div className="inner-border shadow-lg p-3 mb-5 bg-white rounded">
                    <p className="headerFont">Welcome to missing this!</p>
                    <p className="headerFont">The place where nostalgia meets bait</p>
                </div>
            </div>
            
            <img className="pl-5" src="https://m.media-amazon.com/images/M/MV5BZTA1ODE3ZDAtMDVkNi00ODAxLWE1MjUtNDAyOWVhZWNjYjUxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"/>
            <img className="pl-5" src="https://m.media-amazon.com/images/M/MV5BOTU2NGQyNzgtMmNlNy00MjU5LTg0OTEtNmY1Yzg4NWRjYzI4XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"/>
            <img className="pl-5" src="https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"/>
            
            
        </div>
        

    </>


    )
}

export default Header