import React from 'react';
import Card from "./Card/Card";
import './Page.css'

const Page = ({heroesPages}) => {

    return (
        <>
            <div className={`page `}>
                {heroesPages && heroesPages.map((hero, index) =>
                    <Card
                        id={hero.id}
                        key={hero.id}
                        description={hero.description}
                        name={hero.name}
                        path={hero.thumbnail.path}
                        extension={hero.thumbnail.extension}
                        index={index}
                    />
                )}
            </div>
        </>
    );
};

export default Page;
