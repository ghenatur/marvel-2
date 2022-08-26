import React from 'react';
import Card from "./Card/Card";
import './Page.css'

const Page = ({heroesPages, index}) => {
    console.log(heroesPages, index)


    return (
        <>

            <div className={`page ${index + 1}`}>
                {heroesPages && heroesPages.map((hero, index) =>
                    <Card
                        key={hero.id}
                        description={hero.description}
                        name={hero.name}
                        path={hero.thumbnail.path}
                        extension={hero.thumbnail.extension}
                        index={index + 1}/>
                )}
            </div>
        </>
    );
};

export default Page;
