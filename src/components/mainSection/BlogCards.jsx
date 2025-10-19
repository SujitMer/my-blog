import { useEffect, useState } from "react";

export default function BlogCards({ inputText }) {

    let [blog, setBlog] = useState([]);

    let eventHandler = async (val = inputText || "apple") => {

        let MY_API = dd31c4ae54aa4370b50e9894e66d08fa;
        
        let URL = `https://newsapi.org/v2/everything?q=${val}&from=2025-09-26&to=2025-09-26&
                   sortBy=popularity&apiKey=${MY_API}`;

        try {
            let res = await fetch(URL);
            let data = await res.json();

            setBlog(data.articles);

        } catch (error) {
            console.log("Server Down Che bhai...", error);
        }
    }

    useEffect(() => {
        eventHandler();
    }, [inputText])

    return (
        <>
            <ul className="hList">
                <li>
                    <button className="menu btnb">
                        <h2 className="menu-title">Digitals</h2>
                        <ul className="menu-dropdown">
                            <li onClick={() => eventHandler("apple")}>Apple</li>
                            <li onClick={() => eventHandler("samsung")}>Samsung</li>
                            <li onClick={() => eventHandler("pixel")}>Pixel</li>
                            <li onClick={() => eventHandler("oppo")}>Oppo</li>
                            <li onClick={() => eventHandler("vivo")}>Vivo</li>
                        </ul>
                    </button>
                </li>
                <li>
                    <button className="menu btnb">
                        <h2 className="menu-title menu-title_2nd">Food</h2>
                        <ul className="menu-dropdown">
                            <li onClick={() => eventHandler("helthy food")}>Halthy Food</li>
                            <li onClick={() => eventHandler("fast food")}>Fast Food</li>
                            <li onClick={() => eventHandler("popular dish")}>Popular Dish</li>
                            <li onClick={() => eventHandler("samsung")}>burger</li>

                        </ul>
                    </button>
                </li>
                <li>
                    <button className="menu btnb">
                        <h2 className="menu-title menu-title_3rd">Fashion</h2>
                        <ul className="menu-dropdown">
                            <li onClick={() => eventHandler("wear")}>Clothes</li>
                            <li onClick={() => eventHandler("watch")}>Watch</li>
                            <li onClick={() => eventHandler("adidas")}>Foot Wear</li>
                            <li onClick={() => eventHandler("sunglasses")}>Sun Glasses</li>

                        </ul>
                    </button>
                </li>
                <li>
                    <button className="menu btnb">
                        <h2 className="menu-title menu-title_4th">Business</h2>
                        <ul className="menu-dropdown">
                            <li onClick={() => eventHandler("startups")}>Startups</li>
                            <li onClick={() => eventHandler("Freelancing")}>Freelancing</li>
                            <li onClick={() => eventHandler("Investing")}>Investing</li>
                            <li onClick={() => eventHandler("Digital Marketing")}>Digital Marketing</li>
                        </ul>
                    </button>
                </li>
            </ul>


            {/* <!-- For Selection --> */}
            <search id="blogCard"></search>


            <div className="wrapper">
                <div className="cols">

                    {/*...*/}

                    {blog?.map((blogData, index) => {
                        return (
                            <>
                                <div className="col" onTouchStart={() => this.classList.toggle('hover')} key={index}>
                                    <div className="container">
                                        <div className="front">
                                            <img src={blogData.urlToImage} style={{ height: "300px", width: "290px", borderRadius: "5%" }} alt={index}></img>
                                            <div className="inner">
                                                <p>{blogData.title}</p>
                                                <span>By {blogData.author}</span>
                                            </div>
                                        </div>
                                        <div className="back">
                                            <div className="inner">
                                                <p>{blogData.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )

}