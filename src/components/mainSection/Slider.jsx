export default function Slider() {
    return (
        <>
            <figure className="icon-cards mt-3">
                <div className="icon-cards__content">
                    <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1"><img
                        src="apple.jpg" className="sliderImg1" alt="not Showing"></img></span></div>
                    <div className="icon-cards__item d-flex align-items-center justify-content-center"><span className="h1"><img
                        src="cloths.png" className="sliderImg2" /></span></div>
                    <div className="icon-cards__item d-flex align-items-center justify-content-center foodImg"><span className="h1"><img
                        src="startup.jpg" className="sliderImg3" /></span></div>
                </div>
            </figure>

            {/* <!-- For Selection --> */}
            <search id="blogBtns"></search>
        </>
    )
}