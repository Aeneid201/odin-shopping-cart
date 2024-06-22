import banner from "../src/assets/images/bg.jpg"


export default function Home() {
    return(
        <section className="home p-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 p-0">
                        <img src={banner} alt="banner image" />
                    </div>
                </div>
            </div>
        </section>
    )
}